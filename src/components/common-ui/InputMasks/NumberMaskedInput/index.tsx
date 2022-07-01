import React from 'react';
import { IMaskInput } from 'react-imask';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: any;
}

const NumberMaskedInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputRef, ...props }, ref) => {
    return (
      <IMaskInput ref={ref} mask={Number} inputRef={inputRef} {...props} />
    );
  }
);

NumberMaskedInput.displayName = 'NumberMaskedInput';

export default NumberMaskedInput;
