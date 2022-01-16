import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import { FetchMeasurements } from '../../api/Api';
import { Measurement } from '../../model';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MeasurementListItem from '../MeasurementListItem/MeasurementListItem';
import './MeasurementsOverview.scss';

const MeasurementsOverview = (): JSX.Element => {
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState<boolean>();
  const [selection, setSelection] = useState<Measurement[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [refreshBtnRef, setRefreshBtnRef] =
    useState<React.RefObject<HTMLButtonElement>>();

  useEffect(() => {
    filterBySearch();
    setShowLoadingSpinner(false);
    enableRefreshBtn(true);
  }, [measurements]);

  useEffect(() => {
    filterBySearch();
  }, [searchTerm]);

  useEffect(() => {
    setRefreshBtnRef(React.createRef<HTMLButtonElement>());
    fetchMeasurements();
  }, []);

  const refreshMeasurements = (): void => {
    enableRefreshBtn(false);
    fetchMeasurements();
    refreshBtnRef?.current?.classList.toggle('rotate1');
    setTimeout(() => {
      refreshBtnRef?.current?.classList.toggle('rotate2');
      setTimeout(() => {
        if (refreshBtnRef?.current) {
          refreshBtnRef.current.classList.toggle('rotate1');
          refreshBtnRef.current.classList.toggle('rotate2');
        }
      }, 500);
    }, 500);
  };

  const fetchMeasurements = (): void => {
    setShowLoadingSpinner(true);
    FetchMeasurements((measurements: Measurement[]) => {
      setMeasurements(measurements);
    });
  };

  const enableRefreshBtn = (value: boolean): void => {
    if (refreshBtnRef?.current) {
      if (value) {
        refreshBtnRef.current.removeAttribute('disabled');
      } else {
        refreshBtnRef.current.setAttribute('disabled', 'true');
      }
    }
  };

  const filterBySearch = (): void => {
    if (searchTerm == '') {
      setSelection(measurements);
    } else {
      var filtered = new Array<Measurement>();
      measurements.forEach((measurement) => {
        if (measurement.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          filtered.push(measurement);
        }
      });
      setSelection(filtered);
    }
  };

  return (
    <div className="MeasurementsOverview">
      <div className="MeasurementsOverview-SearchBar">
        <div className="MeasurementsOverview-SearchBarTitle">Search</div>
        <input
          type="search"
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
        />
      </div>
      <div className="MeasurementsOverview-Header">
        <div className="MeasurementsOverview-MeasurementTitle">Measurement</div>
        <div className="MeasurementsOverview-TimestampTitle">
          <span>Last Update</span>
          <button
            className="MeasurementsOverview-RefreshBtn"
            onClick={refreshMeasurements}
            ref={refreshBtnRef}
          >
            <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        </div>
      </div>
      {showLoadingSpinner ? (
        <LoadingSpinner />
      ) : measurements.length == 0 ? (
        <div>No Measurements found.</div>
      ) : selection.length == 0 ? (
        <div>No Measurements found that match your query.</div>
      ) : (
        selection.map((m) => {
          return <MeasurementListItem key={m.name} measurement={m} />;
        })
      )}
    </div>
  );
};

export default MeasurementsOverview;
