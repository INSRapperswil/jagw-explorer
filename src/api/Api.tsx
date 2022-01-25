import { RpcError } from 'grpc-web';

import { Measurement, MeasurementDetails } from '../model';
import { ErrorMessage } from '../model/ErrorMessage';
import {
  createMeasurementDetails,
  createMeasurements,
} from '../model/typeConverters';

import { createErrorForNoEndpointConfigured, getErrorMessage } from './Errors';
import { RequestServiceClient } from './jagw/requestservice/RequestserviceServiceClientPb';
import {
  MeasurementDetailsRequest,
  MeasurementDetailsResponse,
  MeasurementsRequest,
  MeasurementsResponse,
} from './jagw/requestservice/requestservice_pb';

var rsClient: RequestServiceClient | undefined = undefined;

export const SetupEndpoint = (endpoint?: string): void => {
  if (endpoint) {
    rsClient = new RequestServiceClient('http://' + endpoint, null, null);
  } else {
    rsClient = undefined;
  }
};

export const FetchMeasurements = (
  callback: (measurements: Measurement[], err?: ErrorMessage) => void,
): void => {
  const request = new MeasurementsRequest();

  if (!rsClient) {
    callback([], createErrorForNoEndpointConfigured());
    return;
  }

  rsClient.getMeasurements(
    request,
    null,
    (err: RpcError, res: MeasurementsResponse): void => {
      if (err) {
        let errorMessage = getErrorMessage(err);
        console.error(errorMessage);
        callback([], errorMessage);
      } else {
        callback(createMeasurements(res), undefined);
      }
    },
  );
};

export const FetchMeasurementDetails = (
  measurementName: string,
  callback: (
    measurementDetails: MeasurementDetails,
    err?: ErrorMessage,
  ) => void,
): void => {
  const request = new MeasurementDetailsRequest();
  request.setName(measurementName);

  if (!rsClient) {
    callback({} as MeasurementDetails, createErrorForNoEndpointConfigured());
    return;
  }

  rsClient.getMeasurementDetails(
    request,
    null,
    (err: RpcError, res: MeasurementDetailsResponse): void => {
      if (err) {
        let errorMessage = getErrorMessage(err);
        console.error(errorMessage);
        callback({} as MeasurementDetails, errorMessage);
      } else {
        console.log(res);
        callback(createMeasurementDetails(res));
      }
    },
  );
};
