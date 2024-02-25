import styled from '@emotion/styled';

interface WingCardProps {
  background: string;
  inverted?: boolean;
}

export const StyledWingCard = styled.div<WingCardProps>`
  margin-left: ${(props) => (props.inverted ? '16px' : 0)};
  overflow: hidden;
  padding-right: ${(props) => (props.inverted ? 0 : '16px')};
`;

export const StyledWingContainer = styled.div<WingCardProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.background};
  border-radius: ${(props) =>
    props.inverted ? '24px 0 24px 24px' : '0 24px 24px 24px'};
  padding: 16px 16px;
`;

export const StyledWinglet = styled.div<WingCardProps>`
  background-color: transparent;
  box-shadow: ${(props) =>
    props.inverted
      ? `40px 41px 0px 39px ${props.background}`
      : `-40px 41px 0px 39px ${props.background}`};
  border-radius: ${(props) => (props.inverted ? '0 0 24px 0' : '0 0 0 24px')};
  height: 24px;
  margin-left: ${(props) => (props.inverted ? 'auto' : 'unset')};
  margin-right: 0;
  width: 80px;
`;
