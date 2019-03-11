import React from 'react';
import { range, random } from 'lodash';
import { VictoryChart } from '../packages/victory-chart/src/index';
import { VictoryStack } from '../packages/victory-stack/src/index';
import { VictoryArea } from '../packages/victory-area/src/index';
import { VictoryTheme } from '../packages/victory-core/src/index';

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
