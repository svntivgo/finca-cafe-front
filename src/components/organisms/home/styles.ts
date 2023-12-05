import styled from '@emotion/styled';
import photo from '../../../assets/home/home-banner.png';
import { COLORS } from '../../../constants/colors';

export const HomeContainerStyled = styled.div`
  background-color: ${COLORS.CREAM};
  padding-bottom: 8px;
`;

export const StyledBanner = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      transparent,
      transparent,
      rgba(0, 0, 0, 0.4)
    ),
    url(${photo});
  background-size: cover;
  background-position: center;
`;

export const HomeLogoMiradorContainer = styled.div`
  width: 100%;
  display: flex;
  place-content: center;
`;
