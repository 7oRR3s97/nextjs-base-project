import React from 'react';
import { useTranslation } from 'next-i18next';
import { InputBaseComponentProps } from '@mui/material/InputBase';
import MaskedInput from 'react-text-mask';

import { getDynamicValueFromObject } from 'helpers/typescript/helpers';

const ZipCodeInputMask: React.ElementType<InputBaseComponentProps> =
  React.forwardRef((props, _ref) => {
    const { t } = useTranslation('common');
    const options = {
      Brasil: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
      Portugal: [/[0-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
      US: [/[0-9]/, /\d/, /\d/, /\d/, /\d/],
    };

    return (
      <MaskedInput
        {...props}
        mask={getDynamicValueFromObject(options, t('country')) || []}
        guide={false}
      />
    );
  });

ZipCodeInputMask.displayName = 'ZipCodeInputMask';

export default ZipCodeInputMask;
