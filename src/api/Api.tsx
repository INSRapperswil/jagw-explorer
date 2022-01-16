import { RpcError } from 'grpc-web';

import { Measurement, MeasurementDetails } from '../model';
import {
  createMeasurementDetails,
  createMeasurements,
} from '../model/typeConverters';

import { RequestServiceClient } from './jagw/requestservice/RequestserviceServiceClientPb';
import {
  MeasurementDetailsRequest,
  MeasurementDetailsResponse,
  MeasurementsRequest,
  MeasurementsResponse,
} from './jagw/requestservice/requestservice_pb';

const rsClient = new RequestServiceClient('http://localhost:8080', null, null);

export const FetchMeasurements = (
  callback: (measurements: Measurement[]) => void,
): void => {
  const request = new MeasurementsRequest();

  rsClient.getMeasurements(
    request,
    null,
    (err: RpcError, res: MeasurementsResponse): void => {
      if (err) console.log(err);
      callback(createMeasurements(res));
    },
  );
};

export const FetchMeasurementDetails = (
  measurementName: string,
  callback: (measurementDetails: MeasurementDetails) => void,
): void => {
  const request = new MeasurementDetailsRequest();
  request.setName(measurementName);

  rsClient.getMeasurementDetails(
    request,
    null,
    (err: RpcError, res: MeasurementDetailsResponse): void => {
      if (err) console.log(err);
      callback(createMeasurementDetails(res));
    },
  );
};
