import _isFunction from "lodash/isFunction";
import _defaults from "lodash/defaults";
import _uniqBy from "lodash/uniqBy";
import _assign from "lodash/assign";
import { Helpers, LabelHelpers, Scale, Axis } from "victory-core";

var getPosition = function (r, angle, axis) {
  return axis === "x" ? r * Math.cos(angle) : -r * Math.sin(angle);
};

var getAxisType = function (props) {
  var typicalType = props.dependentAxis ? "radial" : "angular";
  var invertedType = typicalType === "angular" ? "radial" : "angular";
  return props.horizontal ? invertedType : typicalType;
};

var filterTicks = function (ticks, scale) {
  var compareTicks = function (t) {
    return scale(t) % (2 * Math.PI);
  };

  return _uniqBy(ticks, compareTicks);
};

var evaluateProp = function (prop, data, index) {
  return _isFunction(prop) ? prop(data, index) : prop;
};

var evaluateStyle = function (style, data, index) {
  if (!style || !Object.keys(style).some(function (value) {
    return _isFunction(style[value]);
  })) {
    return style;
  }

  return Object.keys(style).reduce(function (prev, curr) {
    prev[curr] = evaluateProp(style[curr], data, index);
    return prev;
  }, {});
};

var getEvaluatedStyles = function (style, tick, index) {
  return {
    tickStyle: evaluateStyle(style.ticks, tick, index),
    labelStyle: evaluateStyle(style.tickLabels, tick, index),
    gridStyle: evaluateStyle(style.grid, tick, index)
  };
};

var getStyleObject = function (props) {
  var theme = props.theme,
      dependentAxis = props.dependentAxis;
  var generalAxisStyle = theme && theme.axis && theme.axis.style;
  var axisType = dependentAxis ? "dependentAxis" : "independentAxis";
  var specificAxisStyle = theme && theme[axisType] && theme[axisType].style;

  var mergeStyles = function () {
    var styleNamespaces = ["axis", "axisLabel", "grid", "parent", "tickLabels", "ticks"];
    return styleNamespaces.reduce(function (memo, curr) {
      memo[curr] = _defaults({}, specificAxisStyle[curr], generalAxisStyle[curr]);
      return memo;
    }, {});
  };

  return generalAxisStyle && specificAxisStyle ? mergeStyles() : specificAxisStyle || generalAxisStyle;
};

var getRadius = function (props) {
  var _Helpers$getPadding = Helpers.getPadding(props),
      left = _Helpers$getPadding.left,
      right = _Helpers$getPadding.right,
      top = _Helpers$getPadding.top,
      bottom = _Helpers$getPadding.bottom;

  var width = props.width,
      height = props.height;
  return Math.min(width - left - right, height - top - bottom) / 2;
};

var getRange = function (props, axis) {
  // Return the range from props if one is given.
  if (props.range && props.range[axis]) {
    return props.range[axis];
  } else if (props.range && Array.isArray(props.range)) {
    return props.range;
  }

  var axisType = getAxisType(props);

  if (axisType === "angular") {
    var startAngle = Helpers.degreesToRadians(props.startAngle);
    var endAngle = Helpers.degreesToRadians(props.endAngle);
    return [startAngle, endAngle];
  }

  var radius = getRadius(props);
  return [props.innerRadius || 0, radius];
}; // exposed for use by VictoryChart (necessary?)


var getScale = function (props) {
  var axis = Axis.getAxis(props);
  var scale = Scale.getBaseScale(props, axis);
  var domain = Axis.getDomain(props, axis) || scale.domain();
  var range = getRange(props, axis);
  scale.range(range);
  scale.domain(domain);
  return scale;
};

var getStyles = function (props, styleObject) {
  var style = props.style || {};
  styleObject = styleObject || {};
  var parentStyleProps = {
    height: "auto",
    width: "100%"
  };
  return {
    parent: _defaults(parentStyleProps, style.parent, styleObject.parent),
    axis: _defaults({}, style.axis, styleObject.axis),
    axisLabel: _defaults({}, style.axisLabel, styleObject.axisLabel),
    grid: _defaults({}, style.grid, styleObject.grid),
    ticks: _defaults({}, style.ticks, styleObject.ticks),
    tickLabels: _defaults({}, style.tickLabels, styleObject.tickLabels)
  };
};

var getAxisAngle = function (props) {
  var axisAngle = props.axisAngle,
      startAngle = props.startAngle,
      axisValue = props.axisValue,
      dependentAxis = props.dependentAxis,
      scale = props.scale;
  var otherAxis = Axis.getAxis(props) === "y" ? "x" : "y";

  if (axisValue === undefined || !dependentAxis || scale[otherAxis] === undefined) {
    return axisAngle === undefined ? startAngle : axisAngle;
  }

  return Helpers.radiansToDegrees(scale.x(axisValue));
}; //eslint-disable-next-line max-params


