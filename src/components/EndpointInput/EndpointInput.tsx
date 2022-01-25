import React, { useContext, useEffect, useState } from 'react';

import { EndpointContext } from '../../EndpointProvider';

import './EndpointInput.scss';

const EndpointInput = (): JSX.Element => {
  const [inputRef, setInputRef] = useState<React.RefObject<HTMLInputElement>>();
  const [formRef, setFormRef] = useState<React.RefObject<HTMLFormElement>>();
  const [errorMessageRef, setErrorMessageRef] =
    useState<React.RefObject<HTMLDivElement>>();

  const endpointContext = useContext(EndpointContext);

  useEffect(() => {
    setInputRef(React.createRef<HTMLInputElement>());
    setFormRef(React.createRef<HTMLFormElement>());
    setErrorMessageRef(React.createRef<HTMLDivElement>());
  }, []);

  const setEndpoint = (event: any): void => {
    if (inputRef?.current) {
      let userInput = inputRef.current.value;

      if (inputMatchesPattern(userInput)) {
        setErrorMessage('');
        localStorage.setItem('endpoint', trimUserInput(userInput));
        endpointContext.updateEndpoint();
      } else {
        setErrorMessage('The endpoint must match the format "<host>:<port>".');
      }
    }
    event.preventDefault();
    if (formRef?.current) {
      formRef.current.reset();
    }
  };

  const inputMatchesPattern = (userInput: string): boolean => {
    const endpointFormat = new RegExp('.*:[0-9]{1,5}(/)?');
    return endpointFormat.test(userInput);
  };

  const trimUserInput = (userInput: string): string => {
    let withoutPrefix = userInput
      .replace('http://', '')
      .replace('https://', '');
    return withoutPrefix.replace(/\/$/, '');
  };

  const setErrorMessage = (message: string): void => {
    const errorMessageDiv = errorMessageRef?.current;
    if (errorMessageDiv) {
      errorMessageDiv.innerText = message;
    }
  };

  return (
    <div className="EndpointInput">
      <div className="EndpointInput-Text">
        Configure the endpoint of the <b>request service</b> of your{' '}
        <b>Jalapeño API Gateway</b> instance below.
      </div>
      <form
        ref={formRef}
        className="EndpointInput-Form"
        onSubmit={(e) => setEndpoint(e)}
      >
        <input
          className="EndpointInput-InputField"
          ref={inputRef}
          type="text"
        />
        <input
          className="EndpointInput-SubmitBtn"
          type="submit"
          value="Set Endpoint"
        />
      </form>
      <div className="EndpointInput-ErrorMessage" ref={errorMessageRef}></div>
    </div>
  );
};

export default EndpointInput;
