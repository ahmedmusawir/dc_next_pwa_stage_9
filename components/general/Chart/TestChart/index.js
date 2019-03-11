import React from 'react';
import PropTypes from 'prop-types';
import { range, merge, random, minBy, maxBy, last, round } from 'lodash';
import { VictoryChart } from '../packages/victory-chart/src/index';
import { VictoryStack } from '../packages/victory-stack/src/index';
import { VictoryGroup } from '../packages/victory-group/src/index';
import { VictoryAxis } from '../packages/victory-axis/src/index';
import { VictoryArea, Area } from '../packages/victory-area/src/index';
import { VictoryBar, Bar } from '../packages/victory-bar/src/index';
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

class TestChart extends React.Component {
	constructor() {
		super();
		this.state = {
			clicked: false,
			style: {
				data: { fill: 'tomato' },
			},
		};
	}

	render() {
		const handleMouseOver = () => {
			const fillColor = this.state.clicked ? 'blue' : 'tomato';
			const clicked = !this.state.clicked;
			this.setState({
				clicked,
				style: {
					data: { fill: fillColor },
				},
			});
		};

		return (
			<div>
				<VictoryChart
					height={400}
					width={400}
					domainPadding={{ x: 50, y: [0, 20] }}
					scale={{ x: 'time' }}
				>
					<VictoryBar
						dataComponent={<Bar events={{ onMouseOver: handleMouseOver }} />}
						style={this.state.style}
						data={[
							{ x: new Date(1986, 1, 1), y: 2 },
							{ x: new Date(1996, 1, 1), y: 3 },
							{ x: new Date(2006, 1, 1), y: 5 },
							{ x: new Date(2016, 1, 1), y: 4 },
						]}
					/>
				</VictoryChart>
			</div>
		);
	}
}

export default TestChart;
