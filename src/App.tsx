import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MeasurementsOverview from './components/MeasurementsOverview/MeasurementsOverview';
import WindowTooSmallMessage from './components/WindowTooSmallMessage/WindowTooSmallMessage';
import RouteHandler from './RouteHandler';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <RouteHandler />
      </Router>
      <WindowTooSmallMessage />
      <Footer />
    </div>
  );
}

export default App;