var getTickProps = function (props, calculatedValues, tick, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      scale = calculatedValues.scale,
      style = calculatedValues.style,
      stringTicks = calculatedValues.stringTicks;
  var originalTick = stringTicks ? stringTicks[index] : tick;

  var _getEvaluatedStyles = getEvaluatedStyles(style, originalTick, index),
      tickStyle = _getEvaluatedStyles.tickStyle;

  var tickPadding = tickStyle.padding || 0;
  var angularPadding = tickPadding; // TODO: do some geometry

  var axisAngle = axisType === "radial" ? getAxisAngle(props, scale) : undefined;
  return axisType === "angular" ? {
    index: index,
    datum: tick,
    style: tickStyle,
    x1: radius * Math.cos(scale(tick)),
    y1: -radius * Math.sin(scale(tick)),
    x2: (radius + tickPadding) * Math.cos(scale(tick)),
    y2: -(radius + tickPadding) * Math.sin(scale(tick))
  } : {
    style: style,
    index: index,
    datum: tick,
    x1: scale(tick) / 2 * Math.cos(axisAngle - angularPadding),
    x2: scale(tick) / 2 * Math.cos(axisAngle + angularPadding),
    y1: -(scale(tick) / 2) * Math.sin(axisAngle - angularPadding),
    y2: -(scale(tick) / 2) * Math.sin(axisAngle + angularPadding)
  };
}; //eslint-disable-next-line max-params


var getTickLabelProps = function (props, calculatedValues, tick, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      tickFormat = calculatedValues.tickFormat,
      style = calculatedValues.style,
      scale = calculatedValues.scale,
      ticks = calculatedValues.ticks,
      stringTicks = calculatedValues.stringTicks;
  var originalTick = stringTicks ? stringTicks[index] : tick;

  var _getEvaluatedStyles2 = getEvaluatedStyles(style, originalTick, index),
      labelStyle = _getEvaluatedStyles2.labelStyle;

  var tickLabelComponent = props.tickLabelComponent;
  var labelPlacement = tickLabelComponent.props && tickLabelComponent.props.labelPlacement ? tickLabelComponent.props.labelPlacement : props.labelPlacement;
  var tickPadding = labelStyle.padding || 0;
  var angularPadding = 0; // TODO: do some geometry

  var axisAngle = axisType === "radial" ? getAxisAngle(props, scale) : undefined;
  var labelAngle = axisType === "angular" ? Helpers.radiansToDegrees(scale(tick)) : axisAngle + angularPadding;
  var textAngle = labelStyle.angle === undefined ? LabelHelpers.getPolarAngle(_assign({}, props, {
    labelPlacement: labelPlacement
  }), labelAngle) : labelStyle.angle;
  var labelRadius = axisType === "angular" ? radius + tickPadding : scale(tick);
  var textAnchor = labelStyle.textAnchor || LabelHelpers.getPolarTextAnchor(_assign({}, props, {
    labelPlacement: labelPlacement
  }), labelAngle);
  return {
    index: index,
    datum: tick,
    style: labelStyle,
    angle: textAngle,
    textAnchor: textAnchor,
    text: tickFormat(tick, index, ticks),
    x: labelRadius * Math.cos(Helpers.degreesToRadians(labelAngle)),
    y: -labelRadius * Math.sin(Helpers.degreesToRadians(labelAngle))
  };
}; //eslint-disable-next-line max-params


var getGridProps = function (props, calculatedValues, tick, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      style = calculatedValues.style,
      scale = calculatedValues.scale,
      stringTicks = calculatedValues.stringTicks;
  var startAngle = props.startAngle,
      endAngle = props.endAngle,
      _props$innerRadius = props.innerRadius,
      innerRadius = _props$innerRadius === void 0 ? 0 : _props$innerRadius;
  var originalTick = stringTicks ? stringTicks[index] : tick;

  var _getEvaluatedStyles3 = getEvaluatedStyles(style, originalTick, index),
      gridStyle = _getEvaluatedStyles3.gridStyle;

  var angle = scale(tick);
  return axisType === "angular" ? {
    index: index,
    datum: tick,
    style: gridStyle,
    x1: getPosition(radius, angle, "x"),
    y1: getPosition(radius, angle, "y"),
    x2: getPosition(innerRadius, angle, "x"),
    y2: getPosition(innerRadius, angle, "y")
  } : {
    style: gridStyle,
    index: index,
    datum: tick,
    cx: 0,
    cy: 0,
    r: scale(tick),
    startAngle: startAngle,
    endAngle: endAngle
  };
};

