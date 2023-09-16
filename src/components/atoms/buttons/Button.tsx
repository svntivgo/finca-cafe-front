//Libraries
import React from 'react';

//Interfaces & Styled Components
import { ButtonProps, StyledButton } from '..';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton variant="contained" colors={props.colors}>
      {props.text}
    </StyledButton>
  );
};
