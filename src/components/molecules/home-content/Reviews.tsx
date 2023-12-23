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
import { Icon, Text } from '../../atoms';
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
        <Text
          text="NUESTROS VIAJEROS DAN SU OPINIÓN"
          color={COLORS.GOLD}
          font="Royale"
          align="center"
          size="0.75rem"
        />
        <HomeSpanStyled />
        <HomeSpanStyled />
        <ReviewerInfoContainerStyled>
          <ReviewerFlagContainerStyled>
            <Icon src={review.flag} width="32px" />
          </ReviewerFlagContainerStyled>
          <ReviewerNameContainerStyled>
            <Text
              text={review.user}
              color={COLORS.WHITE}
              weight="200"
              size="0.75rem"
              lineHeight="0.75rem"
            />
          </ReviewerNameContainerStyled>
        </ReviewerInfoContainerStyled>
        <ReviewContainerStyled>
          <Icon src={rowLeft} width="12px" onClick={prevReview} />
          <ReviewTextContainerStyled>
            <Text
              text={review.review}
              color={COLORS.WHITE}
              weight="200"
              align="justify"
              size="0.75rem"
            />
          </ReviewTextContainerStyled>
          <Icon src={rowRight} width="12px" onClick={nextReview} />
        </ReviewContainerStyled>
      </WingCard>
    </ReviewBoxContainerStyled>
  );
};
