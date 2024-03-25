//Libraries
import React from 'react';

//Shared
import { COLORS } from '../../../constants/colors';

//Interfaces & Styled Components
import { Paragraph, Image } from '..';
import { MenuItemProps, StyledLink, Separator } from '.';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <StyledLink to={props.path} onClick={props.onClick}>
      <Separator />
      <Image src={props.src} style={{ width: `${props.width}` }} />
      <Separator />
      <Separator />
      <Paragraph
        style={{
          color: `${COLORS.WHITE}`,
          fontSize: '1.5rem',
          fontWeight: '200',
        }}
        text={props.text}
      />
    </StyledLink>
  );
};
