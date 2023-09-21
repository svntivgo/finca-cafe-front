import React from 'react';
import { Text } from '../../../atoms';
import { COLORS } from '../../../../constants/colors';
import { ReservationDateCardProps } from './interfaces';
import { StyledAgeContainer } from '../..';

export const ReservationDateCard: React.FC<ReservationDateCardProps> = (
  props,
) => {
  return (
    <div onClick={() => props.onClick()}>
      <Text
        align="center"
        color={COLORS.GOLD}
        size="0.75rem"
        text={props.title}
        weight="300"
      />
      <Text
        align="center"
        color={COLORS.GOLD}
        size="2.5rem"
        text={props.data}
        weight="300"
      />
      {props.title !== 'Ocupación' ? (
        <Text
          align="center"
          capitalize={true}
          color={COLORS.GOLD}
          size="0.75rem"
          text={props.description ?? ''}
          weight="300"
        />
      ) : (
        <StyledAgeContainer>
          <Text
            align="center"
            color={COLORS.GOLD}
            size="0.75rem"
            text={props.adult ?? ''}
            weight="300"
          />
          <Text
            align="center"
            color={COLORS.GOLD}
            size="0.75rem"
            text={props.minor ?? ''}
            weight="300"
          />
        </StyledAgeContainer>
      )}
    </div>
  );
};
