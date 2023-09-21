//Libraries
import React from 'react';

//Interfaces & Styled Components
import { ButtonProps, StyledButton } from '..';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      colors={props.colors}
      font={props.font}
      onClick={props.onCLick}
      variant="contained"
    >
      {props.text}
    </StyledButton>
  );
};
