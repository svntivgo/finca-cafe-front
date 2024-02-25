import React from 'react';
import { useLocation } from 'react-router-dom';
import { WingCard } from '../../molecules';
import { COLORS } from '../../../constants/colors';
import { Icon, Text } from '../../atoms';
import {
  AgencyInfo,
  FooterBoxGroupStyled,
  FooterBoxStyled,
  FooterContainerStyled,
  FooterHeadStyled,
  FooterInfoStyled,
  FooterSpan,
  NavigationIconsContainerStyled,
  NavigationIconsStyled,
  PartnersIconsContainerStyled,
  PartnersIconsStyled,
} from '..';
import { FINCA_CAFE_INFO } from '../../../constants/finca-cafe-info';
import Logo from '../../../assets/logo-finca.svg';
import Malamente from '../../../assets/malamente.svg';
import WazeIcon from '../../../assets/waze.svg';
import GoogleMapsIcon from '../../../assets/google-maps.svg';
import ColombiaIcon from '../../../assets/colombia-logo.svg';
import PaisajeIcon from '../../../assets/paisaje-cultural-cafetero.svg';
import AsoturismoIcon from '../../../assets/asoturismo.svg';
import PereiraIcon from '../../../assets/pereira-bouru.svg';
import CertificadoIcon from '../../../assets/certificado-calidad-turistica.svg';
import { Link } from 'react-router-dom';
import { openNewTab } from '../../../shared/helper/open-new-tab';

export const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <FooterContainerStyled location={location.pathname}>
      <WingCard background={COLORS.GREEN}>
        <FooterHeadStyled>
          <Icon src={Logo} width="180px" />
          <Text
            text="Círculo de experiencias"
            color={COLORS.WHITE}
            weight="200"
          />
          <Text
            text="Garantizamos la mejor tarifa en tu reserva por nuestra página web"
            color={COLORS.GOLD}
            weight="200"
          />
        </FooterHeadStyled>
        <FooterInfoStyled>
          <FooterBoxGroupStyled>
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
              <Text
                text={`${FINCA_CAFE_INFO.MARKETING_MAIL}`}
                weight="200"
                color={COLORS.WHITE}
              />
            </FooterBoxStyled>
          </FooterBoxGroupStyled>
          <FooterBoxGroupStyled>
            <FooterBoxStyled>
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
                  <Link to={'https://maps.app.goo.gl/d365gPoYEe4npFfr7'}>
                    <Icon src={GoogleMapsIcon} width="50px" />
                    <Text
                      text="Llegar con Google Maps"
                      weight="200"
                      size="12px"
                      color={COLORS.WHITE}
                    />
                  </Link>
                </NavigationIconsStyled>
              </NavigationIconsContainerStyled>
              <Text
                text={`Dirección; ${FINCA_CAFE_INFO.ADDRESS}`}
                weight="200"
                color={COLORS.WHITE}
              />
            </FooterBoxStyled>
          </FooterBoxGroupStyled>
          <FooterBoxGroupStyled>
            <FooterBoxStyled>
              <PartnersIconsContainerStyled>
                <PartnersIconsStyled>
                  <Icon src={ColombiaIcon} width="60px" />
                </PartnersIconsStyled>
                <PartnersIconsStyled>
                  <Icon src={PereiraIcon} width="100px" />
                </PartnersIconsStyled>
                <PartnersIconsStyled>
                  <Icon src={PaisajeIcon} width="80px" />
                </PartnersIconsStyled>
                <PartnersIconsStyled>
                  <Icon src={AsoturismoIcon} width="100px" />
                </PartnersIconsStyled>
                <PartnersIconsStyled>
                  <Icon src={CertificadoIcon} width="80px" />
                </PartnersIconsStyled>
              </PartnersIconsContainerStyled>
            </FooterBoxStyled>
          </FooterBoxGroupStyled>
        </FooterInfoStyled>
        <FooterInfoStyled>
          <FooterBoxStyled>
            <Text
              text={`${FINCA_CAFE_INFO.LEGAL_INFO}`}
              size="12px"
              weight="200"
              color={COLORS.WHITE}
            />
          </FooterBoxStyled>
        </FooterInfoStyled>
        <AgencyInfo>
          <Text
            text="Desarrollador técnologico de este sitio web"
            weight="200"
          />
          <FooterSpan />
          <Icon
            src={Malamente}
            width={'50px'}
            onClick={() =>
              openNewTab('https://www.instagram.com/malamente_co/')
            }
          />
        </AgencyInfo>
      </WingCard>
    </FooterContainerStyled>
  );
};
