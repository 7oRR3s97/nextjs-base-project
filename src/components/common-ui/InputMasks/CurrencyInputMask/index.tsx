import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { InputBaseComponentProps } from '@mui/material/InputBase';

const CurrencyInputMask: React.ElementType<InputBaseComponentProps> =
  React.forwardRef((props, _ref) => {
    const defaultMaskOptions = {
      prefix: '',
      sufix: '',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: '.',
      allowDecimal: false,
      decimalSymbol: ',',
      decimalLimit: 2,
      allowNegative: false,
      allowLeadingZeroes: false,
    };

    const currencyMask = createNumberMask({
      ...defaultMaskOptions,
    });

    return <MaskedInput {...props} mask={currencyMask} />;
  });

CurrencyInputMask.displayName = 'CurrencyInputMask';

export default CurrencyInputMask;
