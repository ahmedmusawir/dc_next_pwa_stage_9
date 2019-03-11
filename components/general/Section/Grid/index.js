/**
 *
 * GridSection.js
 *
 * Renders a CSS Grid Content Section with styles and props
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

const GridSection = styled.section`
	background: ${props => getBackground(props)};
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 30rem;

	@media screen and (min-width: ${props => props.gridStart}) {
		display: grid;
		grid-gap: ${props => props.gap};
		grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
		grid-auto-flow: row dense;
		list-style: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
		width: 100%;
		max-width: 120rem;
		overflow: hidden;
	}
`;

GridSection.defaultProps = {
	gap: '8px',
	gridStart: '760px',
};

export default GridSection;
