import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';

interface SelecInputProps extends Omit<SelectProps, 'variant'> {
  label: string;
  options: Options[];
  value: string | number;
  error: boolean | undefined;
  helperText: string | false | undefined;
}

interface Options {
  label: string;
  value: number;
}

export const SelectInput: React.FC<SelecInputProps> = ({
  label,
  options,
  error,
  helperText,
  ...rest
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select label={label} error={error} {...rest}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;
