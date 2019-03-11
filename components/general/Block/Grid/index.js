/**
 *
 * GridBlock.js
 *
 * Renders a Content Section with styles and props
 */

import styled from 'styled-components';

const getBackground = props => {
	let bgColor;
	const themeBgColor = props.theme.palette.background;

	if (props.bgImgLink) {
		if (props.parallax) {
			bgColor = `url(${props.bgImgLink}) fixed`;
		} else {
			bgColor = `url(${props.bgImgLink})`;
		}
	} else if (props.bgColor === 'dark') {
		bgColor = themeBgColor.dark;
	} else if (props.bgColor === 'light') {
		bgColor = themeBgColor.light;
	} else if (props.bgColor === 'grey') {
		bgColor = themeBgColor.grey;
	} else if (props.bgColor === 'dimgray') {
		bgColor = themeBgColor.dimgray;
	} else if (props.bgColor === 'blue') {
		bgColor = themeBgColor.blue;
	} else if (props.bgColor === 'white') {
		bgColor = themeBgColor.white;
	} else if (props.bgColor === 'lightblue') {
		bgColor = themeBgColor.lightblue;
	} else if (props.bgColor === 'gradient') {
		bgColor = themeBgColor.gradient;
	} else {
		bgColor = themeBgColor.neutral;
	}
	return bgColor;
};

const GridBlock = styled.div`
	cursor: move;
	background: ${props => getBackground(props)};
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 2rem;

	grid-area: ${props => {
		let ratio;
		if (props.size === 'xs') {
			ratio = 'span 1 / span 1';
		} else if (props.size === 'sm') {
			ratio = 'span 2 / span 3';
		} else if (props.size === 'md') {
			ratio = 'span 3 / span 3';
		} else if (props.size === 'lg') {
			ratio = 'span 4 / span 6';
		} else if (props.size === 'custom') {
			ratio = 'span 4 / span 4';
		}
		return ratio;
	}};
`;

GridBlock.defaultProps = {
	size: 'md',
};

export default GridBlock;
