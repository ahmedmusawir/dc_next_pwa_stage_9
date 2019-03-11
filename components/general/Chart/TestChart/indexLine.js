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

class TestChart extends React.Component {
  render() {
    return (
      <VictoryChart
        height={400}
        width={400}
        domainPadding={{ y: 10 }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={d => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                cornerRadius={0}
                flyoutStyle={{ fill: 'white' }}
              />
            }
          />
        }
      >
        <VictoryLine
          data={[
            { x: 1, y: 5, l: 'one' },
            { x: 1.5, y: 5, l: 'one point five' },
            { x: 2, y: 4, l: 'two' },
            { x: 3, y: -2, l: 'three' },
          ]}
          style={{
            data: {
              stroke: 'tomato',
              strokeWidth: (d, active) => {
                return active ? 4 : 2;
              },
            },
            labels: { fill: 'tomato' },
          }}
        />

        <VictoryLine
          data={[
            { x: 1, y: -3, l: 'red' },
            { x: 2, y: 5, l: 'green' },
            { x: 3, y: 3, l: 'blue' },
          ]}
          style={{
            data: {
              stroke: 'blue',
              strokeWidth: (d, active) => {
                return active ? 4 : 2;
              },
            },
            labels: { fill: 'blue' },
          }}
        />

        <VictoryLine
          data={[
            { x: 1, y: 5, l: 'cat' },
            { x: 2, y: -4, l: 'dog' },
            { x: 3, y: -2, l: 'bird' },
          ]}
          style={{
            data: {
              stroke: 'black',
              strokeWidth: (d, active) => {
                return active ? 4 : 2;
              },
            },
            labels: { fill: 'black' },
          }}
        />
      </VictoryChart>
    );
  }
}

export default TestChart;
