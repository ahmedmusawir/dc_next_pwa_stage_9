import styled from 'styled-components';

export const InlineList = styled.div`
	display: flex;
	flex-direction: row;
	align-items: ${props => props.align};
	justify-content: ${props => props.justify};
	flex-direction: ${props => props.direction};
`;

InlineList.defaultProps = {
	align: 'center',
	justify: 'center',
	direction: 'row',
};
export default InlineList;
