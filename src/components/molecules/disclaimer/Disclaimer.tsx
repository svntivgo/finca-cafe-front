import React from 'react';
import { DisclaimerContainerStyled } from '..';
import { LIGHT_FONT_STYLE, Paragraph } from '../../atoms';

export const Disclaimer: React.FC = () => {
  return (
    <DisclaimerContainerStyled>
      <Paragraph
        style={LIGHT_FONT_STYLE}
        text="Garantizamos la mejor tarifa en nuestra página web"
      />
    </DisclaimerContainerStyled>
  );
};
