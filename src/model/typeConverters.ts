import {
  Measurement as JagwMeasurement,
  MeasurementDetailsResponse,
  MeasurementColumn as JagwColumns,
  MeasurementsResponse,
} from '../api/jagw/requestservice/requestservice_pb';

import { Measurement } from './Measurement';
import { MeasurementColumn, MeasurementDetails } from './MeasurementDetails';

export const createMeasurements = (
  res: MeasurementsResponse,
): Measurement[] => {
  const responseList = res.getMeasurementsList();
  const measurements = new Array<Measurement>(responseList.length);

  for (let i = 0; i < responseList.length; i++) {
    measurements[i] = {
      name: responseList[i].getName(),
      timestampLatestMeasurement:
        responseList[i].getTimestampLatestMeasurement(),
    };
  }

  return measurements;
};

export const createMeasurementDetails = (
  res: MeasurementDetailsResponse,
): MeasurementDetails => {
  return {
    timestampLatestMeasurement: res.getTimestampLatestMeasurement(),
    columns: createMeasurementColumns(res),
  };
};

const createMeasurementColumns = (
  res: MeasurementDetailsResponse,
): MeasurementColumn[] => {
  const responseList = res.getColumnsList();
  const columns = new Array<MeasurementColumn>(responseList.length);

  for (let i = 0; i < responseList.length; i++) {
    columns[i] = {
      name: responseList[i].getName(),
      type: responseList[i].getType(),
      influxType: responseList[i].getInfluxType(),
      lastValue: responseList[i].getLastValue(),
    };
  }

  return columns;
};
