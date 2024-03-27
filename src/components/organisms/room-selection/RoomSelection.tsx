import React, { useEffect, useState } from 'react';
import {
  Banner,
  Button,
  GREEN_BUTTON_ALT,
  LIGHT_FONT_STYLE,
  Paragraph,
} from '../../atoms';
import photo from '../../../assets/hoteles/banner.jpg';
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
import { formatHotelFiveQuery } from '../../../shared/helper/date-formatter';
import LoadingScreen from '../../atoms/loading-screen/LoadingScreen';
import { DEVICE_SCREEN } from '../../../shared/helper/screen';
import { MinorAgesToMinorsUtil } from '../../../shared/helper/minors-util';
import { getTotalRoomPrice } from '../../../shared/helper/calculator';

export const RoomSelection: React.FC = () => {
  const steps = [
    'Seleccione una habitación',
    'Información del huésped',
    'Confirmación de reserva',
  ];
  const {
    setDates,
    setOccupancy,
    setRoom,
    setExtras,
    setIsLoading,
    reservation,
  } = useReservation();
  const [activeStep, setActiveState] = useState(0);
  const [rooms, setRooms] = useState<Room[]>([]);
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
      adults: reservation.occupancy?.adults ?? 0,
      minors: reservation.occupancy?.minors ?? 0,
    },
  });

  const setAdults = (adding: number) => {
    state.occupancy.adults + adding >= 0 &&
      setState((prevState) => ({
        ...prevState,
        occupancy: {
          ...state.occupancy,
          adults: state.occupancy.adults + adding,
        },
      }));
  };

  const setMinors = (adding: number) => {
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

  const setNextStep = () => {
    setActiveState(activeStep + 1);
    window.scrollTo(0, 0);
  };

  enum nombres {
    'SUITE' = 'SUITE Jacuzzi',
    'ESTANDAR TWIN' = 'ESTÁNDAR TWIN',
    'QUEEN ROOM' = 'PAREJA ESTÁNDAR',
    'CUADRUPLE' = 'CUÁDRUPLE ESTÁNDAR',
    'CONNECTING FAMILIAR' = 'FAMILIAR CONNECTING',
  }

  const availableRooms = async () => {
    const hotelApi = new HotelFive();
    // props.setIsLoading(true);
    const { occupancy, dates, minorAges } = reservation;
    const { adults: adult } = occupancy;
    const { start, end } = dates;
    const { children, youngs } = MinorAgesToMinorsUtil(minorAges);

    const { data } = await hotelApi.rooms({
      cantAdultos: adult,
      cantJovenes: youngs,
      cantMenores: children,
      fechaIni: formatHotelFiveQuery(start),
      fechaFin: formatHotelFiveQuery(end),
    });

    return data.habitaciones;
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
        const foundRoom = allRooms.find((room) => room.title === name);

        if (foundRoom) {
          foundRoom.id = habitacion.id;
          foundRoom.price = habitacion.totalReservaSinIva;
          foundRoom.iva = habitacion.totalReservaIVA;
          availableRooms.push(foundRoom);
        }
      }
      return acc;
    }, []);

    setRooms(availableRooms);
  };

  useEffect(() => {
    setActiveState(0);
    setRoom({ ...reservation.room, hotel: '', name: '', price: 0, iva: 0 });
    setExtras({
      ...reservation.extras,
      tourCafe: { ...reservation.extras.tourCafe, quantity: 0 },
    });
  }, [1]);

  useEffect(() => {
    setIsLoading(true);
    void availableRooms()
      .then((roomsHotelFive) => {
        roomsReduced(roomsHotelFive);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [reservation.dates, reservation.occupancy]);

  function formatMoney(amount: number) {
    if (isNaN(amount)) {
      return 'Invalid amount';
    }

    const roundedAmount = amount.toFixed(2);

    return `$${roundedAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }

  return (
    <>
      <LoadingScreen isLoading={reservation.isLoading} />
      <Banner desktopImage={photo} mobileImage={photo} height="500px" />
      <StyledReservationInfoContainer>
        <WingCard background={COLORS.PEARL_BLACK}>
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              color: `${COLORS.GOLD}`,
              fontSize: '1.5rem',
            }}
            text={'Su estancia'}
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
                adults: state.occupancy.adults,
                minors: state.occupancy.minors,
              }}
            />
            <Button
              style={{
                ...GREEN_BUTTON_ALT,
                fontSize: `${DEVICE_SCREEN.isDesktop ? '1rem' : '0.6rem'}`,
                padding: `${
                  DEVICE_SCREEN.isDesktop ? '0.5rem 16px' : '0.5rem 0.2rem'
                }`,
                margin: `${
                  DEVICE_SCREEN.isDesktop ? '0.5rem 16px' : '0 0.2rem'
                }`,
              }}
              text={`${formatMoney(
                getTotalRoomPrice({
                  isVatPayer: reservation.customer.isVatPayer,
                  vat: reservation.room.iva,
                  price: reservation.room.price,
                }) +
                  reservation.extras.tourCafe.price *
                    reservation.extras.tourCafe.quantity,
              )} COP`}
            />
          </StyledInfoContainer>
          <Paragraph
            style={{
              ...LIGHT_FONT_STYLE,
              color: `${COLORS.GOLD}`,
              fontSize: '1.5rem',
            }}
            text={steps[activeStep]}
          />
          <Stepper steps={steps} activeStep={activeStep} />
        </WingCard>
        {activeStep === 0 && (
          <>
            <Backdrop
              sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
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
                backgroundColor: `${COLORS.CREAM}`,
              }}
              open={state.backdropOccupancy}
            >
              <ReservationOccupancyCard
                adults={state.occupancy.adults.toString()}
                minors={state.occupancy.minors.toString()}
                setAdults={setAdults}
                setMinors={setMinors}
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
