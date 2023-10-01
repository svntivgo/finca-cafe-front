//Libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import { Home, NavMenu, Room, Rooms } from '../components/organisms';

//Shared
import { ReservationProvider } from '../context';
import { NAV_ITEMS } from '../constants/nav-items';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ReservationProvider>
        <NavMenu items={NAV_ITEMS} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/habitaciones" Component={Rooms} />
          <Route path="/habitacion/:hotel/:room" Component={Room} />
        </Routes>
      </ReservationProvider>
    </Router>
  );
};

export default AppRouter;
