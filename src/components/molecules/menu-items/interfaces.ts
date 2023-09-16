import { TextProps, IconProps } from '../../atoms';

export interface MenuItemProps extends IconProps, TextProps {
  path: string;
}
