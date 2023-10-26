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
  Restaurante,
} from '../components/organisms';

//Shared
import { ReservationProvider } from '../context';
import { NAV_ITEMS } from '../constants/nav-items';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ReservationProvider>
        {/* <NavMenu items={NAV_ITEMS} /> */}
        <Routes>
          {/* <Route path="/" Component={Home} /> */}
          {/* <Route path="/habitaciones" Component={Rooms} /> */}
          {/* <Route path="/habitacion/:hotel/:room" Component={Room} /> */}
          {/* <Route path="/reserva/selecciona" Component={RoomSelection} /> */}
          <Route
            path="/v2/mirador-del-cafe-carta-piqueteadero/"
            Component={Piqueteadero}
          />
          <Route
            path="/v2/mirador-del-cafe-carta-restaurante/"
            Component={Restaurante}
          />
          <Route path="*" Component={NotFound} />
        </Routes>
        {/* <Footer /> */}
      </ReservationProvider>
    </Router>
  );
};

export default AppRouter;
