import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  );
}
export default Router;
