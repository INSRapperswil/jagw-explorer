import { RpcError } from 'grpc-web';

import { Measurement, MeasurementDetails } from '../model';
import { ErrorMessage } from '../model/ErrorMessage';
import {
  createMeasurementDetails,
  createMeasurements,
} from '../model/typeConverters';

import { getErrorMessage } from './Errors';
import { RequestServiceClient } from './jagw/requestservice/RequestserviceServiceClientPb';
import {
  MeasurementDetailsRequest,
  MeasurementDetailsResponse,
  MeasurementsRequest,
  MeasurementsResponse,
} from './jagw/requestservice/requestservice_pb';

const server =
  'http://' +
  process.env.REACT_APP_JAGW_SERVER_ADDRESS +
  ':' +
  process.env.REACT_APP_JAGW_REQUEST_SERVICE_PORT;

const rsClient = new RequestServiceClient(server, null, null);

export const FetchMeasurements = (
  callback: (measurements: Measurement[], err?: ErrorMessage) => void,
): void => {
  const request = new MeasurementsRequest();

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
