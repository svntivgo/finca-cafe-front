import styled from '@emotion/styled';

interface StyleTextProps {
  align?: string;
  capitalize?: boolean;
  color?: string;
  font?: string;
  size?: string;
  weight?: string;
  lineHeight?: string;
}

export const StyledText = styled.p<StyleTextProps>`
  color: ${(props) => props.color};
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineHeight};
  margin: unset;
  text-align: ${(props) => props.align};
  text-transform: ${(props) => props.capitalize && 'capitalize'};
`;
