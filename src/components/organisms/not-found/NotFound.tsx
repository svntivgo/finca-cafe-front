import React from 'react';
import { NotFoundContainer, NotFoundSpan } from '..';
import { Image, LIGHT_FONT_STYLE, Paragraph } from '../../atoms';
import ColombiaLogo from '../../../assets/colombia-logo.svg';
import LogoFincaCirculo from '../../../assets/logo-finca-circulo.svg';
import Instagram from '../../../assets/instagram.svg';
import TazaCafe from '../../../assets/Recurso 3.svg';
import { COLORS } from '../../../constants/colors';
import { FINCA_CAFE_INFO } from '../../../constants/finca-cafe-info';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <Image src={LogoFincaCirculo} width="160px" />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <Image src={TazaCafe} width="140px" />
      <NotFoundSpan />
      <Paragraph
        style={{
          color: `${COLORS.GREEN}`,
          fontSize: '1rem',
          textAlign: 'center',
        }}
        text="¡Uy! nos sorprendíste"
      />
      <NotFoundSpan />
      <Paragraph
        style={{
          ...LIGHT_FONT_STYLE,
          fontSize: '1rem',
          textAlign: 'center',
        }}
        text="Estamos preparando una mejor experiencia en nuestra página web."
      />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <Paragraph
        style={{
          ...LIGHT_FONT_STYLE,
          fontSize: '1rem',
          textAlign: 'center',
        }}
        text="Qué tal si nos visitas en Instagram"
      />
      <NotFoundSpan />
      <Image
        src={Instagram}
        width="80px"
        onClick={() => openNewTab(FINCA_CAFE_INFO.INSTAGRAM)}
      />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <Image src={ColombiaLogo} width="80px" />
    </NotFoundContainer>
  );
};
