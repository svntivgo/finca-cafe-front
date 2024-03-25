import React from 'react';
import { useLocation } from 'react-router-dom';
import { WingCard } from '../../molecules';
import { COLORS } from '../../../constants/colors';
import { Image, LIGHT_FONT_STYLE, Paragraph } from '../../atoms';
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
          <Image src={Logo} width="180px" />
          <Paragraph
            style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
            text="Círculo de experiencias"
          />
          <Paragraph
            style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.GOLD}` }}
            text="Garantizamos la mejor tarifa en tu reserva por nuestra página web"
          />
        </FooterHeadStyled>
        <FooterInfoStyled>
          <FooterBoxGroupStyled>
            <FooterBoxStyled>
              <Paragraph
                style={{ color: `${COLORS.GOLD}` }}
                text="Reservas de alojamiento y tour del café"
              />
              <Paragraph
                style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
                text={`Comunícate al ${FINCA_CAFE_INFO.HOTEL_TEL}`}
              />
              <Paragraph
                style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
                text={`${FINCA_CAFE_INFO.HOTEL_MAIL}`}
              />
            </FooterBoxStyled>
            <FooterBoxStyled>
              <Paragraph
                style={{ color: `${COLORS.GOLD}` }}
                text="Contacto para reservas de Mirador del café"
              />
              <Paragraph
                style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
                text="Restaurante / Piqueteadero / Bodas / Eventos Corporativos"
              />
              <Paragraph
                style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
                text={`Comunícate al ${FINCA_CAFE_INFO.RESTAURANT_TEL}`}
              />
              <Paragraph
                style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
                text={`${FINCA_CAFE_INFO.MARKETING_MAIL}`}
              />
            </FooterBoxStyled>
          </FooterBoxGroupStyled>
          <FooterBoxGroupStyled>
            <FooterBoxStyled>
              <NavigationIconsContainerStyled>
                <NavigationIconsStyled>
                  <Image src={WazeIcon} width="80px" />
                  <Paragraph
                    style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
                    text="Llegar con Waze"
                  />
                </NavigationIconsStyled>
                <NavigationIconsStyled>
                  <Link to={'https://maps.app.goo.gl/d365gPoYEe4npFfr7'}>
                    <Image src={GoogleMapsIcon} width="50px" />
                    <Paragraph
                      style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
                      text="Llegar con Google Maps"
                    />
                  </Link>
                </NavigationIconsStyled>
              </NavigationIconsContainerStyled>
              <Paragraph
                style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
                text={`Dirección; ${FINCA_CAFE_INFO.ADDRESS}`}
              />
            </FooterBoxStyled>
          </FooterBoxGroupStyled>
          <FooterBoxGroupStyled>
            <FooterBoxStyled>
              <PartnersIconsContainerStyled>
                <PartnersIconsStyled>
                  <Image src={ColombiaIcon} width="60px" />
                </PartnersIconsStyled>
                <PartnersIconsStyled>
                  <Image src={PereiraIcon} width="100px" />
                </PartnersIconsStyled>
                <PartnersIconsStyled>
                  <Image src={PaisajeIcon} width="80px" />
                </PartnersIconsStyled>
                <PartnersIconsStyled>
                  <Image src={AsoturismoIcon} width="100px" />
                </PartnersIconsStyled>
                <PartnersIconsStyled>
                  <Image src={CertificadoIcon} width="80px" />
                </PartnersIconsStyled>
              </PartnersIconsContainerStyled>
            </FooterBoxStyled>
          </FooterBoxGroupStyled>
        </FooterInfoStyled>
        <FooterInfoStyled>
          <FooterBoxStyled>
            <Paragraph
              style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
              text={`${FINCA_CAFE_INFO.LEGAL_INFO}`}
            />
          </FooterBoxStyled>
        </FooterInfoStyled>
        <AgencyInfo>
          <Paragraph
            style={{ ...LIGHT_FONT_STYLE, color: `${COLORS.WHITE}` }}
            text="Desarrollador técnologico de este sitio web"
          />
          <FooterSpan />
          <Image
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
