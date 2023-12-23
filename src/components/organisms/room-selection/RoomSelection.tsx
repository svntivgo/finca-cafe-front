import React, { useEffect, useState } from 'react';
import { Banner, Button, Text } from '../../atoms';
import photo from '../../../assets/home/home-banner.jpg';
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
import { ROOMS_BOURBON, ROOMS_TIPICA, Room } from '../../../constants/rooms';
import { HotelFive, IHabitaciones } from '../../../services';
import { hotelFiveDate } from '../../../shared/helper/date-formatter';

export const RoomSelection: React.FC = () => {
  const steps = [
    'Seleccione una habitación',
    'Información del huésped',
    'Confirmación de reserva',
  ];
  const { setDates, setOccupancy, setRoom, setExtras, reservation } =
    useReservation();
  const [activeStep, setActiveState] = useState(0);
  const [rooms, setRooms] = useState<Room[]>([]);
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

  enum nombres {
    'SUITE' = 'SUITE Jacuzzi',
    'ESTANDAR TWIN' = 'SUITE ESTANDAR TWIN',
    'QUEEN ROOM' = 'PAREJA ESTANDAR',
    'CUADRUPLE' = 'CUADRUPLE ESTANDAR',
    'CONNECTING FAMILIAR' = 'FAMILIAR CONNECTING',
  }

  const availableRooms = async () => {
    const hotelApi = new HotelFive();
    const { data } = await hotelApi.rooms();
    const { habitaciones } = data;
    const occupancy = reservation.occupancy.adult + reservation.occupancy.minor;
    const availableRooms: IHabitaciones[] = [];
    const startDate = hotelFiveDate(reservation.dates.start);
    const endDate = hotelFiveDate(reservation.dates.end);
    console.log(startDate);
    habitaciones.reduce((acc: IHabitaciones[], habitacion: IHabitaciones) => {
      const found = habitacion.disponibilidad.some(
        (available, index, array) => {
          if (
            available.fechaInicio <= startDate &&
            available.fechaFin >= endDate
          ) {
            return true;
          }
          if (
            available.fechaInicio <= startDate &&
            available.fechaFin === null &&
            index === array.length - 1
          ) {
            return true;
          }
          return false;
        },
      );

      if (found && habitacion.capacidadMax >= occupancy) {
        availableRooms.push(habitacion);
      }
      return acc;
    }, []);
    return availableRooms;
  };

  const roomsReduced = (roomsHotelFive: IHabitaciones[]) => {
    const availableRooms: Room[] = [];
    roomsHotelFive.reduce((acc: IHabitaciones[], habitacion: IHabitaciones) => {
      const allRooms = [...ROOMS_BOURBON, ...ROOMS_TIPICA];
      const found = acc.some((item) => item.tipo === habitacion.tipo);
      if (!found) {
        acc.push(habitacion);
        const name =
          nombres[habitacion.tipo as keyof typeof nombres]?.toString() ?? '';
        const foundRoom = allRooms.find((room) => room.title === name ?? '');

        if (foundRoom) {
          foundRoom.id = habitacion.id;
          foundRoom.price = habitacion.precioMin;
          foundRoom.iva = habitacion.ivaPrecioMin;
          availableRooms.push(foundRoom);
        }
      }
      return acc;
    }, []);

    setRooms(availableRooms);
  };

  useEffect(() => {
    setActiveState(0);
    setRoom({ ...reservation.room, hotel: '', name: '', price: 0 });
    setExtras({
      ...reservation.extras,
      tourCafe: { ...reservation.extras.tourCafe, quantity: 0 },
    });
  }, []);

  useEffect(() => {
    void availableRooms().then((roomsHotelFive) =>
      roomsReduced(roomsHotelFive),
    );
  }, [reservation.dates, reservation.occupancy]);

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
        <RoomList rooms={rooms} reservationAction={setNextStep} />
      )}
      {activeStep === 1 && <ReservationForm />}
    </>
  );
};
