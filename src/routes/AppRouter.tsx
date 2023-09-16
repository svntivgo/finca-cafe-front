import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, NavMenu } from '../components/organisms';
import { NAV_ITEMS } from '../constants/nav-items';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <NavMenu items={NAV_ITEMS} />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
