import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface InputFieldProps extends Omit<TextFieldProps, 'variant'> {
  label: string;
  variant?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  variant,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      variant={variant ? 'standard' : 'outlined'}
      fullWidth
      {...rest}
    />
  );
};
