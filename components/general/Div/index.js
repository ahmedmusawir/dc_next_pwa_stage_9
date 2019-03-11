/**
 *
 * <Div />
 *
 * A Simple div Container with Props
 *
 */
import styled from 'styled-components';

export const Div = styled.div`
	// border: 1px solid red;
	min-height: ${props => props.minHeight};
	min-width: ${props => props.minWidth};
`;

Div.defaultProps = {
	theme: {},
	minHeight: '',
	minWidth: '',
};

export default Div;
