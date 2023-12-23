import React from 'react';
import { ContactForm } from '..';
import LogoMirador from '../../../assets/logo-mirador-cafe.svg';
import { Button, Icon, Text } from '../../atoms';
import {
  StyledInternalBanner,
  StyledInternalButtonsContainer,
  StyledInternalContainer,
  StyledInternalSpan,
  StyledInternalTextContainer,
} from './styles';
import { InternalPlaceProps } from './interfaces';
import { COLORS } from '../../../constants/colors';
import { Link } from 'react-router-dom';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const InternalPlace: React.FC<InternalPlaceProps> = (props) => {
  return (
    <StyledInternalContainer>
      <StyledInternalBanner {...props} />
      <Icon src={LogoMirador} width="8rem" />
      <StyledInternalSpan />
      <StyledInternalTextContainer>
        <Text
          text={props.title}
          align="center"
          font="Royale"
          color={COLORS.GOLD}
          size="2.5rem"
          weight="800"
        />
        <StyledInternalSpan />
        <StyledInternalSpan />
        <Text
          text={props.description}
          size="1.2rem"
          weight="300"
          align="justify"
          color={COLORS.PEARL_BLACK}
        />
      </StyledInternalTextContainer>
      <StyledInternalButtonsContainer>
        <Link to={props.contact}>
          <Button
            colors={COLORS.GOLD}
            font={COLORS.PEARL_BLACK}
            margin="0 16px"
            padding="8px 24px"
            radius="50px"
            text="Reserva"
            weight={600}
          />
        </Link>
        <Button
          colors={COLORS.PEARL_BLACK}
          font={COLORS.GOLD}
          margin="0 16px"
          padding="8px 24px"
          radius="50px"
          text="Carta"
          weight={600}
          onCLick={() => openNewTab(props.menu)}
        />
      </StyledInternalButtonsContainer>
      <ContactForm />
    </StyledInternalContainer>
  );
};
