import React from 'react';

import { FormComponent } from './styles';

const Form: React.FC<
  React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >
> = ({ ...props }) => {
  return (
    <FormComponent onSubmit={props.onSubmit}>{props.children}</FormComponent>
  );
};

export default Form;
