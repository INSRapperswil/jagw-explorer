import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import topologyIcon from '../../assets/network-topology-icon.svg';
import telemetryIcon from '../../assets/performance-icon.svg';
import ImgLink from '../ImgLink/ImgLink';
import EndpointInput from '../EndpointInput/EndpointInput';

const Home = (): JSX.Element => {
  return (
    <div className="Home Content">
      <div className="PageTitle">JAGW Explorer</div>
      <div className="Home-Intro">
        <p>Welcome to the Jalapeño API Gateway Explorer.</p>
        <p>
          This application is built for SR-App developers. It provides a way to
          explore the data that is available through the{' '}
          <a
            rel="noopener noreferrer"
            href="https://jalapeno-api-gateway.github.io/jagw-docs/"
            target="_blank"
          >
            Jalapeño API Gateway
          </a>
          .
        </p>
      </div>
      <FontAwesomeIcon className="Home-ArrowDown" icon={faArrowDown} />
      <EndpointInput />
      <FontAwesomeIcon className="Home-ArrowDown" icon={faArrowDown} />
      <div className="Home-ExternalLinks">
        <ImgLink
          title="Topology Data"
          link="/topology"
          alt="Topology Icon"
          imgPath={topologyIcon}
        />
        <ImgLink
          title="Telemetry Data"
          link="/telemetry"
          alt="Telemetry Icon"
          imgPath={telemetryIcon}
        />
      </div>
    </div>
  );
};

export default Home;
