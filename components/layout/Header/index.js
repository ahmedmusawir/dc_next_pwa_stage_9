import React from 'react';
import styled from 'styled-components';
import MainNav from 'components/navigation/MainNav';

const HeaderContainer = styled.div`
	// position: relative;
`;

/* eslint-disable react/prefer-stateless-function */
export const Header = () => (
	<HeaderContainer>
		<MainNav />
	</HeaderContainer>
);

export default Header;
