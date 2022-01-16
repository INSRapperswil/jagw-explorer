import react from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutPage from './components/AboutPage/AboutPage';
import Home from './components/Home/Home';
import TelemetryPage from './components/TelemetryPage/TelemetryPage';
import TopologyPage from './components/TopologyPage/TopologyPage';

const RouteHandler = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={Home()} />
      <Route path="/topology" element={TopologyPage()} />
      <Route path="/telemetry" element={TelemetryPage()} />
      <Route path="/about" element={AboutPage()} />
    </Routes>
  );
};

export default RouteHandler;
