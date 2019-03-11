import styled from 'styled-components';

export const PageBackground = styled.div`
	display: block;
	background: url(${props => props.imgSrc}) fixed;
	height: 100%;
	background-position: left top;
	background-repeat: no-repeat;
	background-size: cover;
`;

PageBackground.defaultProps = {
	theme: {},
};

export default PageBackground;
