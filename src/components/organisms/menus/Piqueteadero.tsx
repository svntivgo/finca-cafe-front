import React from 'react';
import { MenusContainer, MenusSpan } from '..';
import ColombiaLogo from '../../../assets/colombia-logo.svg';
import LogoFincaCirculo from '../../../assets/logo-finca-circulo.svg';
import Piqueteadero_PDF_ES from '../../../assets/menus/pdf/piqueteadero-menu-mirador-del-cafe.pdf';
import { Button, Icon } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Piqueteadero: React.FC = () => {
  return (
    <MenusContainer>
      <Icon src={LogoFincaCirculo} width="160px" />
      <MenusSpan />
      <Button
        colors={COLORS.PEARL_BLACK}
        font="Poppins"
        text="Ver Carta"
        onCLick={() => openNewTab(Piqueteadero_PDF_ES)}
      />
      {/* <Button
        colors={COLORS.PEARL_BLACK}
        font="Poppins"
        text="See menu"
        onCLick={() => openNewTab(Piqueteadero_PDF_ES)}
      /> */}
      <MenusSpan />
      <Icon src={ColombiaLogo} width="80px" />
    </MenusContainer>
  );
};
