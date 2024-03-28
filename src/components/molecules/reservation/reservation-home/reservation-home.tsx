import React, { useState } from 'react';
import {
  StyledBorder,
  StyledContainer,
  StyledInfoContainer,
  StyledTextHomeContainer,
} from './styles';
import { Button, GREEN_BUTTON, Paragraph } from '../../../atoms';
import { ReservationHomeCards } from '../..';
import { DateRange, Range } from 'react-date-range';
import { addDays, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Backdrop } from '@mui/material';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { ReservationOccupancyCard } from '../reservation-occupancy-card/reservation-occupancy-card';
import { useReservation } from '../../../../context';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../../constants/colors';
import { DEVICE_SCREEN } from '../../../../shared/helper/screen';

export const ReservationHome: React.FC = () => {
  const { setDates, setOccupancy, setRoom, reservation } = useReservation();
  const [state, setState] = useState<{
    backdropCalendar: boolean;
    backdropOccupancy: boolean;
    calendar: Range[];
    occupancy: { adults: number; minors: number };
  }>({
    backdropCalendar: false,
    backdropOccupancy: false,
    calendar: [
      {
        startDate: reservation.dates?.start,
        endDate: reservation.dates?.end,
        key: 'selection',
      },
    ],
    occupancy: {
      adults: reservation.occupancy?.adults ?? 1,
      minors: reservation.occupancy?.minors ?? 0,
    },
  });

  const setAdult = (adding: number) => {
    state.occupancy.adults + adding >= 1 &&
      setState((prevState) => ({
        ...prevState,
        occupancy: {
          ...state.occupancy,
          adults: state.occupancy.adults + adding,
        },
      }));
  };

  const setMinor = (adding: number) => {
    state.occupancy.minors + adding >= 0 &&
      setState((prevState) => ({
        ...prevState,
        occupancy: {
          ...state.occupancy,
          minors: state.occupancy.minors + adding,
        },
      }));
  };

  const setBackdropCalendar = () => {
    setState((prevState) => ({
      ...prevState,
      backdropCalendar: false,
    }));
  };

  return (
    <>
      <StyledTextHomeContainer>
        <Paragraph
          style={{
            fontSize: '0.8rem',
            textAlign: 'center',
          }}
          text="RESERVA TU MOMENTO DE PLACER LEJOS DEL RUIDO DE LA CIUDAD"
        />
      </StyledTextHomeContainer>
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
                adults: state.occupancy.adults,
                minors: state.occupancy.minors,
              }}
            />
            <Link to={'/reserva/selecciona'}>
              <Button
                style={{
                  ...GREEN_BUTTON,
                  fontSize: '0.8rem',
                  padding: `${
                    DEVICE_SCREEN.isDesktop ? '0.5rem 16px' : '0.5rem 1rem'
                  }`,
                }}
                text="Reservar"
              />
            </Link>
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
                  setDates({
                    start: item.selection.startDate!,
                    end: item.selection.endDate!,
                  });
                  setRoom({
                    ...reservation.room,
                    quantity: differenceInDays(
                      item.selection.endDate!,
                      item.selection.startDate!,
                    ),
                  });
                }}
                ranges={state.calendar}
                onRangeFocusChange={(values) =>
                  values[0] === 0 && values[1] === 0 && setBackdropCalendar()
                }
                locale={es}
                rangeColors={['#C0985A', '#C0985A', '#C0985A']}
              />
            </Backdrop>
            <Backdrop
              sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                width: '100vw',
                backgroundColor: `${COLORS.CREAM}`,
              }}
              open={state.backdropOccupancy}
            >
              <ReservationOccupancyCard
                adults={state.occupancy.adults.toString()}
                minors={state.occupancy.minors.toString()}
                setAdults={setAdult}
                setMinors={setMinor}
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
    </>
  );
};
