import React, { Component } from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.div`
	text-align: center;
	margin: 2rem auto;
	background: #f3f3f3;

	input[type='range'] {
		-webkit-appearance: none;
		background: #b8b7b8;
		width: 200px;
		height: 1rem;
		border-radius: 4px;
		position: relative;
		outline: none;
		background-image: -webkit-gradient(
			linear,
			left top,
			right top,
			color-stop(0.5, #007aff),
			color-stop(0.5, #b8b7b8)
		);
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: #666;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #fff;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}
`;

class RangeSwitch extends Component {
	onChangeHandler = e => {
		const initValue = e.target.value;
		const min = e.target.min;
		const max = e.target.max;

		let value = (initValue - min) / (max - min);
		e.target.style.backgroundImage = [
			'-webkit-gradient(',
			'linear, ',
			'left top, ',
			'right top, ',
			'color-stop(' + value + ', #007aff), ',
			'color-stop(' + value + ', #b8b7b8)',
			')',
		].join('');
	};

	render() {
		return (
			<SwitchContainer>
				<input
					type="range"
					min="1"
					max="100"
					id="range"
					onChange={this.onChangeHandler}
				/>
			</SwitchContainer>
		);
	}
}

export default RangeSwitch;
