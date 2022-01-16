import MeasurementsOverview from '../MeasurementsOverview/MeasurementsOverview';
import './TelemetryPage.scss';

const TelemetryPage = (): JSX.Element => {
  return (
    <div className="TelemetryPage Content">
      <div className="PageTitle">Telemetry Data</div>
      <div className="TelemetryPage-Intro">
        <p>
          Here you can explore what Telemetry data is available through the
          Jalapeño Framework. Telemetry data is arranged as Measurements. Select
          one of the Measurements below to see what properties it provides.
        </p>
        <p>
          To have more Measurements available in your Jalapeño instance,
          configure additional{' '}
          <a
            href="https://yangcatalog.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Yang Models
          </a>{' '}
          on your routers.
        </p>
      </div>
      <MeasurementsOverview />
    </div>
  );
};

export default TelemetryPage;
