//Libraries
import React, { useState } from 'react';

//Shared
import { COLORS } from '../../../constants/colors';
import LogoSVG from '../../../assets/logo-finca.svg';
import MenuSVG from '../../../assets/navmenu/menu-head-home.svg';
import CerrarSVG from '../../../assets/navmenu/icono-cerrar.svg';

//Interfaces & Styled Components
import {
  MenuProps,
  NavMenuInfo,
  NavMenuHeader,
  NavMenuContainer,
  NavMenuItemsContainer,
} from '..';
import { Icon } from '../../atoms';
import { MenuItem } from '../../molecules';
import { Button } from '../../atoms/buttons/Button';

export const NavMenu: React.FC<MenuProps> = (props) => {
  const [isMenuItems, setIsMenuItems] = useState(false);
  return (
    <NavMenuContainer isMenuItems={isMenuItems}>
      <NavMenuHeader isMenuItems={isMenuItems}>
        <Icon
          src={isMenuItems ? CerrarSVG : MenuSVG}
          width="1rem"
          onClick={() => setIsMenuItems(!isMenuItems)}
        />
        <NavMenuInfo>
          <Icon src={LogoSVG} width="100px" />
          <Button text="Reservar" colors={COLORS.GOLD} font={COLORS.WHITE} />
        </NavMenuInfo>
      </NavMenuHeader>
      {isMenuItems && (
        <NavMenuItemsContainer>
          {props.items.map((item, index) => (
            <MenuItem
              key={`menu-item-${index}`}
              path={item.path}
              src={item.src}
              width={item.width}
              text={item.text}
              weight="300"
            />
          ))}
        </NavMenuItemsContainer>
      )}
    </NavMenuContainer>
  );
};
