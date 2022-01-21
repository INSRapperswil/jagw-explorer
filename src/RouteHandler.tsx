import react from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import MeasurementDetailsPage from './components/MeasurementDetailsPage/MeasurementDetailsPage';
import TelemetryPage from './components/TelemetryPage/TelemetryPage';
import TopologyPage from './components/TopologyPage/TopologyPage';

const RouteHandler = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topology" element={<TopologyPage />} />
      <Route
        path="/telemetry/:measurement"
        element={<MeasurementDetailsPage />}
      />
      <Route path="/telemetry" element={<TelemetryPage />} />
    </Routes>
  );
};

export default RouteHandler;
