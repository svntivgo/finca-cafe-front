import React from 'react';
import { StyledBanner } from './styles';
import { ReservationHome } from '../../molecules';

export const Home: React.FC = () => {
  return (
    <div>
      <StyledBanner />
      <ReservationHome />
    </div>
  );
};
