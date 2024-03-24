//Libraries
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Interfaces & Styled Components
import {
  MenuProps,
  NavMenuInfo,
  NavMenuHeader,
  NavMenuContainer,
  NavMenuItemsContainer,
} from '..';

//Shared & Components
import { Image, Button } from '../../atoms';
import { Disclaimer, MenuItem } from '../../molecules';
import { COLORS } from '../../../constants/colors';
import LogoSVG from '../../../assets/logo-finca.svg';
import MenuSVG from '../../../assets/navmenu/menu-head-home.svg';
import CerrarSVG from '../../../assets/navmenu/icono-cerrar.svg';

export const NavMenu: React.FC<MenuProps> = (props) => {
  const [isMenuItems, setIsMenuItems] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <NavMenuContainer isMenuItems={isMenuItems}>
      <Disclaimer></Disclaimer>
      <NavMenuHeader isMenuItems={isMenuItems} isScrolled={isScrolled}>
        <Image
          src={isMenuItems ? CerrarSVG : MenuSVG}
          style={{ width: '1.5rem' }}
          onClick={() => setIsMenuItems(!isMenuItems)}
        />
        <NavMenuInfo>
          <Link to={'/'}>
            <Image src={LogoSVG} width="140px" />
          </Link>
          <Link to={'/reserva/selecciona'}>
            <Button
              style={{
                backgroundColor: `${COLORS.GOLD}`,
                color: `${COLORS.WHITE}`,
                fontSize: '0.7rem',
                margin: '0 1rem 0 0',
                padding: '0.2rem 1.5rem',
              }}
              text="Reservar"
            />
          </Link>
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
              onClick={() => setIsMenuItems(!isMenuItems)}
            />
          ))}
        </NavMenuItemsContainer>
      )}
    </NavMenuContainer>
  );
};
