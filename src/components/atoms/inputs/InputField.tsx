import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface InputFieldProps extends Omit<TextFieldProps, 'variant'> {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, ...rest }) => {
  return <TextField label={label} variant="outlined" fullWidth {...rest} />;
};
