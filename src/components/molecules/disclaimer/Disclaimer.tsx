import React from 'react';
import { DisclaimerContainerStyled } from '..';
import { LIGHT_FONT_STYLE, Paragraph } from '../../atoms';
import { COLORS } from '../../../constants/colors';

export const Disclaimer: React.FC = () => {
  return (
    <DisclaimerContainerStyled>
      <Paragraph
        style={{
          ...LIGHT_FONT_STYLE,
          color: `${COLORS.WHITE}`,
          fontSize: '0.8rem',
          textAlign: 'center',
        }}
        text="Garantizamos la mejor tarifa en nuestra página web"
      />
    </DisclaimerContainerStyled>
  );
};
