import React from 'react';
import { Text } from '../../atoms';
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
          <Text
            text="VIVE UNA EXPERIENCIA ÚNICA EN EL CORAZÓN DEL PAISAJE CULTURAL CAFETERO"
            font="Royale"
            color={COLORS.PEARL_BLACK}
            size="1.5rem"
          />
          <HomeSpanStyled />
          <Text
            text="Desde hospedajes meticulosamente
        diseñados, amplios recorridos del proceso
        de cultivo y preparacíon del café en nuestra
        finca cafetera, experiencias gastronómicas
        y de entretenimiento, hasta escenarios
        equipados de forma extraordinaría para
        celebrar momentos especiales o eventos
        empresariales."
            color={COLORS.GREEN}
            weight="200"
            align="justify"
          />
          <HomeSpanStyled />
          <Text
            text="Dile hola al circulo de experiencias Hotel
        finca del café."
            color={COLORS.GREEN}
            weight="200"
            align="justify"
          />
        </DescriptionTextContainerStyled>
        <DescriptionPhotoContainerStyled>
          <img src={photo} width="100%" />
        </DescriptionPhotoContainerStyled>
      </DescriptionContainerStyled>
    </ContainerHomeStyled>
  );
};
