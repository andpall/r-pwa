import React, { lazy } from 'react';

const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));

const routes = [
  { path: '/', component: <Home />, title: 'Home' },
  { path: '/about', component: <About />, title: 'About' },
];

export default routes;
