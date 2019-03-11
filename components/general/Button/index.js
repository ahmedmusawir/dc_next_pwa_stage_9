/**
 *
 * <Button />
 *
 * A Button Container with Props
 * Props: fluid etc.
 */
import React from 'react';
import { Button as RSButton } from 'reactstrap';

export const Button = props => {
	const { children } = props;

	return <RSButton {...props}>{children}</RSButton>;
};

export default Button;
