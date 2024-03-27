import React from 'react';
import { DATE_CARD_FONT_STYLE, Paragraph } from '../../../atoms';
import { COLORS } from '../../../../constants/colors';
import { ReservationDateCardProps } from './interfaces';
import { StyledAgeContainer } from '../..';

export const ReservationDateCard: React.FC<ReservationDateCardProps> = (
  props,
) => {
  return (
    <div onClick={() => props.onClick()}>
      <Paragraph style={DATE_CARD_FONT_STYLE} text={props.title} />
      <Paragraph
        style={{
          color: `${COLORS.WHITE}`,
          fontSize: '2.25rem',
          fontWeight: '200',
          textAlign: 'center',
        }}
        text={props.data}
      />
      {props.title !== 'Ocupación' ? (
        <Paragraph
          style={DATE_CARD_FONT_STYLE}
          text={props.description ?? ''}
        />
      ) : (
        <StyledAgeContainer>
          <Paragraph style={DATE_CARD_FONT_STYLE} text={props.adult ?? ''} />
          <Paragraph style={DATE_CARD_FONT_STYLE} text={props.minor ?? ''} />
        </StyledAgeContainer>
      )}
    </div>
  );
};
