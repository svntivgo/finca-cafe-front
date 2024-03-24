//Libraries
import React from 'react';

//Shared
import { COLORS } from '../../../constants/colors';

//Interfaces & Styled Components
import { Paragraph, Icon } from '../../atoms';
import { MenuItemProps, StyledLink, Separator } from '..';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <StyledLink to={props.path} onClick={props.onClick}>
      <Separator />
      <Icon src={props.src} width={props.width} />
      <Separator />
      <Separator />
      <Paragraph
        style={{
          color: `${COLORS.WHITE}`,
          fontSize: '1.5rem',
        }}
        text={props.text}
      />
    </StyledLink>
  );
};
