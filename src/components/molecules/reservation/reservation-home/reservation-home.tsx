import React, { useState } from 'react';
import {
  StyledBorder,
  StyledContainer,
  StyledInfoContainer,
  StyledTextHomeContainer,
} from './styles';
import { Button, Text } from '../../../atoms';
import { COLORS } from '../../../../constants/colors';
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

export const ReservationHome: React.FC = () => {
  const { setDates, setOccupancy, setRoom, reservation } = useReservation();
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
        startDate: reservation.dates?.start,
        endDate: reservation.dates?.end,
        key: 'selection',
      },
    ],
    occupancy: {
      adult: reservation.occupancy?.adult ?? 0,
      minor: reservation.occupancy?.minor ?? 0,
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

  const setBackdropCalendar = () => {
    setState((prevState) => ({
      ...prevState,
      backdropCalendar: false,
    }));
  };

  return (
    <>
      <StyledTextHomeContainer>
        <Text
          text="RESERVA TU MOMENTO DE PLACER LEJOS DEL RUIDO DE LA CIUDAD"
          align="center"
          color={COLORS.PEARL_BLACK}
          size="0.7rem"
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
                adult: state.occupancy.adult,
                minor: state.occupancy.minor,
              }}
            />
            <Link to={'/reserva/selecciona'}>
              <Button
                colors={COLORS.GREEN}
                text="Reservar"
                font={COLORS.WHITE}
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
    </>
  );
};
