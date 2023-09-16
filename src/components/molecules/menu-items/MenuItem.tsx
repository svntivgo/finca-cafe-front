//Libraries
import React from 'react';

//Shared
import { COLORS } from '../../../constants/colors';

//Interfaces & Styled Components
import { Text, Icon } from '../../atoms';
import { MenuItemProps, StyledLink, Separator } from '..';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <StyledLink to={props.path}>
      <Icon src={props.src} width={props.width} />
      <Separator />
      <Text text={props.text} color={COLORS.GOLD} weight={props.weight} />
    </StyledLink>
  );
};
