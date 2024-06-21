import React from 'react';
import { Link } from 'react-router-dom';
import {
  HotelsDescriptionContainerStyled,
  HotelsPhotoDescriptionContainerStyled,
  HotelsPhotoDescriptionTextContainerStyled,
} from '.';
import {
  BLACK_BUTTON,
  Button,
  Image,
  LIGHT_FONT_STYLE,
  Paragraph,
} from '../../atoms';
import { HOTELS } from '../../../constants/hotels';
import BourbonPhoto from '../../../assets/hoteles/bourbon.jpg';
import TypicaPhoto from '../../../assets/hoteles/typica.jpg';
import { COLORS } from '../../../constants/colors';

export const HotelsDescription: React.FC = () => {
  const hotels = [
    {
      photo: BourbonPhoto,
      hotelName: HOTELS.BOURBON.NAME.toLocaleUpperCase(),
      title: 'UN DISEÑO VIBRANTE EN EL CORAZÓN DE LAS MONTAÑAS CAFETERAS',
      description:
        'La mezcla del lujo contemporáneo con la inspiración del encanto característico de las haciendas cafeteras. Las habitaciones y espacios del hotel Bourbon están especialmente diseñados y equipados para estadías de placer, negocios y bodas. Disfruta de nuestros jacuzzi y el aire puro de nuestras montañas.',
      goTo: '/habitaciones#bourbon-description',
    },
    {
      photo: TypicaPhoto,
      hotelName: HOTELS.TYPICA.NAME.toLocaleUpperCase(),
      title:
        'UN HOSPEDAJE QUE TE CONECTA CON LA MAGÍA DEL CAFÉ PAISAJE CULTURAL CAFETERO',
      description:
        'Ubicado junto a una finca cafetera tradicional con acceso a los cultivos donde nace nuestro café, nuestro alojamiento tradicional es perfecto para extranjeros y nacionales que desean conocer la cultura cafetera y una estadía tradicional con todo el confort de sus habitaciones y espacios.',
      goTo: '/habitaciones#typica-description',
    },
  ];
  return (
    <HotelsDescriptionContainerStyled style={{ marginTop: '32px' }}>
      {hotels.map((hotel, i) => (
        <HotelsPhotoDescriptionContainerStyled key={`hotels-description-${i}`}>
          <Image src={hotel.photo} width={'100%'} />
          <HotelsPhotoDescriptionTextContainerStyled>
            <Paragraph
              style={{
                color: `${COLORS.CREAM}`,
                fontFamily: 'Royale',
                fontSize: '1.5rem',
                textAlign: 'center',
              }}
              text={`HOTEL ${hotel.hotelName}`}
            />
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.CREAM}`,
                fontSize: '0.8rem',
                textAlign: 'center',
              }}
              text={hotel.title}
            />
          </HotelsPhotoDescriptionTextContainerStyled>
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              textAlign: 'justify',
            }}
            text={hotel.description}
          />
          <Link
            to={hotel.goTo}
            style={{ width: 'max-content', margin: '32px auto 0 auto' }}
          >
            <Button
              style={{
                ...BLACK_BUTTON,
                margin: '-8px auto 0 auto',
              }}
              text="Ver habitaciones"
            />
          </Link>
        </HotelsPhotoDescriptionContainerStyled>
      ))}
    </HotelsDescriptionContainerStyled>
  );
};
