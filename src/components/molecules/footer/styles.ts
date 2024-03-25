import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';
import { FooterProps } from '.';

export const FooterContainerStyled = styled.div<FooterProps>`
  background-color: ${(props) =>
    props.location === '/reserva/selecciona'
      ? COLORS.WHITE
      : COLORS.PEARL_BLACK};

  @media (min-width: 1023px) {
    padding-left: 0;
    padding-right: 32px;
  }
`;

export const FooterHeadStyled = styled.div`
  display: flex;
  flex-direction: column;
  place-content: space-between;
  border-bottom: 1px solid ${COLORS.WHITE};
  padding: 16px 0;

  @media (min-width: 1023px) {
    flex-direction: column;
    place-items: center;
    padding: 32px 0;
    margin: 0 80px;
  }
`;

export const FooterBoxStyled = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid ${COLORS.WHITE};
  @media (min-width: 1023px) {
    padding: 32px 0;
  }
`;

export const FooterInfoStyled = styled.div`
  @media (min-width: 1023px) {
    display: flex;
    flex-wrap: nowrap;
    place-content: space-between;
    margin: 0 80px;
  }
`;

export const FooterBoxGroupStyled = styled.div`
  @media (min-width: 1023px) {
    width: 30%;
  }
`;

export const NavigationIconsContainerStyled = styled.div`
  display: flex;
  padding: 16px 0;
  place-content: space-evenly;
`;

export const PartnersIconsContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  place-content: initial;
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
  padding: 16px 4px;
`;

export const AgencyInfo = styled.div`
  display: flex;
  place-content: end;
  align-items: center;
  margin-top: 16px;
  @media (min-width: 1023px) {
    padding-right: 80px;
  }
`;

export const FooterSpan = styled.div`
  width: 16px;
  height: 16px;
`;
