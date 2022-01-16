import './LoadingSpinner.scss';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DatabaseImage from '../../assets/database-solid.svg';

const LoadingSpinner = (): JSX.Element => {
  return (
    <div className="LoadingSpinner">
      <img
        src={DatabaseImage}
        className="LoadingSpinner-Background"
        alt="Database Icon"
      />
      <FontAwesomeIcon className="LoadingSpinner-Icon" icon={faSearch} />
    </div>
  );
};

export default LoadingSpinner;

// const LoadingSpinner = (): JSX.Element => {
//   return (
//     <div className="LoadingSpinner">
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//       <div></div>
//     </div>
//   );
// };

// export default LoadingSpinner;
