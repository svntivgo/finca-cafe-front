import React, { useRef, useState } from 'react';
import {
  ReviewerInfoContainerStyled,
  ReviewContainerStyled,
  WingCard,
  ReviewTextContainerStyled,
  ReviewerNameContainerStyled,
  ReviewerFlagContainerStyled,
  ReviewBoxContainerStyled,
  HomeSpanStyled,
} from '..';
import { COLORS } from '../../../constants/colors';
import { Image, LIGHT_FONT_STYLE, Paragraph } from '../../atoms';
import { REVIEWS } from '../../../constants/reviews';
import rowLeft from '../../../assets/row-left.svg';
import rowRight from '../../../assets/row-right.svg';

export const Reviews: React.FC = () => {
  const position = useRef(1);
  const [review, setReview] = useState(REVIEWS[0]);

  const nextReview = () => {
    if (position.current >= REVIEWS.length) {
      setReview(REVIEWS[0]);
      position.current = 1;
      return;
    }

    setReview(REVIEWS[position.current]);
    position.current = position.current + 1;
  };

  const prevReview = () => {
    if (position.current <= 1) {
      position.current = REVIEWS.length;
      setReview(REVIEWS[REVIEWS.length - 1]);
      return;
    }

    position.current = position.current - 1;
    setReview(REVIEWS[position.current - 1]);
  };

  return (
    <ReviewBoxContainerStyled>
      <WingCard background={COLORS.PEARL_BLACK}>
        <HomeSpanStyled />
        <Paragraph
          style={{
            color: `${COLORS.GOLD}`,
            fontFamily: 'Royale',
            textAlign: 'center',
          }}
          text="NUESTROS VIAJEROS DAN SU OPINIÓN"
        />
        <HomeSpanStyled />
        <HomeSpanStyled />
        <ReviewerInfoContainerStyled>
          <ReviewerFlagContainerStyled>
            <Image src={review.flag} width="32px" />
          </ReviewerFlagContainerStyled>
          <ReviewerNameContainerStyled>
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.WHITE}`,
                lineHeight: '0.75rem',
              }}
              text={review.user}
            />
          </ReviewerNameContainerStyled>
        </ReviewerInfoContainerStyled>
        <ReviewContainerStyled>
          <Image src={rowLeft} width="12px" onClick={prevReview} />
          <ReviewTextContainerStyled>
            <Paragraph
              style={{
                ...LIGHT_FONT_STYLE,
                color: `${COLORS.WHITE}`,
                textAlign: 'justify',
              }}
              text={review.review}
            />
          </ReviewTextContainerStyled>
          <Image src={rowRight} width="12px" onClick={nextReview} />
        </ReviewContainerStyled>
      </WingCard>
    </ReviewBoxContainerStyled>
  );
};
