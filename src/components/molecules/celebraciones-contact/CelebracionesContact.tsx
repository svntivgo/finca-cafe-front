import React from 'react';
import {
  CelebrationsContainerStyled,
  CelebrationsTextContainerStyled,
  CelebrationsTextInfoStyled,
} from '..';
import { Icon, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';

export const CelebracionesContact: React.FC = () => {
  return (
    <CelebrationsContainerStyled>
      <CelebrationsTextContainerStyled>
        <Text text="Contáctanos:" color={COLORS.PEARL_BLACK} weight="400" />
        <CelebrationsTextInfoStyled>
          <Text
            align="left"
            text="Ventas: "
            color={COLORS.PEARL_BLACK}
            weight="400"
            size="0.7rem"
          />
          <Text
            align="left"
            text=" +57 317 8000001"
            color={COLORS.PEARL_BLACK}
            weight="200"
            size="0.7rem"
          />
        </CelebrationsTextInfoStyled>
        <CelebrationsTextInfoStyled>
          <Text
            align="left"
            text="Información eventos: "
            color={COLORS.PEARL_BLACK}
            weight="400"
            size="0.7rem"
          />
          <Text
            align="left"
            text=" mercadeo@fincadelcafe.com"
            color={COLORS.PEARL_BLACK}
            weight="200"
            size="0.7rem"
          />
        </CelebrationsTextInfoStyled>
        <CelebrationsTextInfoStyled>
          <Text
            align="left"
            text="Información hospedaje: "
            color={COLORS.PEARL_BLACK}
            weight="400"
            size="0.7rem"
          />
          <Text
            align="left"
            text=" info@fincadelcafe.com"
            color={COLORS.PEARL_BLACK}
            weight="200"
            size="0.7rem"
          />
        </CelebrationsTextInfoStyled>
      </CelebrationsTextContainerStyled>
      <Icon src="" width="" />
    </CelebrationsContainerStyled>
  );
};
