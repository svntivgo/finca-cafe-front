//Libraries
import React from 'react';

//Interfaces & Styled Components
import { BannerProps, StyledBanner } from '..';
import { DEVICE_SCREEN } from '../../../shared/helper/screen';

export const Banner: React.FC<BannerProps> = (props) => {
  return <StyledBanner {...config(props)} />;
};

const config = (props: BannerProps) => {
  const { isDesktop } = DEVICE_SCREEN;
  const { desktopImage, mobileImage, height, width } = props;
  const initHeight = isDesktop ? '43vw' : '120vw';
  const image = isDesktop ? desktopImage : mobileImage;

  return { image, height: height ?? initHeight, width };
};
