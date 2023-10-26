import React from 'react';
import { NotFoundContainer, NotFoundSpan } from '..';
import { Icon, Text } from '../../atoms';
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
      <Icon src={LogoFincaCirculo} width="160px" />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <Icon src={TazaCafe} width="140px" />
      <NotFoundSpan />
      <Text
        text="¡Uy! nos sorprendíste"
        align="center"
        color={COLORS.GREEN}
        size="16px"
      />
      <NotFoundSpan />
      <Text
        text="Estamos preparando una mejor experiencia en nuestra página web."
        align="center"
        color={COLORS.PEARL_BLACK}
        size="16px"
        weight="200"
      />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <Text
        text="Qué tal si nos visitas en Instagram"
        align="center"
        color={COLORS.PEARL_BLACK}
        size="16px"
        weight="200"
      />
      <NotFoundSpan />
      <Icon
        src={Instagram}
        width="80px"
        onClick={() => openNewTab(FINCA_CAFE_INFO.INSTAGRAM)}
      />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <NotFoundSpan />
      <Icon src={ColombiaLogo} width="80px" />
    </NotFoundContainer>
  );
};
