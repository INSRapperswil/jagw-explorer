import { RpcError } from 'grpc-web';

import { ErrorMessage } from '../model/ErrorMessage';

// A list of all gRPC error code can be found at https://grpc.github.io/grpc/core/md_doc_statuscodes.html
export const getErrorMessage = (err: RpcError): ErrorMessage => {
  let title: string = '';
  let message: string = '';
  switch (err.code) {
    case 14:
      title = 'Server Error';
      message = 'Could not connect to the Jalapeño API Gateway Server.';
      break;
    default:
      title = 'Unkonwn Error';
      message = 'Yuck! An unknow error occured.';
  }
  return {
    title: title,
    userMessage: message,
    grpcErrorCode: err.code,
    grpcErrorMessage: err.message,
  };
};
