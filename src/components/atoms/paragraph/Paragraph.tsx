//Libraries
import React from 'react';

//Interfaces & Styled Components
import { ParagraphProps } from '..';
import { COLORS } from '../../../constants/colors';

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  return <p {...config(props)}>{props.text}</p>;
};

const config = (props: ParagraphProps) => {
  const { onClick } = props;
  const style = configStyles(props);

  return { onClick, style };
};

const configStyles = (props: ParagraphProps): React.CSSProperties => {
  return {
    color: COLORS.PEARL_BLACK,
    fontFamily: 'Poppins',
    fontSize: '0.7rem',
    margin: 'unset',
    textAlign: 'left',
    fontWeight: 400,
    ...props.style,
  };
};
