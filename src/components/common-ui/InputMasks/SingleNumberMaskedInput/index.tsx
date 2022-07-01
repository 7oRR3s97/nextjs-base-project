import React from 'react';
import { IMaskInput } from 'react-imask';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: any;
}

const SingleNumberMaskedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputRef, ...props }, ref) => {
    return <IMaskInput ref={ref} mask="0" inputRef={inputRef} {...props} />;
  }
);

SingleNumberMaskedInput.displayName = 'SingleNumberMaskedInput';

export default SingleNumberMaskedInput;
