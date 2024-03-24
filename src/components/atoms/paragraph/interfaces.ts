import { HTMLAttributes } from 'react';

export interface ParagraphProps extends HTMLAttributes<unknown> {
  style?: React.CSSProperties;
  text: string;
}
