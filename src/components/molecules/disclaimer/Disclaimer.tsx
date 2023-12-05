import React from 'react';
import { DisclaimerContainerStyled } from '..';
import { Text } from '../../atoms';

export const Disclaimer: React.FC = () => {
  return (
    <DisclaimerContainerStyled>
      <Text
        text="Garantizamos la mejor tarifa en nuestra página web"
        align="center"
        size="0.75rem"
        weight="200"
      />
    </DisclaimerContainerStyled>
  );
};
