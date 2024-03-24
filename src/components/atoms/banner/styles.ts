import styled from '@emotion/styled';
interface StyledBannerProps {
  height: string;
  image: string;
  width?: string;
}

const linearGradient = `rgba(0, 0, 0, 0.4), transparent, transparent, rgba(0, 0, 0, 0.4)`;

export const StyledBanner = styled.div<StyledBannerProps>`
  background: linear-gradient(${linearGradient}), url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width ?? '100%'};
`;
