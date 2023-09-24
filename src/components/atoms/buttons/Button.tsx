//Libraries
import React from 'react';

//Interfaces & Styled Components
import { ButtonProps, StyledButton } from '..';

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      colors={props.colors}
      font={props.font}
      margin={props.margin}
      onClick={props.onCLick}
      padding={props.padding}
      radius={props.radius}
      variant="contained"
      weight={props.weight}
    >
      {props.text}
    </StyledButton>
  );
};
