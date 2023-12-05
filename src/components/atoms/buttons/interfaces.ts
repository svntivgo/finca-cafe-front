export interface ButtonProps {
  colors: string;
  font: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  radius?: string;
  text?: string;
  weight?: number;
  disabled?: boolean;
  type?: 'submit' | 'button' | 'reset' | undefined;
  onCLick?: () => void;
}
