//Libraries
import React from 'react';

//Interfaces & Styled Components
import { BannerProps, StyledBanner } from '..';

export const Banner: React.FC<BannerProps> = (props) => {
  return (
    <StyledBanner
      height={props.height}
      image={props.image}
      width={props.width}
    />
  );
};
