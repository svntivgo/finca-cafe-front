//Libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import {
  Home,
  Room,
  Rooms,
  NavMenu,
  RoomSelection,
  Footer,
  NotFound,
  Piqueteadero,
  Bar,
  Cafe,
  Restaurante,
  InternalPlace,
  Celebraciones,
} from '../components/organisms';

//Shared
import { ReservationProvider } from '../context';
import { NAV_ITEMS } from '../constants/nav-items';
import { Whatsapp } from '../components/molecules';
import { INTERNAL_PLACE } from '../constants/internal-place';
import ScrollToTop from './scroll-top/ScrollTop';

const AppRouter: React.FC = () => {
  const { RESTAURANT, PIQUETEADERO, BAR, CAFE } = INTERNAL_PLACE;
  return (
    <Router>
      <ScrollToTop />
      <ReservationProvider>
        <NavMenu items={NAV_ITEMS} />
        <Whatsapp />
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/restaurante"
            Component={() => (
              <InternalPlace
                photo={RESTAURANT.photo}
                title={RESTAURANT.title}
                description={RESTAURANT.description}
                contact={RESTAURANT.contact}
                menu={RESTAURANT.menu}
                position="70% 0%"
              />
            )}
          />
          <Route
            path="/piqueteadero"
            Component={() => (
              <InternalPlace
                photo={PIQUETEADERO.photo}
                title={PIQUETEADERO.title}
                description={PIQUETEADERO.description}
                contact={PIQUETEADERO.contact}
                menu={PIQUETEADERO.menu}
                position="80% 0%"
              />
            )}
          />
          <Route
            path="/bar"
            Component={() => (
              <InternalPlace
                photo={BAR.photo}
                title={BAR.title}
                description={BAR.description}
                contact={BAR.contact}
                menu={BAR.menu}
                position="35% 0%"
              />
            )}
          />
          <Route
            path="/cafe"
            Component={() => (
              <InternalPlace
                photo={CAFE.photo}
                title={CAFE.title}
                description={CAFE.description}
                contact={CAFE.contact}
                menu={CAFE.menu}
                position="35% 0%"
              />
            )}
          />
          <Route path="/celebraciones" Component={Celebraciones} />
          <Route path="/habitaciones" Component={Rooms} />
          <Route path="/habitacion/:hotel/:room" Component={Room} />
          <Route path="/reserva/selecciona" Component={RoomSelection} />
          <Route
            path="/mirador-del-cafe-carta-piqueteadero/"
            Component={Piqueteadero}
          />
          <Route
            path="/mirador-del-cafe-carta-restaurante/"
            Component={Restaurante}
          />
          <Route path="/mirador-del-cafe-carta-bar/" Component={Bar} />
          <Route path="/mirador-del-cafe-carta-cafe/" Component={Cafe} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <Footer />
      </ReservationProvider>
    </Router>
  );
};

export default AppRouter;
