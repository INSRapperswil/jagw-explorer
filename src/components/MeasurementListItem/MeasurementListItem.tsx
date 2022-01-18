import { Measurement } from '../../model';
import { getHumanReadableTimestamp } from '../../utils/dateHelpers';
import './MeasurementListItem.scss';

type MeasurementListItemProps = {
  measurement: Measurement;
};

const MeasurementListItem = (props: MeasurementListItemProps): JSX.Element => {
  const { measurement } = props;

  return (
    <a
      href={'/telemetry/' + encodeURIComponent(measurement.name)}
      className="MeasurementListItem"
    >
      <div className="MeasurementListItem-Name">{measurement.name}</div>
      <div className="MeasurementListItem-Timestamp">
        {getHumanReadableTimestamp(measurement.timestampLatestMeasurement)}
      </div>
    </a>
  );
};

export default MeasurementListItem;
