/**
 *
 * <FormGroup />
 *
 * A FormGroup Container with Props
 * Props: fluid etc.
 */
import React from 'react';
import { FormGroup as RSFormGroup } from 'reactstrap';

export const FormGroup = props => {
  const { children } = props;

  return <RSFormGroup {...props}>{children}</RSFormGroup>;
};

export default FormGroup;
