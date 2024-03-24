import React from 'react';
import {
  CelebracionesCardProps,
  CelebrationsCardsPhotoStyled,
  StyledCelebrationsCardContainer,
  StyledTextCelebrationsCard,
} from '..';
import { BLACK_BUTTON, Button, Paragraph } from '../../atoms';

export const CelebracionesCard: React.FC<CelebracionesCardProps> = (props) => {
  return (
    <StyledCelebrationsCardContainer
      photo={props.photo}
      text={props.text}
      title={props.title}
      width={props.width}
      extended={props.extended}
    >
      <CelebrationsCardsPhotoStyled
        src={props.photo}
        photo={props.photo}
        text={props.text}
        title={props.title}
        width={props.width}
        extended={props.extended}
      />
      <StyledTextCelebrationsCard
        photo={props.photo}
        text={props.text}
        title={props.title}
        width={props.width}
        extended={props.extended}
      >
        <Paragraph
          style={{
            fontSize: `${props.extended ? '2rem' : '1.5rem'}`,
          }}
          text={props.title}
        />
        <Paragraph
          style={{
            fontWeight: 200,
          }}
          text={props.text}
        />
        {props.button && (
          <Button
            onClick={props.onClick ? props.onClick : () => ({})}
            style={BLACK_BUTTON}
            text="Reservar"
          />
        )}
      </StyledTextCelebrationsCard>
    </StyledCelebrationsCardContainer>
  );
};
