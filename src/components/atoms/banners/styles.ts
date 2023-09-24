import styled from '@emotion/styled';
interface StyledBannerProps {
  height: string;
  image: string;
  width?: string;
}

export const StyledBanner = styled.div<StyledBannerProps>`
  background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      transparent,
      transparent,
      rgba(0, 0, 0, 0.4)
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width ?? '100%'};
`;
