/**
 *
 * <Form />
 *
 * A Form Container with Props
 * Props: fluid etc.
 */
import React from 'react';
import { Form as RSForm } from 'reactstrap';

export const Form = props => {
  const { children } = props;

  return <RSForm {...props}>{children}</RSForm>;
};

export default Form;
