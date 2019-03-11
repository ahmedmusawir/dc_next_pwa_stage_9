/* globals window */
/*eslint-disable no-magic-numbers,react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { range, merge, random, minBy, maxBy, last, round } from 'lodash';
import { VictoryChart } from '../packages/victory-chart/src/index';
import { VictoryStack } from '../packages/victory-stack/src/index';
import { VictoryGroup } from '../packages/victory-group/src/index';
import { VictoryAxis } from '../packages/victory-axis/src/index';
import { VictoryArea } from '../packages/victory-area/src/index';
import { VictoryBar } from '../packages/victory-bar/src/index';
import { VictoryLine } from '../packages/victory-line/src/index';
import { VictoryScatter } from '../packages/victory-scatter/src/index';
import { VictoryZoomContainer } from '../packages/victory-zoom-container/src/index';
import { VictoryTooltip } from '../packages/victory-tooltip/src/index';
import { VictoryLegend } from '../packages/victory-legend/src/index';
import {
  VictoryTheme,
  VictoryClipContainer,
  VictoryPortal,
} from '../packages/victory-core/src/index';

class TestChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 4000);
  }

  getData() {
    return range(7).map(() => {
      return [
        { x: 1, y: random(1, 5) },
        { x: 2, y: random(1, 10) },
        { x: 3, y: random(2, 10) },
        { x: 4, y: random(2, 10) },
        { x: 5, y: random(2, 15) },
      ];
    });
  }

  render() {
    return (
      <VictoryChart theme={VictoryTheme.material} animate={{ duration: 1000 }}>
        <VictoryStack colorScale={'blue'}>
          {this.state.data.map((data, i) => {
            return <VictoryArea key={i} data={data} interpolation={'basis'} />;
          })}
        </VictoryStack>
      </VictoryChart>
    );
  }
}

export default TestChart;
