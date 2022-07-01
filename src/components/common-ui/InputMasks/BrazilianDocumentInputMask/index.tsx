import React from 'react';
import MaskedInput from 'react-text-mask';
import { InputBaseComponentProps } from '@mui/material/InputBase';

const BrazilianDocumentInputMask: React.ElementType<InputBaseComponentProps> =
  React.forwardRef((props, _ref) => {
    return (
      <MaskedInput
        {...props}
        mask={(rawValue) => {
          if (rawValue.length > 14)
            return [
              /[0-9]/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '/',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
            ];
          return [
            /[0-9]/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '.',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
          ];
        }}
        guide={false}
      />
    );
  });

BrazilianDocumentInputMask.displayName = 'BrazilianDocumentInputMask';

export default BrazilianDocumentInputMask;
