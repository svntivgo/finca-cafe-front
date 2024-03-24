import React from 'react';
import {
  BookingContainterStyled,
  BookingQualyContainerStyled,
  BookingReviewBoxContainerStyled,
  BookingReviewContainerStyled,
  BookingTitleContainerStyled,
  ContainerHomeStyled,
} from '..';
import {
  BOLD_FONT_STYLE,
  Image,
  LIGHT_FONT_STYLE,
  Paragraph,
} from '../../atoms';
import Booking from '../../../assets/booking.svg';

export const BookingReview: React.FC = () => {
  return (
    <ContainerHomeStyled>
      <BookingReviewBoxContainerStyled>
        <BookingContainterStyled>
          <BookingTitleContainerStyled>
            <Paragraph text="Traveller review 2023" style={LIGHT_FONT_STYLE} />
          </BookingTitleContainerStyled>
          <BookingReviewContainerStyled>
            <Image src={Booking} width="100px" />
            <BookingQualyContainerStyled>
              <Paragraph text="9,5" style={BOLD_FONT_STYLE} />
            </BookingQualyContainerStyled>
            <Paragraph
              text="Excepcional"
              style={{ ...BOLD_FONT_STYLE, color: '#283b7d' }}
            />
          </BookingReviewContainerStyled>
        </BookingContainterStyled>
      </BookingReviewBoxContainerStyled>
    </ContainerHomeStyled>
  );
};
