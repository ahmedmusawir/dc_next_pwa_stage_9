import _isNil from "lodash/isNil";
import _assign from "lodash/assign";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { Helpers, LabelHelpers, Data, Domain, Scale } from "victory-core";

var getDataWithBaseline = function (props, scale) {
  var data = Data.getData(props);

  if (data.length < 2) {
    data = [];
  }

  var defaultMin = Scale.getType(scale.y) === "log" ? 1 / Number.MAX_SAFE_INTEGER : 0;
  var domainY = scale.y.domain();
  var minY = Math.min.apply(Math, _toConsumableArray(domainY)) > 0 ? Math.min.apply(Math, _toConsumableArray(domainY)) : defaultMin;
  return data.map(function (datum) {
    if ((datum._y1 !== undefined || datum._y !== undefined) && datum._y0 !== undefined) {
      return datum;
    }

    var _y1 = datum._y1 !== undefined ? datum._y1 : datum._y;

    var _y0 = datum._y0 !== undefined ? datum._y0 : minY;

    return _assign({}, datum, {
      _y0: _y0,
      _y1: _y1
    });
  });
};

var getCalculatedValues = function (props) {
  var theme = props.theme,
      polar = props.polar;
  var defaultStyles = theme && theme.area && theme.area.style ? theme.area.style : {};
  var style = Helpers.getStyles(props.style, defaultStyles);
  var range = {
    x: Helpers.getRange(props, "x"),
    y: Helpers.getRange(props, "y")
  };
  var domain = {
    x: Domain.getDomainWithZero(props, "x"),
    y: Domain.getDomainWithZero(props, "y")
  };
  var scale = {
    x: Scale.getBaseScale(props, "x").domain(domain.x).range(range.x),
    y: Scale.getBaseScale(props, "y").domain(domain.y).range(range.y)
  };
  var origin = polar ? props.origin || Helpers.getPolarOrigin(props) : undefined;
  var data = getDataWithBaseline(props, scale);
  return {
    style: style,
    data: data,
    scale: scale,
    domain: domain,
    origin: origin
  };
};

var getBaseProps = function (props, fallbackProps) {
  var modifiedProps = Helpers.modifyProps(props, fallbackProps, "area");
  props = _assign({}, modifiedProps, getCalculatedValues(modifiedProps));
  var _props = props,
      data = _props.data,
      domain = _props.domain,
      events = _props.events,
      groupComponent = _props.groupComponent,
      height = _props.height,
      interpolation = _props.interpolation,
      origin = _props.origin,
      padding = _props.padding,
      polar = _props.polar,
      scale = _props.scale,
      sharedEvents = _props.sharedEvents,
      standalone = _props.standalone,
      style = _props.style,
      theme = _props.theme,
      width = _props.width,
      labels = _props.labels,
      name = _props.name;
  var initialChildProps = {
    parent: {
      style: style.parent,
      width: width,
      height: height,
      scale: scale,
      data: data,
      domain: domain,
      standalone: standalone,
      theme: theme,
      polar: polar,
      origin: origin,
      padding: padding,
      name: name
    },
    all: {
      data: {
        polar: polar,
        origin: origin,
        scale: scale,
        data: data,
        interpolation: interpolation,
        groupComponent: groupComponent,
        style: style.data
      }
    }
  };
  return data.reduce(function (childProps, datum, index) {
    var text = LabelHelpers.getText(props, datum, index);

    if (text !== undefined && text !== null || labels && (events || sharedEvents)) {
      var eventKey = !_isNil(datum.eventKey) ? datum.eventKey : index;
      childProps[eventKey] = {
        labels: LabelHelpers.getProps(props, index)
      };
    }

    return childProps;
  }, initialChildProps);
};

export { getBaseProps, getDataWithBaseline };