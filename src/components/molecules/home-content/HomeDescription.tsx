import React from 'react';
import { LIGHT_FONT_STYLE, Paragraph } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import {
  ContainerHomeStyled,
  DescriptionContainerStyled,
  DescriptionPhotoContainerStyled,
  DescriptionTextContainerStyled,
  HomeSpanStyled,
} from '..';
import photo from '../../../assets/home/descripcion.jpg';

export const HomeDescription: React.FC = () => {
  return (
    <ContainerHomeStyled>
      <DescriptionContainerStyled>
        <DescriptionTextContainerStyled>
          <Paragraph
            style={{
              fontFamily: 'Royale',
              fontSize: '1.5rem',
            }}
            text="VIVE UNA EXPERIENCIA ÚNICA EN EL CORAZÓN DEL PAISAJE CULTURAL CAFETERO"
          />
          <HomeSpanStyled />
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              color: `${COLORS.GREEN}`,
              textAlign: 'justify',
            }}
            text="Desde hospedajes meticulosamente
        diseñados, amplios recorridos del proceso
        de cultivo y preparación del café en nuestra
        finca cafetera, experiencias gastronómicas
        y de entretenimiento, hasta escenarios
        equipados de forma extraordinaria para
        celebrar momentos especiales o eventos
        empresariales."
          />
          <HomeSpanStyled />
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              color: `${COLORS.GREEN}`,
              textAlign: 'justify',
            }}
            text="Dile hola al círculo de experiencias Hotel
        Finca del Café."
          />
        </DescriptionTextContainerStyled>
        <DescriptionPhotoContainerStyled>
          <img src={photo} width="100%" />
        </DescriptionPhotoContainerStyled>
      </DescriptionContainerStyled>
    </ContainerHomeStyled>
  );
};
