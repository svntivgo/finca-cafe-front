import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, NavMenu } from '../components/organisms';
import { NAV_ITEMS } from '../constants/nav-items';
import { ReservationProvider } from '../context';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ReservationProvider>
        <NavMenu items={NAV_ITEMS} />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </ReservationProvider>
    </Router>
  );
};

export default AppRouter;
