import React from 'react';
import {
  BookingContainterStyled,
  BookingQualyContainerStyled,
  BookingReviewContainerStyled,
  BookingTitleContainerStyled,
  ContainerHomeStyled,
} from '..';
import { Icon, Text } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import Booking from '../../../assets/booking.svg';

export const BookingReview: React.FC = () => {
  return (
    <ContainerHomeStyled>
      <BookingContainterStyled>
        <BookingTitleContainerStyled>
          <Text
            text="Traveller review 2023"
            color={COLORS.PEARL_BLACK}
            size="0.75rem"
            weight="200"
          />
        </BookingTitleContainerStyled>
        <BookingReviewContainerStyled>
          <Icon src={Booking} width="100px" />
          <BookingQualyContainerStyled>
            <Text text="9,5" weight="800" />
          </BookingQualyContainerStyled>
          <Text text="Excepcional" weight="800" color="#283b7d" />
        </BookingReviewContainerStyled>
      </BookingContainterStyled>
    </ContainerHomeStyled>
  );
};
