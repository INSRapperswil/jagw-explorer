import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { SetupEndpoint } from './api/Api';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WindowTooSmallMessage from './components/WindowTooSmallMessage/WindowTooSmallMessage';
import EndpointProvider from './EndpointProvider';
import RouteHandler from './RouteHandler';

function App(): JSX.Element {
  return (
    <div className="App">
      <EndpointProvider>
        <Header />
        <Router>
          <RouteHandler />
        </Router>
        <WindowTooSmallMessage />
        <Footer />
      </EndpointProvider>
    </div>
  );
}

export default App;
