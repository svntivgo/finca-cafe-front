import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';
import { FooterProps } from '..';

export const FooterContainerStyled = styled.div<FooterProps>`
  background-color: ${(props) =>
    props.location === '/' ? COLORS.CREAM : COLORS.WHITE};
`;

export const FooterHeadStyled = styled.div`
  display: flex;
  place-content: space-between;
`;

export const FooterBoxStyled = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${COLORS.WHITE};
`;

export const NavigationIconsContainerStyled = styled.div`
  display: flex;
  padding: 16px 0;
  place-content: space-evenly;
`;

export const PartnersIconsContainerStyled = styled.div`
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  place-content: space-between;
`;

export const NavigationIconsStyled = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const PartnersIconsStyled = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  padding: 16px 0;
`;
