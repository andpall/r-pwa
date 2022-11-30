import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import Header from './components/Header';
import LoaderComponent from './components/LoaderComponent';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderComponent />}>
        <Header />
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
