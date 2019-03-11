/**
 *
 * <PageContainer />
 *
 * A Page Container with Props
 * Props: fluid, className etc.
 */
import React from 'react';
import { Container } from 'reactstrap';

export const PageContainer = props => {
  const { children } = props;

  return <Container {...props}>{children}</Container>;
};

export default PageContainer;
