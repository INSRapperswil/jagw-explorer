import { MeasurementColumn } from '../../model/MeasurementDetails';
import './MeasurementProperty.scss';

type MeasurementPropertyProps = {
  measurementColumn: MeasurementColumn;
};

const MeasurementProperty = (props: MeasurementPropertyProps): JSX.Element => {
  const { measurementColumn } = props;

  return (
    <div className="MeasurementProperty">
      <div className="MeasurementProperty-Name">{measurementColumn.name}</div>
      <div className="MeasurementProperty-Type">{measurementColumn.type}</div>
    </div>
  );
};

export default MeasurementProperty;
