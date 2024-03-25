import { ParagraphProps, IconProps } from '..';

export interface MenuItemProps extends IconProps, ParagraphProps {
  path: string;
}
