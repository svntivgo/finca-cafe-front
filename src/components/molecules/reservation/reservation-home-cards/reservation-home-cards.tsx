import React from 'react';
import { StyledInfoCard } from '../..';
import { ReservationHomeCardsProps } from './interfaces';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ReservationDateCard } from '../reservation-date-card/reservation-date-card';

export const ReservationHomeCards: React.FC<ReservationHomeCardsProps> = (
  props,
) => {
  const checkInDay = format(props.reservationDates.checkin ?? 0, 'dd', {
    locale: es,
  });
  const checkInDate = format(props.reservationDates.checkin ?? 0, 'MMM yyyy', {
    locale: es,
  });
  const checkOutDay = format(props.reservationDates.checkout ?? 0, 'dd', {
    locale: es,
  });
  const checkOutDate = format(
    props.reservationDates.checkout ?? 0,
    'MMM yyyy',
    {
      locale: es,
    },
  );
  const reservationInfo = [
    {
      title: 'Check in',
      data: checkInDay,
      description: checkInDate,
    },
    {
      title: 'Check out',
      data: checkOutDay,
      description: checkOutDate,
    },
    {
      title: 'Ocupación',
      data: `${props.reservationOccupancy.adults} | ${props.reservationOccupancy.minors}`,
      adult: '+18',
      minor: '-18',
    },
  ];
  return (
    <>
      {reservationInfo.map((item, index) => (
        <StyledInfoCard key={`info-card-${index}`}>
          <ReservationDateCard
            title={item.title}
            data={item.data}
            description={item.description}
            adult={item.adult}
            minor={item.minor}
            onClick={() => {
              item.title !== 'Ocupación'
                ? props.onClickDate()
                : props.onClickOccupancy();
            }}
          />
        </StyledInfoCard>
      ))}
    </>
  );
};
