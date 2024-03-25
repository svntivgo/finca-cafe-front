import React from 'react';
import { MenusContainer, MenusSpan } from '..';
import ColombiaLogo from '../../../assets/colombia-logo.svg';
import LogoFincaCirculo from '../../../assets/logo-finca-circulo.svg';
import Piqueteadero_PDF_ES from '../../../assets/menus/pdf/piqueteadero-menu-mirador-del-cafe.pdf';
import { BLACK_BUTTON, Button, Image } from '../../atoms';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Piqueteadero: React.FC = () => {
  return (
    <MenusContainer>
      <Image src={LogoFincaCirculo} width="160px" />
      <MenusSpan />
      <Button
        style={BLACK_BUTTON}
        text="Ver Carta"
        onClick={() => openNewTab(Piqueteadero_PDF_ES)}
      />
      <MenusSpan />
      <Image src={ColombiaLogo} width="80px" />
    </MenusContainer>
  );
};
