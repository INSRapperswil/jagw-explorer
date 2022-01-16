import { Measurement } from '../../model';
import './MeasurementListItem.scss';

type MeasurementListItemProps = {
  measurement: Measurement;
};

const MeasurementListItem = (props: MeasurementListItemProps): JSX.Element => {
  const { measurement } = props;

  return (
    <a href={'/telemetry/?' + measurement.name} className="MeasurementListItem">
      <div className="MeasurementListItem-Name">{measurement.name}</div>
      <div className="MeasurementListItem-Timestamp">
        {getHumanReadableTimestamp(measurement.timestampLatestMeasurement)}
      </div>
    </a>
  );
};

const getHumanReadableTimestamp = (timestamp: number): string => {
  var date = new Date(timestamp * 1000);
  return date.toLocaleString();
};

export default MeasurementListItem;
