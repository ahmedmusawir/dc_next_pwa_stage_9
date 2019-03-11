import styled from 'styled-components';

const getColor = props => {
	let color;
	if (props.light) {
		color = props.theme.colors.text.light;
	} else if (props.info) {
		color = props.theme.colors.text.info;
	} else if (props.danger) {
		color = props.theme.colors.text.danger;
	} else if (props.grey) {
		color = props.theme.colors.text.grey;
	} else {
		color = props.theme.colors.text.dark;
	}
	return color;
};

export const H4 = styled.h4`
	font-family: ${props => props.theme.font.family.primaryFontFamily};
	font-size: ${props => props.theme.font.groups.md.size};
	font-style: ${props => (props.italic ? 'italic' : 'normal')};
	font-weight: ${props =>
		props.fontWeight ? props.fontWeight : props.theme.font.groups.md.weight};
	font-variant: ${props => props.theme.font.groups.md.variant};
	transform: ${props => props.theme.font.groups.md.transform};
	padding: ${props => props.theme.font.groups.md.padding};
	line-height: ${props => props.theme.font.groups.md.height};
	color: ${props => getColor(props)};
`;

H4.defaultProps = {
	theme: {
		colors: {
			text: {
				dark: '#333',
			},
		},
		font: {
			family: {
				primaryFontFamily: 'Montserrat, sans-serif',
			},
			groups: {
				md: {
					size: '1.5rem',
					weight: 'bold',
					height: '1.5rem',
					spacing: null,
					variant: null,
					style: null,
					transform: null,
					padding: '1rem',
				},
			},
		},
	},
};

export default H4;
