/**
 *
 * <Input />
 *
 * A Input Container with Props
 * Props: type, name etc.
 */
import React from 'react';
import { Input as RSInput } from 'reactstrap';

export const Input = props => {
  const { children } = props;

  return <RSInput {...props}>{children}</RSInput>;
};

export default Input;
