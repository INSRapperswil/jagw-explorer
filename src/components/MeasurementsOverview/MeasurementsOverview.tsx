import React, { useContext, useEffect, useState } from 'react';

import { FetchMeasurements } from '../../api/Api';
import { Measurement } from '../../model';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MeasurementListItem from '../MeasurementListItem/MeasurementListItem';
import './MeasurementsOverview.scss';
import RefreshButton from '../RefreshButton/RefreshButton';
import TableHeader from '../TableHeader/TableHeader';
import SearchBar from '../SearchBar/SearchBar';
import { ErrorMessage } from '../../model/ErrorMessage';
import { PopupProps, withPopup } from '../../utils/hoc/popupHoc';
import Popup from '../Popup/Popup';

type MeasurementsOverviewProps = PopupProps & {};

const MeasurementsOverview = (
  props: MeasurementsOverviewProps,
): JSX.Element => {
  const { openPopup, closePopup } = props;

  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState<boolean>(false);
  const [selection, setSelection] = useState<Measurement[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [refreshBtnRef, setRefreshBtnRef] =
    useState<React.RefObject<HTMLButtonElement>>();

  useEffect(() => {
    filterBySearch();
    setShowLoadingSpinner(false);
  }, [measurements]);

  useEffect(() => {
    filterBySearch();
  }, [searchTerm]);

  useEffect(() => {});

  useEffect(() => {
    setRefreshBtnRef(React.createRef<HTMLButtonElement>());
    fetchMeasurements();
  }, []);

  const fetchMeasurements = (): void => {
    setShowLoadingSpinner(true);
    FetchMeasurements((measurements: Measurement[], err?: ErrorMessage) => {
      if (err) {
        openPopup(
          <Popup
            title={err.title}
            message={err.userMessage}
            onClose={closePopup}
          />,
        );
        setMeasurements([]);
      } else {
        setMeasurements(measurements);
      }
    });
  };

  const filterBySearch = (): void => {
    if (searchTerm == '') {
      setSelection(measurements);
    } else {
      let filtered = new Array<Measurement>();
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
      <SearchBar onChange={setSearchTerm} currentValue={searchTerm} />
      <TableHeader leftTitle="Measurement" rightTitle="Last Update">
        <RefreshButton
          CN={'MeasurementsOverview-RefreshBtn'}
          onClick={fetchMeasurements}
          btnRef={refreshBtnRef}
          isDisabled={showLoadingSpinner}
        />
      </TableHeader>
      {showLoadingSpinner ? (
        <LoadingSpinner />
      ) : measurements.length == 0 ? (
        <div className="MeasurementsOverview-ErrorMessage">
          No Measurements were found.
        </div>
      ) : selection.length == 0 ? (
        <div className="MeasurementsOverview-ErrorMessage">
          No Measurements were found that match your query.
        </div>
      ) : (
        selection.map((m) => {
          return <MeasurementListItem key={m.name} measurement={m} />;
        })
      )}
    </div>
  );
};

export default withPopup(MeasurementsOverview);
//
