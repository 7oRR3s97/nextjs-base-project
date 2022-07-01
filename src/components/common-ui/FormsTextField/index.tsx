import React from 'react';
import { Controller, Control, Validate, FieldValues } from 'react-hook-form';

import { DeepPath, DeepPathValue } from '@hookform/strictly-typed/dist/types';

import TextField from '@mui/material/TextField';
import { InputBaseComponentProps } from '@mui/material/InputBase';
import { InputLabelProps } from '@mui/material/InputLabel';

import { Container } from './styles';

interface Props<
  TFieldValues extends FieldValues,
  TFieldName extends DeepPath<TFieldValues, TFieldName>
> {
  name: TFieldName;
  control: Control<TFieldValues>;
  label: string;
  type: string;
  required?: boolean;
  maxLength?: number;
  validate?:
    | Validate<DeepPathValue<TFieldValues, TFieldName>>
    | Record<string, Validate<DeepPathValue<TFieldValues, TFieldName>>>
    | undefined;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string | null;
  inputComponent?: React.ElementType<InputBaseComponentProps>;
  inputLabelProps?: InputLabelProps;
  disabled?: boolean;
  pattern?: RegExp;
}

const FormsTextField = <
  TFieldValues extends FieldValues,
  TFieldName extends DeepPath<TFieldValues, TFieldName>
>({
  name,
  control,
  label,
  type,
  required,
  maxLength,
  validate,
  fullWidth,
  error,
  helperText,
  inputComponent,
  inputLabelProps,
  disabled,
  pattern,
}: Props<TFieldValues, TFieldName>) => {
  return (
    <Container>
      <Controller
        name={name as string}
        control={control as Control<Record<string, any>, any>}
        render={({ field }) => (
          <TextField
            {...field}
            onBlur={field.onBlur}
            label={label}
            error={error}
            helperText={helperText}
            required={required}
            fullWidth={fullWidth}
            type={type}
            InputProps={{ inputComponent }}
            InputLabelProps={inputLabelProps}
            disabled={disabled}
          />
        )}
        rules={{
          required,
          maxLength,
          validate,
          pattern,
        }}
      />
    </Container>
  );
};

export default FormsTextField;
