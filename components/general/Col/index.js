/**
 *
 * <Col />
 *
 * A Column Container with Props
 * Props: sm md lg xl etc.
 *
 */
import React from 'react';
import { Col as RSCol } from 'reactstrap';

export const Col = props => {
	const { children } = props;

	return <RSCol {...props}>{children}</RSCol>;
};

export default Col;
