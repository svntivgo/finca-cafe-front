import styled from '@emotion/styled';

interface StyleTextProps {
  color?: string;
  size?: string;
  weight?: string;
}

export const StyledText = styled.p<StyleTextProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;
