import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
	width: 100%;
`;
export const Main = ({ children }) => <MainContainer>{children}</MainContainer>;

export default Main;
