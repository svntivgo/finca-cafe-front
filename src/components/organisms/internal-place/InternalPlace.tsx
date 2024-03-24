import React from 'react';
import { ContactForm } from '..';
import LogoMirador from '../../../assets/logo-mirador-cafe.svg';
import {
  BOLD_FONT_STYLE,
  Button,
  GOLD_BUTTON,
  Icon,
  LIGHT_FONT_STYLE,
  Paragraph,
} from '../../atoms';
import {
  StyledInternalBanner,
  StyledInternalButtonsContainer,
  StyledInternalContainer,
  StyledInternalSpan,
  StyledInternalTextContainer,
} from './styles';
import { InternalPlaceProps } from './interfaces';
import { COLORS } from '../../../constants/colors';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const InternalPlace: React.FC<InternalPlaceProps> = (props) => {
  return (
    <StyledInternalContainer>
      <StyledInternalBanner {...props} />
      <Icon src={LogoMirador} width="8rem" />
      <StyledInternalSpan />
      <StyledInternalTextContainer>
        <Paragraph
          style={{
            ...BOLD_FONT_STYLE,
            color: `${COLORS.GOLD}`,
            fontFamily: 'Royale',
            fontSize: '2.5rem',
            textAlign: 'center',
          }}
          text={props.title}
        />
        <StyledInternalSpan />
        <StyledInternalSpan />
        <Paragraph
          style={{
            ...LIGHT_FONT_STYLE,
            fontSize: '1.2rem',
            textAlign: 'justify',
          }}
          text={props.description}
        />
      </StyledInternalTextContainer>
      <StyledInternalButtonsContainer>
        {props.isBooking && (
          <Button
            style={GOLD_BUTTON}
            text="Reserva"
            onClick={() =>
              openNewTab('https://api.whatsapp.com/send?phone=573178000001')
            }
          />
        )}
        <Button
          style={GOLD_BUTTON}
          text="Carta"
          onClick={() => openNewTab(props.menu)}
        />
      </StyledInternalButtonsContainer>
      <ContactForm />
    </StyledInternalContainer>
  );
};
