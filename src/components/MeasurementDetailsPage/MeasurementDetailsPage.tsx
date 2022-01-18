import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FetchMeasurementDetails } from '../../api/Api';
import { MeasurementDetails } from '../../model';
import BackButton from '../BackButton/BackButton';
import './MeasurementDetailsPage.scss';
import { getHumanReadableTimestamp } from '../../utils/dateHelpers';
import RefreshButton from '../RefreshButton/RefreshButton';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import MeasurementProperty from '../MeasurementProperty/MeasurementProperty';
import TableHeader from '../TableHeader/TableHeader';
import SearchBar from '../SearchBar/SearchBar';
import { MeasurementColumn } from '../../model/MeasurementDetails';
import { buildMeasurementJson } from '../../utils/jsonBuilder';
import CodeBlock from '../CodeBlock/CodeBlock';
import { ErrorMessage } from '../../model/ErrorMessage';
import { PopupProps, withPopup } from '../../utils/hoc/popupHoc';
import Popup from '../Popup/Popup';

type MeasurementDetailsPageProps = PopupProps & {};

const MeasurementDetailsPage = (
  props: MeasurementDetailsPageProps,
): JSX.Element => {
  const { openPopup, closePopup } = props;

  const [measurementName, setMeasurementName] = useState<string>('');
  const [timestamp, setTimestamp] = useState<string>('-');
  const [measurementDetails, setMeasurementDetails] =
    useState<MeasurementDetails>();
  const [measurementDetailsObj, setMeasurementDetailsObj] =
    useState<MeasurementDetails>();
  const [showLoadingSpinner, setShowLoadingSpinner] = useState<boolean>(false);
  const [refreshBtnRef, setRefreshBtnRef] =
    useState<React.RefObject<HTMLButtonElement>>();
  const [selection, setSelection] = useState<MeasurementColumn[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const name = useParams().measurement || '';

  useEffect(() => {
    filterBySearch();
    setShowLoadingSpinner(false);
    if (measurementDetails) {
      setTimestamp(
        getHumanReadableTimestamp(
          measurementDetails.timestampLatestMeasurement,
        ),
      );
    }
  }, [measurementDetails]);

  useEffect(() => {
    filterBySearch();
  }, [searchTerm]);

  useEffect(() => {
    if (measurementName != '') {
      fetchMeasurementDetails();
    }
  }, [measurementName]);

  useEffect(() => {
    buildMeasurementDetailsObj();
  }, [selection]);

  useEffect(() => {
    setRefreshBtnRef(React.createRef<HTMLButtonElement>());
    setMeasurementName(name);
  }, []);

  const fetchMeasurementDetails = (): void => {
    setShowLoadingSpinner(true);
    setTimestamp('-');
    FetchMeasurementDetails(
      measurementName,
      (measurementDetails: MeasurementDetails, err?: ErrorMessage) => {
        if (err) {
          openPopup(
            <Popup
              title={err.title}
              message={err.userMessage}
              onClose={closePopup}
            />,
          );
          setMeasurementDetails(undefined);
          filterBySearch();
          setShowLoadingSpinner(false);
        } else {
          setMeasurementDetails(measurementDetails);
        }
      },
    );
  };

  const filterBySearch = (): void => {
    if (!measurementDetails) {
      setSelection([]);
      return;
    }

    if (searchTerm == '') {
      setSelection(measurementDetails.columns);
    } else {
      var filtered = new Array<MeasurementColumn>();
      measurementDetails.columns.forEach((column) => {
        if (column.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          filtered.push(column);
        }
      });
      setSelection(filtered);
    }
  };

  const buildMeasurementDetailsObj = (): void => {
    if (!measurementDetails) return;

    const obj: any = buildMeasurementJson(
      measurementName,
      measurementDetails.timestampLatestMeasurement,
      selection,
    );
    setMeasurementDetailsObj(obj);
  };

  return (
    <div className="MeasurementDetailsPage Content">
      <div className="MeasurementDetailsPage-Header">
        <BackButton title="All Measurements" url="/telemetry" />
        <div className="MeasurementDetailsPage-CenteredTitle">
          <div className="MeasurementDetailsPage-Title PageTitle">
            {measurementName}
          </div>
          <div className="MeasurementDetailsPage-UpdateInfo">
            <div className="MeasurementDetailsPage-TimestampTitle">
              Last Update:
            </div>
            <div className="MeasurementDetailsPage-Timestamp">{timestamp}</div>
            <RefreshButton
              onClick={fetchMeasurementDetails}
              btnRef={refreshBtnRef}
              isDisabled={showLoadingSpinner}
            />
          </div>
        </div>
      </div>
      <SearchBar onChange={setSearchTerm} currentValue={searchTerm} />
      <TableHeader
        CN="MeasurementDetailsPage-TableHeader"
        leftTitle="Property"
        rightTitle="Type"
      />
      {showLoadingSpinner ? (
        <LoadingSpinner />
      ) : measurementDetails?.columns.length == 0 ? (
        <div className="MeasurementDetailsPage-ErrorMessage">
          No Properties were found for this Measurement.
        </div>
      ) : selection.length == 0 ? (
        <div className="MeasurementDetailsPage-ErrorMessage">
          No Properties were found that match your query.
        </div>
      ) : (
        <>
          <div className="MeasurementDetailsPage-Properties">
            {selection.map((p) => {
              return <MeasurementProperty key={p.name} measurementColumn={p} />;
            })}
          </div>
          <CodeBlock
            obj={measurementDetailsObj}
            fileName="measurement.json"
            title="Latest Measurement"
          />
        </>
      )}
    </div>
  );
};

export default withPopup(MeasurementDetailsPage);
