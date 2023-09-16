//Libraries
import React from 'react';
import { Button } from '@mui/material';

//Interfaces & Styled Components
import { IconProps, StyledImg } from '..';

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <Button
      type="button"
      variant="text"
      onClick={() => props.onClick && props.onClick()}
      style={{ display: 'contents' }}
    >
      <StyledImg src={props.src} width={props.width} />
    </Button>
  );
};
