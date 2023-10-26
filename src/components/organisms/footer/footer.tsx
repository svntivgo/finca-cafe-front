import React from 'react';
import { WingCard } from '../../molecules';
import { COLORS } from '../../../constants/colors';
import { Icon, Text } from '../../atoms';
import {
  FooterBoxStyled,
  FooterContainerStyled,
  FooterHeadStyled,
  NavigationIconsContainerStyled,
  NavigationIconsStyled,
  PartnersIconsContainerStyled,
  PartnersIconsStyled,
} from '..';
import { FINCA_CAFE_INFO } from '../../../constants/finca-cafe-info';
import Logo from '../../../assets/logo-finca.svg';
import WazeIcon from '../../../assets/waze.svg';
import GoogleMapsIcon from '../../../assets/google-maps.svg';
import ColombiaIcon from '../../../assets/colombia-logo.svg';
import PaisajeIcon from '../../../assets/paisaje-cultural-cafetero.svg';
import SantaRosaIcon from '../../../assets/santa-rosa.svg';
import AsoturismoIcon from '../../../assets/asoturismo.svg';
import PereiraIcon from '../../../assets/pereira-bouru.svg';
import CertificadoIcon from '../../../assets/certificado-calidad-turistica.svg';

export const Footer: React.FC = () => {
  return (
    <WingCard background={COLORS.GREEN}>
      <FooterHeadStyled>
        <Icon src={Logo} width="100px" />
        <Text text="Circulo de experiencias" color={COLORS.WHITE} />
      </FooterHeadStyled>
      <FooterContainerStyled>
        <FooterBoxStyled>
          <Text
            text="Garantizamos la mejor tarifa en tu reserva por nuestra página web"
            color={COLORS.GOLD}
            weight="200"
          />
        </FooterBoxStyled>
        <FooterBoxStyled>
          <Text
            text="Reservas de alojamiento y tour del café"
            color={COLORS.GOLD}
            weight="400"
          />
          <Text
            text={`Comunícate al ${FINCA_CAFE_INFO.HOTEL_TEL}`}
            weight="200"
            color={COLORS.WHITE}
          />
          <Text
            text={`${FINCA_CAFE_INFO.HOTEL_MAIL}`}
            weight="200"
            color={COLORS.WHITE}
          />
        </FooterBoxStyled>
        <FooterBoxStyled>
          <Text
            text="Contacto para reservas de Mirador del café"
            color={COLORS.GOLD}
            weight="400"
          />
          <Text
            text="Restaurante / Piqueteadero / Bodas / Eventos Corporativos"
            weight="200"
            color={COLORS.WHITE}
          />
          <Text
            text={`Comunícate al ${FINCA_CAFE_INFO.RESTAURANT_TEL}`}
            weight="200"
            color={COLORS.WHITE}
          />
        </FooterBoxStyled>
        <FooterBoxStyled>
          <Text
            text={`Dirección; ${FINCA_CAFE_INFO.ADDRESS}`}
            weight="200"
            color={COLORS.WHITE}
          />
          <NavigationIconsContainerStyled>
            <NavigationIconsStyled>
              <Icon src={WazeIcon} width="80px" />
              <Text
                text="Llegar con Waze"
                weight="200"
                size="12px"
                color={COLORS.WHITE}
              />
            </NavigationIconsStyled>
            <NavigationIconsStyled>
              <Icon src={GoogleMapsIcon} width="50px" />
              <Text
                text="Llegar con Google Maps"
                weight="200"
                size="12px"
                color={COLORS.WHITE}
              />
            </NavigationIconsStyled>
          </NavigationIconsContainerStyled>
        </FooterBoxStyled>
      </FooterContainerStyled>
      <FooterContainerStyled>
        <FooterBoxStyled>
          <Text text="Razón social" color={COLORS.GOLD} weight="400" />
          <Text
            text={`${FINCA_CAFE_INFO.BUSINESS_NAME}`}
            weight="200"
            color={COLORS.WHITE}
          />
          <Text text="NIT" color={COLORS.GOLD} weight="400" />
          <Text
            text={`${FINCA_CAFE_INFO.NIT}`}
            weight="200"
            color={COLORS.WHITE}
          />
        </FooterBoxStyled>
        <FooterBoxStyled>
          <PartnersIconsContainerStyled>
            <PartnersIconsStyled>
              <Icon src={ColombiaIcon} width="80px" />
            </PartnersIconsStyled>
            <PartnersIconsStyled>
              <Icon src={PaisajeIcon} width="80px" />
            </PartnersIconsStyled>
            <PartnersIconsStyled>
              <Icon src={SantaRosaIcon} width="80px" />
            </PartnersIconsStyled>
            <PartnersIconsStyled>
              <Icon src={AsoturismoIcon} width="80px" />
            </PartnersIconsStyled>
            <PartnersIconsStyled>
              <Icon src={PereiraIcon} width="80px" />
            </PartnersIconsStyled>
            <PartnersIconsStyled>
              <Icon src={CertificadoIcon} width="80px" />
            </PartnersIconsStyled>
          </PartnersIconsContainerStyled>
        </FooterBoxStyled>
        <FooterBoxStyled>
          <Text
            text={`${FINCA_CAFE_INFO.LEGAL_INFO}`}
            size="12px"
            weight="200"
            color={COLORS.WHITE}
          />
        </FooterBoxStyled>
      </FooterContainerStyled>
    </WingCard>
  );
};
