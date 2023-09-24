//Libraries
import React from 'react';

//Interfaces & Styled Components
import {
  WingCardProps,
  StyledWinglet,
  StyledWingCard,
  StyledWingContainer,
} from '..';

export const WingCard: React.FC<WingCardProps> = (props) => {
  return (
    <StyledWingCard background={props.background} inverted={props.inverted}>
      <StyledWinglet background={props.background} inverted={props.inverted} />
      <StyledWingContainer
        background={props.background}
        inverted={props.inverted}
      >
        {props.children}
      </StyledWingContainer>
    </StyledWingCard>
  );
};
