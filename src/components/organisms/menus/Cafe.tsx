import React from 'react';
import { MenusContainer, MenusSpan } from '..';
import ColombiaLogo from '../../../assets/colombia-logo.svg';
import LogoFincaCirculo from '../../../assets/logo-finca-circulo.svg';
import CAFE_PDF_ES from '../../../assets/menus/pdf/cafe-menu-mirador-del-cafe.pdf';
import { BLACK_BUTTON, Button, Icon } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Cafe: React.FC = () => {
  return (
    <MenusContainer>
      <Icon src={LogoFincaCirculo} width="160px" />
      <MenusSpan />
      <Button
        style={BLACK_BUTTON}
        text="Ver Carta"
        onClick={() => openNewTab(CAFE_PDF_ES)}
      />
      <MenusSpan />
      <Icon src={ColombiaLogo} width="80px" />
    </MenusContainer>
  );
};
