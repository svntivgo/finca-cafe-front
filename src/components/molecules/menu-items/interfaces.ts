import { ParagraphProps, IconProps } from '../../atoms';

export interface MenuItemProps extends IconProps, ParagraphProps {
  path: string;
}
