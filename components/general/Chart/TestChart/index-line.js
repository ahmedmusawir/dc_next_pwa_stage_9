/* globals window */
/*eslint-disable no-magic-numbers,react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { range, merge, random, minBy, maxBy, last, round } from 'lodash';
import { VictoryChart } from '../packages/victory-chart/src/index';
import { VictoryStack } from '../packages/victory-stack/src/index';
import { VictoryGroup } from '../packages/victory-group/src/index';
import { VictoryAxis } from '../packages/victory-axis/src/index';
import { VictoryArea, Area } from '../packages/victory-area/src/index';
import { VictoryBar } from '../packages/victory-bar/src/index';
import { VictoryLine } from '../packages/victory-line/src/index';
import { VictoryVoronoiContainer } from '../packages/victory-voronoi-container/src/index';
import { VictoryBrushContainer } from '../packages/victory-brush-container/src/index';
import { VictoryScatter } from '../packages/victory-scatter/src/index';
import { VictoryZoomContainer } from '../packages/victory-zoom-container/src/index';
import { VictoryTooltip } from '../packages/victory-tooltip/src/index';
import { VictoryLegend } from '../packages/victory-legend/src/index';
import { VictoryPie } from '../packages/victory-pie/src/index';
import {
  VictoryTheme,
  VictoryClipContainer,
  VictoryPortal,
  VictoryAnimation,
  VictoryLabel,
} from '../packages/victory-core/src/index';
import TestChart from '../Wave';

class TestChart extends React.Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] },
    };
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }

  render() {
    return (
      <div>
        <VictoryChart
          width={600}
          height={470}
          scale={{ x: 'time' }}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryLine
            style={{
              data: { stroke: 'tomato' },
            }}
            data={[
              { a: new Date(1982, 1, 1), b: 125 },
              { a: new Date(1987, 1, 1), b: 257 },
              { a: new Date(1993, 1, 1), b: 345 },
              { a: new Date(1997, 1, 1), b: 515 },
              { a: new Date(2001, 1, 1), b: 132 },
              { a: new Date(2005, 1, 1), b: 305 },
              { a: new Date(2011, 1, 1), b: 270 },
              { a: new Date(2015, 1, 1), b: 470 },
            ]}
            x="a"
            y="b"
          />
        </VictoryChart>
        <VictoryChart
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          width={600}
          height={100}
          scale={{ x: 'time' }}
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={this.state.zoomDomain}
              onBrushDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryAxis tickFormat={x => new Date(x).getFullYear()} />
          <VictoryLine
            style={{
              data: { stroke: 'tomato' },
            }}
            data={[
              { key: new Date(1982, 1, 1), b: 125 },
              { key: new Date(1987, 1, 1), b: 257 },
              { key: new Date(1993, 1, 1), b: 345 },
              { key: new Date(1997, 1, 1), b: 515 },
              { key: new Date(2001, 1, 1), b: 132 },
              { key: new Date(2005, 1, 1), b: 305 },
              { key: new Date(2011, 1, 1), b: 270 },
              { key: new Date(2015, 1, 1), b: 470 },
            ]}
            x="key"
            y="b"
          />
        </VictoryChart>
      </div>
    );
  }
}

export default TestChart;
