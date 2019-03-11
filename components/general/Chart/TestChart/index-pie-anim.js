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
import { VictoryPie } from '../packages/victory-pie/src/index';
import {
  VictoryTheme,
  VictoryClipContainer,
  VictoryPortal,
  VictoryAnimation,
  VictoryLabel,
} from '../packages/victory-core/src/index';

class TestChart extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 25,
      data: this.getData(0),
    };
  }

  componentDidMount() {
    let percent = 25;
    this.setStateInterval = window.setInterval(() => {
      percent += Math.random() * 25;
      percent = percent > 100 ? 0 : percent;
      this.setState({
        percent,
        data: this.getData(percent),
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400}
            height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: {
                fill: d => {
                  const color = d.y > 30 ? 'green' : 'red';
                  return d.x === 1 ? color : 'transparent';
                },
              },
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {newProps => {
              return (
                <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  x={200}
                  y={200}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default TestChart;
