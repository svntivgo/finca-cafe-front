//Libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import {
  Home,
  Room,
  Rooms,
  NavMenu,
  // RoomSelection,
  Footer,
  NotFound,
  Piqueteadero,
  Restaurante,
  Bar,
  Cafe,
} from '../components/organisms';

//Shared
import { ReservationProvider } from '../context';
import { NAV_ITEMS } from '../constants/nav-items';
import { Whatsapp } from '../components/molecules';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ReservationProvider>
        <NavMenu items={NAV_ITEMS} />
        <Whatsapp />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/habitaciones" Component={Rooms} />
          <Route path="/habitacion/:hotel/:room" Component={Room} />
          {/* <Route path="/reserva/selecciona" Component={RoomSelection} /> */}
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
