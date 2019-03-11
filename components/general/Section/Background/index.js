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

export const SectionBackground = styled.section`
	background: ${props => getBackground(props)};
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	@media (max-width: 640px) {
		background-attachment: initial;
	}
`;

export default SectionBackground;
