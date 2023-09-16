//Libraries
import React from 'react';

//Interfaces & Styled Components
import { StyledText, TextProps } from '..';

export const Text: React.FC<TextProps> = (props) => {
  return (
    <StyledText color={props.color} size={props.size} weight={props.weight}>
      {props.text}
    </StyledText>
  );
};
