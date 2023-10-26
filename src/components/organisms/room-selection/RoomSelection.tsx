import React, { useEffect, useState } from 'react';
import { Banner, Button, Text } from '../../atoms';
import photo from '../../../assets/home/home-banner.png';
import {
  ReservationHomeCards,
  ReservationOccupancyCard,
  WingCard,
} from '../../molecules';
import { COLORS } from '../../../constants/colors';
import { useReservation } from '../../../context';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange, Range } from 'react-date-range';
import { addDays, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Backdrop } from '@mui/material';
import {
  Stepper,
  StyledInfoContainer,
  StyledReservationInfoContainer,
  RoomList,
  ReservationForm,
} from '..';
import { ROOMS_BOURBON, ROOMS_TIPICA } from '../../../constants/rooms';

export const RoomSelection: React.FC = () => {
  const steps = [
    'Seleccione una habitación',
    'Información del huésped',
    'Confirmación de reserva',
  ];
  const { setDates, setOccupancy, setRoom, setExtras, reservation } =
    useReservation();
  const [activeStep, setActiveState] = useState(0);
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

  const setNextStep = () => {
    setActiveState(activeStep + 1);
  };

  useEffect(() => {
    setActiveState(0);
    setRoom({ ...reservation.room, hotel: '', name: '', price: 0 });
    setExtras({
      ...reservation.extras,
      tourCafe: { ...reservation.extras.tourCafe, quantity: 0 },
    });
  }, []);

  return (
    <>
      <Banner image={photo} height="500px" />
      <StyledReservationInfoContainer>
        <WingCard background={COLORS.PEARL_BLACK}>
          <Text
            text={'Su estancia'}
            color={COLORS.GOLD}
            weight="200"
            size="1.5rem"
          />
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
            <Button
              colors={COLORS.GREEN}
              text={`$${
                reservation.room.price * reservation.room.quantity +
                reservation.extras.tourCafe.price *
                  reservation.extras.tourCafe.quantity
              } COP`}
              font={COLORS.GOLD}
            />
          </StyledInfoContainer>
          <Text
            text={steps[activeStep]}
            color={COLORS.GOLD}
            weight="200"
            size="1.5rem"
          />
          <Stepper steps={steps} activeStep={activeStep} />
        </WingCard>
        {activeStep === 0 && (
          <>
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
          </>
        )}
      </StyledReservationInfoContainer>
      {activeStep === 0 && (
        <RoomList
          rooms={[...ROOMS_BOURBON, ...ROOMS_TIPICA]}
          reservationAction={setNextStep}
        />
      )}
      {activeStep === 1 && <ReservationForm />}
    </>
  );
};
