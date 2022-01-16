export interface MeasurementDetails {
    timestampLatestMeasurement: number;
    columns: MeasurementColumn[];
}

export interface MeasurementColumn {
    name: string;
    type: string;
    influxType: string;
    lastValue: string;
}