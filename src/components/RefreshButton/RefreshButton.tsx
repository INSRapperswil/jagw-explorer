import React, { useEffect, useState } from 'react';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './RefreshButton.scss';
import { buildClassName } from '../../utils/classNameHelper';

type RefreshButtonProps = {
  onClick: () => void;
  btnRef?: React.RefObject<HTMLButtonElement>;
  isDisabled: boolean;
  CN?: string;
};

const RefreshButton = (props: RefreshButtonProps): JSX.Element => {
  const { onClick, btnRef, isDisabled, CN } = props;
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  useEffect(() => {
    updateBtnStatus();
  }, []);

  useEffect(() => {
    updateBtnStatus();
  }, [isSpinning, isDisabled]);

  const onButtonClicked = (): void => {
    setIsSpinning(true);
    onClick();
    btnRef?.current?.classList.toggle('rotate1');
    setTimeout(() => {
      btnRef?.current?.classList.toggle('rotate2');
      setTimeout(() => {
        if (btnRef?.current) {
          btnRef.current.classList.toggle('rotate1');
          btnRef.current.classList.toggle('rotate2');
          setIsSpinning(false);
        }
      }, 500);
    }, 500);
  };

  const updateBtnStatus = (): void => {
    if (btnRef?.current) {
      if (isDisabled || isSpinning) {
        btnRef.current.setAttribute('disabled', 'true');
      } else {
        btnRef.current.removeAttribute('disabled');
      }
    }
  };

  return (
    <button
      className={buildClassName('RefreshButton', CN)}
      onClick={onButtonClicked}
      ref={btnRef}
    >
      <FontAwesomeIcon icon={faSyncAlt} />
    </button>
  );
};

export default RefreshButton;
