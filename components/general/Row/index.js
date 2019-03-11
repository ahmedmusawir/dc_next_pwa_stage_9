/**
 *
 * <Row />
 *
 * A Row Container with Props
 * Props: Reactstrap Utility Classes
 *
 */
import React from 'react';
import { Row as RSRow } from 'reactstrap';

export const Row = props => {
	const { children } = props;
	return <RSRow {...props}>{children}</RSRow>;
};

export default Row;
