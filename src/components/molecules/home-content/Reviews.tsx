import React, { useRef, useState } from 'react';
import {
  ReviewerNameContainerStyled,
  ReviewContainerStyled,
  WingCard,
  ReviewTextContainerStyled,
  ArrowStyled,
  ArrowInvertedStyled,
} from '..';
import { COLORS } from '../../../constants/colors';
import { Text } from '../../atoms';
import { REVIEWS } from '../../../constants/reviews';

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
    <WingCard background={COLORS.PEARL_BLACK} inverted>
      <Text
        text="NUESTROS VIAJEROS DAN SU OPINIÓN"
        color={COLORS.GOLD}
        font="Royale"
        align="center"
        size="0.75rem"
      />
      <ReviewerNameContainerStyled>
        <Text
          text={review.user}
          color={COLORS.WHITE}
          weight="200"
          size="0.75rem"
        />
      </ReviewerNameContainerStyled>
      <ReviewContainerStyled>
        <ArrowStyled onClick={prevReview} />
        <ReviewTextContainerStyled>
          <Text
            text={review.review}
            color={COLORS.WHITE}
            weight="200"
            align="justify"
            size="0.75rem"
          />
        </ReviewTextContainerStyled>
        <ArrowInvertedStyled onClick={nextReview} />
      </ReviewContainerStyled>
    </WingCard>
  );
};
