//Libraries
import React from 'react';

//Interfaces & Styled Components
import {
  StyledImage,
  StyledImageContainer,
  StyledMenuContainer,
  StyledTextContainer,
  ContactForm,
  StyledHotelDescription,
  StyledHotelDescriptionText,
  StyledRoomsSeparator,
  StyledRoomsEquipmentContainer,
  StyledTextRooms,
} from '..';

//Shared & Components
import { Banner, Image, LIGHT_FONT_STYLE, Paragraph } from '../../atoms';
import { COLORS } from '../../../constants/colors';
import { HOTELS } from '../../../constants/hotels';
import Head from '../../../assets/habitaciones/head-habitaciones.jpg';
import TypicaPiscinas from '../../../assets/habitaciones/typica-piscinas.jpg';
import BannerPhoto from '../../../assets/habitaciones/banner.jpg';
import BannerPhotoMobile from '../../../assets/habitaciones/banner-mobile.jpg';
import LogoBourbon from '../../../assets/logo-bourbon.svg';
import LogoTypica from '../../../assets/logo-typica.svg';
import { ROOMS_BOURBON, ROOMS_TIPICA } from '../../../constants/rooms';
import { MenuRooms, RoomCard, RoomEquipments, WingCard } from '../../molecules';
import { useNavigate } from 'react-router-dom';
import { DEVICE_SCREEN } from '../../../shared/helper/screen';

export const Rooms: React.FC = () => {
  const { isDesktop } = DEVICE_SCREEN;
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate('/reserva/selecciona');
  };
  return (
    <>
      <Banner desktopImage={BannerPhoto} mobileImage={BannerPhotoMobile} />
      <StyledMenuContainer>
        <MenuRooms />
        <StyledTextContainer>
          <Paragraph
            style={{
              fontFamily: 'Royale',
              fontSize: `${isDesktop ? '2rem' : '1rem'}`,
              textAlign: 'center',
            }}
            text="EXPERIMENTE EL DISEÑO CONFORTABLE DE NUESTRAS HABITACIONES, EQUIPADAS PARA QUE PUEDA DESCANSAR, CONOCER EL EJE CAFETERO, SU CULTURA Y SUS MONTAÑAS CULTIVADAS CON EL MEJOR CAFÉ DEL MUNDO MIENTRAS VIVE EL PLACER DE LOS SABORES DE NUESTRO MIRADOR DEL CAFÉ."
          />
        </StyledTextContainer>
        <StyledHotelDescription id={'bourbon-description'}>
          <StyledImageContainer>
            <StyledImage src={Head} />
          </StyledImageContainer>
          <StyledHotelDescriptionText>
            <WingCard background={COLORS.GREEN} inverted={isDesktop}>
              <StyledRoomsSeparator />
              <StyledTextRooms>
                <Image
                  src={LogoBourbon}
                  width="150px"
                  style={{ margin: '16px auto' }}
                />
                <Paragraph
                  style={{
                    ...LIGHT_FONT_STYLE,
                    color: `${COLORS.WHITE}`,
                    textAlign: 'justify',
                  }}
                  text={HOTELS.BOURBON.DESCRIPTION}
                />
              </StyledTextRooms>
              <StyledRoomsSeparator />
            </WingCard>
          </StyledHotelDescriptionText>
        </StyledHotelDescription>
        {ROOMS_BOURBON.map((room, index) => (
          <div id={`bourbon-room-${index}`} key={`bourbon-room-${index}`}>
            <RoomCard
              title={room.title}
              photo={room.photo}
              photos={room.photos}
              description={room.description}
              detailsUrl={room.detailsUrl}
              reserveUrl={'/reserva/selecciona'}
              inverted={room.inverted}
              banner={room.banner}
              equipment={room.equipment}
              hotel={room.hotel}
              price={0}
              reserveAction={() => changeRoute()}
              id={room.id}
              iva={room.iva}
            />
          </div>
        ))}
        <StyledRoomsEquipmentContainer>
          <WingCard background={COLORS.PEARL_BLACK} inverted={true}>
            <RoomEquipments
              title="EQUIPAMENTO Bourbon"
              isVault={true}
              isParking={true}
              isTv={true}
              isHotWater={true}
              isHotelInsurance={true}
              isCoffeOpenBar={true}
              isJaccuzzi={true}
              isOpticFiber={false}
              isPool={false}
            />
          </WingCard>
        </StyledRoomsEquipmentContainer>
        <StyledRoomsSeparator />
        <StyledHotelDescription id={'typica-description'}>
          <StyledImageContainer>
            <StyledImage src={TypicaPiscinas} />
          </StyledImageContainer>
          <StyledHotelDescriptionText>
            <WingCard background={COLORS.GREEN} inverted={isDesktop}>
              <img
                src={LogoTypica}
                width="150px"
                style={{ margin: '16px auto' }}
              />
              <Paragraph
                style={{
                  ...LIGHT_FONT_STYLE,
                  color: `${COLORS.WHITE}`,
                  textAlign: 'justify',
                }}
                text={HOTELS.TYPICA.DESCRIPTION}
              />
            </WingCard>
          </StyledHotelDescriptionText>
        </StyledHotelDescription>
        {ROOMS_TIPICA.map((room, index) => (
          <div id={`tipica-room-${index}`} key={`bourbon-room-${index}`}>
            <RoomCard
              title={room.title}
              photo={room.photo}
              photos={room.photos}
              description={room.description}
              detailsUrl={room.detailsUrl}
              reserveUrl={room.reserveUrl}
              inverted={room.inverted}
              banner={room.banner}
              equipment={room.equipment}
              hotel={room.hotel}
              price={0}
              reserveAction={() => console.log()}
              id={room.id}
              iva={room.iva}
            />
          </div>
        ))}
        <StyledRoomsEquipmentContainer>
          <WingCard background={COLORS.PEARL_BLACK} inverted={true}>
            <RoomEquipments
              title="EQUIPAMENTO TIPICA"
              isVault={true}
              isParking={true}
              isTv={true}
              isHotWater={true}
              isHotelInsurance={true}
              isCoffeOpenBar={true}
              isPool={true}
              isJaccuzzi={true}
              isOpticFiber={false}
            />
          </WingCard>
        </StyledRoomsEquipmentContainer>
      </StyledMenuContainer>
      <ContactForm />
    </>
  );
};