var getAxisLabelProps = function (props, calculatedValues) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      style = calculatedValues.style,
      scale = calculatedValues.scale;
  var axisLabelComponent = props.axisLabelComponent;

  if (axisType !== "radial") {
    return {};
  }

  var labelPlacement = axisLabelComponent.props && axisLabelComponent.props.labelPlacement ? axisLabelComponent.props.labelPlacement : props.labelPlacement;
  var labelStyle = style && style.axisLabel || {};
  var axisAngle = axisType === "radial" ? getAxisAngle(props, scale) : undefined;
  var textAngle = labelStyle.angle === undefined ? LabelHelpers.getPolarAngle(_assign({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle) : labelStyle.angle;
  var labelRadius = radius + (labelStyle.padding || 0);
  var textAnchor = labelStyle.textAnchor || LabelHelpers.getTextPolarAnchor(_assign({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle);
  var verticalAnchor = labelStyle.verticalAnchor || LabelHelpers.getPolarVerticalAnchor(_assign({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle);
  return {
    style: labelStyle,
    angle: textAngle,
    textAnchor: textAnchor,
    verticalAnchor: verticalAnchor,
    text: props.label,
    x: getPosition(labelRadius, Helpers.degreesToRadians(axisAngle), "x"),
    y: getPosition(labelRadius, Helpers.degreesToRadians(axisAngle), "y")
  };
};

var getAxisProps = function (modifiedProps, calculatedValues) {
  var style = calculatedValues.style,
      axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      scale = calculatedValues.scale;
  var startAngle = modifiedProps.startAngle,
      endAngle = modifiedProps.endAngle,
      _modifiedProps$innerR = modifiedProps.innerRadius,
      innerRadius = _modifiedProps$innerR === void 0 ? 0 : _modifiedProps$innerR;
  var axisAngle = axisType === "radial" ? Helpers.degreesToRadians(getAxisAngle(modifiedProps, scale)) : undefined;
  return axisType === "radial" ? {
    style: style.axis,
    x1: getPosition(innerRadius, axisAngle, "x"),
    x2: getPosition(radius, axisAngle, "x"),
    y1: getPosition(innerRadius, axisAngle, "y"),
    y2: getPosition(radius, axisAngle, "y")
  } : {
    style: style.axis,
    cx: 0,
    cy: 0,
    r: radius,
    startAngle: startAngle,
    endAngle: endAngle
  };
};

var getRole = function (props) {
  if (props.dependentAxis) {
    return props.theme && props.theme.dependentAxis ? "dependentAxis" : "axis";
  }

  return props.theme && props.theme.independentAxis ? "independentAxis" : "axis";
};

var getShallowMergedThemeProps = function (props, role) {
  var axisTheme = props.theme.axis || {};
  return _defaults({}, props.theme[role], axisTheme);
};

var modifyProps = function (props, fallbackProps, role) {
  if (role !== "axis") {
    props.theme[role] = getShallowMergedThemeProps(props, role);
  }

  return Helpers.modifyProps(props, fallbackProps, role);
};

var getCalculatedValues = function (props) {
  props = _assign({
    polar: true
  }, props);
  var defaultStyles = getStyleObject(props);
  var style = getStyles(props, defaultStyles);
  var padding = Helpers.getPadding(props);
  var axis = Axis.getAxis(props);
  var axisType = getAxisType(props);
  var stringTicks = Axis.stringTicks(props) ? props.tickValues : undefined;
  var domain = Axis.getDomain(props, axis);
  var range = getRange(props, axis);
  var scale = getScale(props);
  var initialTicks = Axis.getTicks(props, scale);
  var ticks = axisType === "angular" ? filterTicks(initialTicks, scale) : initialTicks;
  var tickFormat = Axis.getTickFormat(props, scale);
  var radius = getRadius(props);
  return {
    axis: axis,
    style: style,
    padding: padding,
    stringTicks: stringTicks,
    axisType: axisType,
    scale: scale,
    ticks: ticks,
    tickFormat: tickFormat,
    domain: domain,
    range: range,
    radius: radius
  };
};

var getBaseProps = function (props, fallbackProps) {
  var role = getRole(props);
  props = modifyProps(props, fallbackProps, role);
  var calculatedValues = getCalculatedValues(props);
  var style = calculatedValues.style,
      scale = calculatedValues.scale,
      ticks = calculatedValues.ticks,
      domain = calculatedValues.domain;
  var _props = props,
      width = _props.width,
      height = _props.height,
      standalone = _props.standalone,
      theme = _props.theme,
      name = _props.name;
  var axisProps = getAxisProps(props, calculatedValues);
  var axisLabelProps = getAxisLabelProps(props, calculatedValues);
  var initialChildProps = {
    parent: {
      style: style.parent,
      ticks: ticks,
      scale: scale,
      width: width,
      height: height,
      domain: domain,
      standalone: standalone,
      theme: theme,
      name: name
    }
  };
  return ticks.reduce(function (childProps, tick, index) {
    childProps[index] = {
      axis: axisProps,
      axisLabel: axisLabelProps,
      ticks: getTickProps(props, calculatedValues, tick, index),
      tickLabels: getTickLabelProps(props, calculatedValues, tick, index),
      grid: getGridProps(props, calculatedValues, tick, index)
    };
    return childProps;
  }, initialChildProps);
};

export { getScale, getStyles, getBaseProps };