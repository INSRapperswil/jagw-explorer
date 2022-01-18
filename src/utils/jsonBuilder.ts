import { MeasurementDetails } from '../model';
import { MeasurementColumn } from '../model/MeasurementDetails';

export const buildMeasurementJson = (
  measurementName: string,
  timestamp: number,
  measurementColumns: MeasurementColumn[],
): any => {
  const measurement: any = {};
  measurement['measurement'] = measurementName;
  measurement['timestamp'] = timestamp;

  const properties: any = {};
  for (const column of measurementColumns) {
    properties[column.name] = column.lastValue || null;
  }

  measurement['properties'] = properties;
  return measurement;
};
