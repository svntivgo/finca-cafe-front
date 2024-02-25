//Libraries
import React from 'react';

//Interfaces & Styled Components
import { BannerProps, StyledBanner } from '..';
import { DEVICE_SCREEN } from '../../../shared/helper/screen';

export const Banner: React.FC<BannerProps> = (props) => {
  const { isDesktop } = DEVICE_SCREEN;
  const initHeight: string = isDesktop ? '43vw' : '120vw';
  return (
    <StyledBanner
      height={props.height ?? initHeight}
      image={props.image}
      width={props.width}
    />
  );
};
