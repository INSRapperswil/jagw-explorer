import { createContext, useEffect, useState } from 'react';

import { SetupEndpoint } from './api/Api';
import SplashScreen from './components/SplashScreen/SplashScreen';

type EndpointProviderProps = {
  children?: React.ReactNode;
};

export type EndpointContextValue = {
  endpoint: string | undefined;
  updateEndpoint: () => void;
};

const defaultEndpointContextValue: EndpointContextValue = {
  endpoint: undefined,
  updateEndpoint: () => {},
};

export const EndpointContext = createContext<EndpointContextValue>(
  defaultEndpointContextValue,
);

const EndpointProvider = (props: EndpointProviderProps): JSX.Element => {
  const { children } = props;

  const [endpoint, setEndpoint] = useState<string | undefined>(undefined);
  const [endpointInitialized, setEndpointInitialized] =
    useState<boolean>(false);

  useEffect(() => {
    updateEndpoint();
  }, []);

  useEffect(() => {
    setEndpointInitialized(true);
  }, [endpoint]);

  const updateEndpoint = (): void => {
    const e = localStorage.getItem('endpoint') || undefined;
    SetupEndpoint(e);
    setEndpoint(e);
  };

  if (!endpointInitialized) {
    return <SplashScreen />;
  }
  return (
    <EndpointContext.Provider value={{ endpoint, updateEndpoint }}>
      {children}
    </EndpointContext.Provider>
  );
};

export default EndpointProvider;
