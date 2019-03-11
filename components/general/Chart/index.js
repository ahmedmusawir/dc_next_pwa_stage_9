import React, { Component } from 'react';
import Line from './Line';
import LineZoom from './LineZoom';
import Pie from './Pie';
import Wave from './Wave';
import Stream from './Stream';
import AnimSet1 from './AnimSet1';
import AnimSet2 from './AnimSet2';
import TestChart from './TestChart';
import Bars from './Bars';

export class Chart extends Component {
	render() {
		const { type } = this.props;

		switch (type) {
			case 'test':
				return <TestChart />;
			case 'line':
				return <Line />;
			case 'bar':
				return <Bars />;
			case 'linezoom':
				return <LineZoom />;
			case 'pie':
				return <Pie />;
			case 'wave':
				return <Wave />;
			case 'stream':
				return <AnimSet2 />;
			default:
				return <AnimSet1 />;
		}
	}
}

export default Chart;
