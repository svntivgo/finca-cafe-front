//Libraries
import React from 'react';
import { Button as ButtonMui } from '@mui/material';

//Interfaces & Styled Components
import { ButtonProps } from '..';
import { COLORS } from '../../../constants/colors';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonMui variant="contained" {...config(props)}>
      {props.text}
    </ButtonMui>
  );
};

const config = (props: ButtonProps) => {
  const { onClick, type, disabled } = props;
  const style = configStyles(props);

  return { onClick, type, disabled, style };
};

const configStyles = (props: ButtonProps): React.CSSProperties => {
  const { disabled } = props;
  const backgroundColor = props.style.backgroundColor;
  const width = props.style.width;
  props.style.backgroundColor = disabled ? COLORS.SMOKE_GREY : backgroundColor;
  props.style.width = width ?? 'fit-content';

  return {
    borderRadius: '8px',
    boxShadow: 'unset',
    font: 'Poppins',
    fontSize: '1rem',
    margin: '2rem 1rem',
    padding: '0.5rem 2rem',
    ...props.style,
  };
};
