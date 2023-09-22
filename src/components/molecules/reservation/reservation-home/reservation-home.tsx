import React, { useState } from 'react';
import { StyledBorder, StyledContainer, StyledInfoContainer } from './styles';
import { Button } from '../../../atoms';
import { COLORS } from '../../../../constants/colors';
import { ReservationHomeCards } from '../..';
import { DateRange, Range } from 'react-date-range';
import { addDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Backdrop } from '@mui/material';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { ReservationOccupancyCard } from '../reservation-occupancy-card/reservation-occupancy-card';
import { useReservation } from '../../../../context';

export const ReservationHome: React.FC = () => {
  const { setDates, setOccupancy } = useReservation();
  const [state, setState] = useState<{
    backdropCalendar: boolean;
    backdropOccupancy: boolean;
    calendar: Range[];
    occupancy: { adult: number; minor: number };
  }>({
    backdropCalendar: false,
    backdropOccupancy: false,
    calendar: [
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 1),
        key: 'selection',
      },
    ],
    occupancy: {
      adult: 0,
      minor: 0,
    },
  });

  const setAdult = (adding: number) => {
    state.occupancy.adult + adding >= 0 &&
      setState((prevState) => ({
        ...prevState,
        occupancy: {
          ...state.occupancy,
          adult: state.occupancy.adult + adding,
        },
      }));
  };

  const setMinor = (adding: number) => {
    state.occupancy.minor + adding >= 0 &&
      setState((prevState) => ({
        ...prevState,
        occupancy: {
          ...state.occupancy,
          minor: state.occupancy.minor + adding,
        },
      }));
  };

  const setDate = () => {
    setState((prevState) => ({
      ...prevState,
      backdropCalendar: false,
    }));
    setDates({
      start: state.calendar[0].startDate ?? new Date(),
      end: state.calendar[0].endDate ?? new Date(),
    });
  };

  return (
    <StyledContainer>
      <StyledBorder>
        <StyledInfoContainer>
          <ReservationHomeCards
            onClickDate={() =>
              setState((prevState) => ({
                ...prevState,
                backdropCalendar: true,
              }))
            }
            onClickOccupancy={() =>
              setState((prevState) => ({
                ...prevState,
                backdropOccupancy: true,
              }))
            }
            reservationDates={{
              checkin: state.calendar[0].startDate,
              checkout: state.calendar[0].endDate,
            }}
            reservationOccupancy={{
              adult: state.occupancy.adult,
              minor: state.occupancy.minor,
            }}
          />
          <Button colors={COLORS.GREEN} text="Reservar" font={COLORS.GOLD} />

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={state.backdropCalendar}
          >
            <DateRange
              minDate={addDays(new Date(), 0)}
              onChange={(item) => {
                setState((prevState) => ({
                  ...prevState,
                  calendar: [item.selection],
                }));
              }}
              ranges={state.calendar}
              onRangeFocusChange={(values) =>
                values[0] === 0 && values[1] === 0 && setDate()
              }
              locale={es}
              rangeColors={['#C0985A', '#C0985A', '#C0985A']}
            />
          </Backdrop>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={state.backdropOccupancy}
          >
            <ReservationOccupancyCard
              adult={state.occupancy.adult.toString()}
              minor={state.occupancy.minor.toString()}
              setAdult={setAdult}
              setMinor={setMinor}
              close={() => {
                setState((prevState) => ({
                  ...prevState,
                  backdropOccupancy: false,
                }));
                setOccupancy(state.occupancy);
              }}
            />
          </Backdrop>
        </StyledInfoContainer>
      </StyledBorder>
    </StyledContainer>
  );
};
