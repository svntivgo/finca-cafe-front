export interface CelebracionesCardProps {
  photo: string;
  width: string;
  title: string;
  text: string;
  extended?: boolean;
  button?: boolean;
  onClick?: () => void;
}
