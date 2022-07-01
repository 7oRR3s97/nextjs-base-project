import React from 'react';
import { Controller, Control, Validate, FieldValues } from 'react-hook-form';

import { DeepPath } from '@hookform/strictly-typed/dist/types';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import { Container } from './styles';
interface Props<
  TFieldValues extends FieldValues,
  TFieldName extends DeepPath<TFieldValues, TFieldName>,
  TOptions
> {
  name: TFieldName;
  control: Control<TFieldValues>;
  label: string;
  type: string;
  options: readonly TOptions[];
  getOptionLabel: (options: TOptions) => string;
  isOptionEqualToValue?: (option: TOptions, value: TOptions) => boolean;
  required?: boolean;
  validate?:
    | Validate<TOptions>
    | Record<string, Validate<TOptions>>
    | undefined;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string | null;
  autoComplete?: boolean;
  autoSelect?: boolean;
}

const FormsAutocomplete = <
  TFieldValues extends FieldValues,
  TFieldName extends DeepPath<TFieldValues, TFieldName>,
  TOptions
>({
  name,
  control,
  label,
  type,
  options,
  getOptionLabel,
  isOptionEqualToValue,
  required,
  validate,
  fullWidth,
  error,
  autoComplete,
  autoSelect,
}: Props<TFieldValues, TFieldName, TOptions>) => {
  return (
    <Container>
      <Controller
        name={name as string}
        control={control as Control<Record<string, any>, any>}
        render={({ field }) => (
          <Autocomplete
            {...field}
            onChange={(_, data) => field.onChange(data)}
            options={options}
            onBlur={field.onBlur}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={isOptionEqualToValue}
            popupIcon={<KeyboardArrowDown />}
            autoComplete={autoComplete}
            autoSelect={autoSelect}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                error={error}
                type={type}
                required={required}
                fullWidth={fullWidth}
              />
            )}
          />
        )}
        rules={{
          required,
          validate,
        }}
      />
    </Container>
  );
};

export default FormsAutocomplete;
