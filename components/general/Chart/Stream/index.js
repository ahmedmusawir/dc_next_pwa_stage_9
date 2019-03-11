import React from 'react';
import { range, random } from 'lodash';
import { VictoryChart } from '../packages/victory-chart/src/index';
import { VictoryAxis } from '../packages/victory-axis/src/index';
import { VictoryArea, Area } from '../packages/victory-area/src/index';
import { VictoryLine } from '../packages/victory-line/src/index';

// This custom component is supplied in place of Path
class GradientPath extends React.Component {
	toGrayscale(color) {
		const integerColor = parseInt(color.replace('#', ''), 16);
		const r = (integerColor >> 16) & 255;
		const g = (integerColor >> 8) & 255;
		const b = integerColor & 255;
		const gray = parseInt(0.299 * r + 0.587 * g + 0.114 * b, 10);
		return `rgb(${gray}, ${gray}, ${gray})`;
	}

	componentDidMount() {
		const { style, d, events } = this.props;
		const areaStyle = Object.assign({}, style, {
			fill: `url(${window.location.href}#${gradientId})`,
		});
		return areaStyle;
	}

	render() {
		const { style, d, events } = this.props;
		const gradientId = `gradient-${Math.random()}`;

		const percent = `${this.props.percent}%`;
		const gray = this.toGrayscale(style.fill);
		return (
			<g key="area">
				<defs>
					<linearGradient id={gradientId}>
						<stop offset="0%" stopColor={style.fill} />
						<stop offset={percent} stopColor={style.fill} />
						<stop offset={percent} stopColor={gray} />
						<stop offset="100%" stopColor={gray} />
					</linearGradient>
				</defs>
				<path key="area" style={this.areaStyle} d={d} {...events} />
			</g>
		);
	}
}

class Stream extends React.Component {
	constructor() {
		super();
		this.state = {
			// Imagine tying this to some UI control instead
			percent: random(30, 80),
		};
	}

	// This data is manipulated to approximate a stream.
	getStreamData() {
		return range(7).map(i => {
			return range(26).map(j => {
				return {
					x: j,
					y: (10 - i) * random(10 - i, 20 - 2 * i),
					_y0: -1 * (10 - i) * random(10 - i, 20 - 2 * i),
				};
			});
		});
	}

	render() {
		const streamData = this.getStreamData();

		const colors = [
			'#006064',
			'#00796B',
			'#8BC34A',
			'#DCE775',
			'#FFF59D',
			'#F4511E',
			'#c33409',
		];

		return (
			<div>
				<VictoryChart
					width={400}
					height={400}
					domain={{ x: [0, 25], y: [-250, 250] }}
				>
					<VictoryAxis
						style={{
							axis: { stroke: 'none' },
							ticks: { stroke: 'none' },
							tickLabels: { fill: 'none' },
							grid: { stroke: 'lightGray' },
						}}
						tickCount={20}
					/>
					<VictoryAxis
						dependentAxis
						style={{
							ticks: { stroke: 'gray' },
							tickLabels: { fill: 'gray', fontSize: 12 },
						}}
						crossAxis={false}
					/>

					{streamData.map((d, i) => {
						return (
							<VictoryArea
								key={i}
								interpolation="monotoneX"
								data={d}
								style={{ data: { fill: colors[i], stroke: 'none' } }}
								dataComponent={
									<Area
										pathComponent={
											<GradientPath percent={this.state.percent} />
										}
									/>
								}
							/>
						);
					})}
					<VictoryLine
						style={{
							data: { stroke: '#c33409', strokeWidth: 3 },
						}}
						data={[
							{ x: (25 * this.state.percent) / 100, y: -300 },
							{ x: (25 * this.state.percent) / 100, y: 300 },
						]}
					/>
				</VictoryChart>
			</div>
		);
	}
}

export default Stream;
