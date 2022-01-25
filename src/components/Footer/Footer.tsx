import { useContext, useEffect, useState } from 'react';

import { EndpointContext } from '../../EndpointProvider';

import './Footer.scss';

const Footer = (): JSX.Element => {
  const endpointContext = useContext(EndpointContext);

  return (
    <div className="Footer">
      <div className="Footer-Column Footer-Left">
        <span>ENDPOINT:</span>
        <span className="Footer-Endpoint">{endpointContext.endpoint}</span>
      </div>
      <div className="Footer-Column Footer-Right">
        Developed by{' '}
        <a
          rel="noopener noreferrer"
          href="https://www.michelbongard.ch/"
          target="_blank"
        >
          Michel Bongard
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
