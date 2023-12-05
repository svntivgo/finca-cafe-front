import React from 'react';
import { Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { ContainerHomeStyled, HomeSpanStyled } from '..';

export const HomeDescription: React.FC = () => {
  return (
    <ContainerHomeStyled>
      <Text
        text="VIVE UNA EXPERIENCIA ÚNICA EN EL CORAZÓN DEL PAISAJE CULTURAL CAFETERO"
        font="Royale"
        color={COLORS.PEARL_BLACK}
        size="0.8rem"
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
    </ContainerHomeStyled>
  );
};
