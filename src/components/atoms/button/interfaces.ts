import { DOMAttributes } from 'react';

export interface ButtonProps extends DOMAttributes<unknown> {
  style: React.CSSProperties;
  disabled?: boolean;
  text: string;
  type?: 'submit' | 'button' | 'reset';
}
