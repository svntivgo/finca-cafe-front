import React from 'react';
import { ContactForm } from '..';
import { StyledInternalButtonsContainer, StyledInternalContainer } from '.';
import {
  BLACK_GOLD_BUTTON,
  Banner,
  Button,
  GOLD_BUTTON,
  LIGHT_FONT_STYLE,
  Paragraph,
} from '../../atoms';
import { SectionLogoTitle } from '../../molecules';
import { InternalPlaceProps } from './interfaces';
import LogoMirador from '../../../assets/logo-mirador-cafe.svg';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const InternalPlace: React.FC<InternalPlaceProps> = (props) => {
  return (
    <StyledInternalContainer>
      <Banner desktopImage={props.photo} mobileImage={props.photo} />
      <SectionLogoTitle logo={LogoMirador} title={props.title} />
      <Paragraph
        style={{
          ...LIGHT_FONT_STYLE,
          fontSize: '1.2rem',
          textAlign: 'justify',
          width: '75%',
        }}
        text={props.description}
      />
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
          style={{...BLACK_GOLD_BUTTON, fontSize: '1.5rem'}}
          text="Carta"
          onClick={() => openNewTab(props.menu)}
        />
      </StyledInternalButtonsContainer>
      <ContactForm />
    </StyledInternalContainer>
  );
};
