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
        weight="200"
      />
      <Text
        align="center"
        color={COLORS.WHITE}
        size="2.5rem"
        text={props.data}
        weight="200"
      />
      {props.title !== 'Ocupación' ? (
        <Text
          align="center"
          capitalize={true}
          color={COLORS.GOLD}
          size="0.75rem"
          text={props.description ?? ''}
          weight="200"
        />
      ) : (
        <StyledAgeContainer>
          <Text
            align="center"
            color={COLORS.GOLD}
            size="0.75rem"
            text={props.adult ?? ''}
            weight="200"
          />
          <Text
            align="center"
            color={COLORS.GOLD}
            size="0.75rem"
            text={props.minor ?? ''}
            weight="200"
          />
        </StyledAgeContainer>
      )}
    </div>
  );
};
