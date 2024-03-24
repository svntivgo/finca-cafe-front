import React from 'react';
import {
  CelebrationsContainerStyled,
  CelebrationsTextContainerStyled,
  CelebrationsTextInfoStyled,
} from '..';
import { Icon, LIGHT_FONT_STYLE, Paragraph } from '../../atoms';

export const CelebracionesContact: React.FC = () => {
  return (
    <CelebrationsContainerStyled>
      <CelebrationsTextContainerStyled>
        <Paragraph text="Contáctanos:" />
        <CelebrationsTextInfoStyled>
          <Paragraph text="Ventas: " />
          <Paragraph text=" +57 317 8000001" style={LIGHT_FONT_STYLE} />
        </CelebrationsTextInfoStyled>
        <CelebrationsTextInfoStyled>
          <Paragraph text="Información eventos: " />
          <Paragraph
            text=" mercadeo@fincadelcafe.com"
            style={LIGHT_FONT_STYLE}
          />
        </CelebrationsTextInfoStyled>
        <CelebrationsTextInfoStyled>
          <Paragraph text="Información hospedaje: " />
          <Paragraph text=" info@fincadelcafe.com" style={LIGHT_FONT_STYLE} />
        </CelebrationsTextInfoStyled>
      </CelebrationsTextContainerStyled>
      <Icon src="" width="" />
    </CelebrationsContainerStyled>
  );
};