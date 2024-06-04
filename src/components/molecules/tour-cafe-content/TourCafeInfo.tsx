import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TourCafeInfoBoxStyled,
  TourCafeInfoContainerStyled,
  TourCafeInfoWingStyled,
  TourCafeLogosStyled,
} from '.';
import { WingCard } from '..';
import {
  Button,
  CREAM_BUTTON,
  LIGHT_FONT_STYLE,
  Paragraph,
  Image,
} from '../../atoms';
import { COLORS } from '../../../constants/colors';

import PaisajeIcon from '../../../assets/paisaje-cultural-cafetero.svg';
import ColombiaIcon from '../../../assets/colombia-logo.svg';

export const TourCafeInfo: React.FC = () => {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate('/tour-cafe-reservation');
  };
  return (
    <TourCafeInfoContainerStyled>
      <TourCafeInfoWingStyled>
        <WingCard background={COLORS.PEARL_BLACK}>
          <TourCafeInfoBoxStyled>
            <Paragraph text="Duración" style={{ color: `${COLORS.CREAM}` }} />
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.CREAM}`,
              }}
              text="2 a 3 horas."
            />
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.CREAM}`,
                marginTop: '1rem',
              }}
              text="VALOR"
            />
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.CREAM}`,
              }}
              text="$90.000 COP o"
            />
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.CREAM}`,
              }}
              text="$130.000 COP"
            />
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.CREAM}`,
              }}
              text="*(Mínimo dos personas)."
            />
            <Button
              style={{
                ...CREAM_BUTTON,
                borderRadius: '4px',
                fontWeight: `${600}`,
                padding: '4px 12px',
                marginTop: '1rem',
              }}
              text="Reservar"
              onClick={() => changeRoute()}
            />
          </TourCafeInfoBoxStyled>
        </WingCard>
      </TourCafeInfoWingStyled>
      <TourCafeLogosStyled>
        <Image src={ColombiaIcon} style={{ width: '100px' }} />
        <Image src={PaisajeIcon} width="140px" style={{ marginTop: '1rem' }} />
      </TourCafeLogosStyled>
    </TourCafeInfoContainerStyled>
  );
};
