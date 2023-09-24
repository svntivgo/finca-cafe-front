//Libraries
import React from 'react';

//Interfaces & Styled Components
import { StyledText, TextProps } from '..';

export const Text: React.FC<TextProps> = (props) => {
  return (
    <StyledText
      align={props.align}
      capitalize={props.capitalize}
      color={props.color}
      font={props.font}
      size={props.size}
      weight={props.weight}
    >
      {props.text}
    </StyledText>
  );
};
