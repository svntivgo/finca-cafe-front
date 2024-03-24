import React from 'react';
import { MenusContainer, MenusSpan } from '..';
import ColombiaLogo from '../../../assets/colombia-logo.svg';
import LogoFincaCirculo from '../../../assets/logo-finca-circulo.svg';
import Restaurante_PDF_ES from '../../../assets/menus/pdf/restaurante-menu-mirador-del-cafe.pdf';
import Restaurante_PDF_EN from '../../../assets/menus/pdf/restaurant-menu-mirador-del-cafe.pdf';
import { BLACK_BUTTON, Button, Image } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Restaurante: React.FC = () => {
  return (
    <MenusContainer>
      <Image src={LogoFincaCirculo} width="160px" />
      <MenusSpan />
      <Button
        style={BLACK_BUTTON}
        text="Ver Carta"
        onClick={() => openNewTab(Restaurante_PDF_ES)}
      />
      <MenusSpan />

      <Button
        style={BLACK_BUTTON}
        text="See menu"
        onClick={() => openNewTab(Restaurante_PDF_EN)}
      />
      <MenusSpan />
      <Image src={ColombiaLogo} width="80px" />
    </MenusContainer>
  );
};
