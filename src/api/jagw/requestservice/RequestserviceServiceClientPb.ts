/**
 * @fileoverview gRPC-Web generated client stub for jagw
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as requestservice_requestservice_pb from './requestservice_pb';


export class RequestServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetLsNodes = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetLsNodes',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.TopologyRequest,
    requestservice_requestservice_pb.LsNodeResponse,
    (request: requestservice_requestservice_pb.TopologyRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.LsNodeResponse.deserializeBinary
  );

  getLsNodes(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.LsNodeResponse>;

  getLsNodes(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsNodeResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.LsNodeResponse>;

  getLsNodes(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsNodeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetLsNodes',
        request,
        metadata || {},
        this.methodInfoGetLsNodes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetLsNodes',
    request,
    metadata || {},
    this.methodInfoGetLsNodes);
  }

  methodInfoGetLsLinks = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetLsLinks',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.TopologyRequest,
    requestservice_requestservice_pb.LsLinkResponse,
    (request: requestservice_requestservice_pb.TopologyRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.LsLinkResponse.deserializeBinary
  );

  getLsLinks(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.LsLinkResponse>;

  getLsLinks(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsLinkResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.LsLinkResponse>;

  getLsLinks(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsLinkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetLsLinks',
        request,
        metadata || {},
        this.methodInfoGetLsLinks,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetLsLinks',
    request,
    metadata || {},
    this.methodInfoGetLsLinks);
  }

  methodInfoGetLsPrefixes = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetLsPrefixes',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.TopologyRequest,
    requestservice_requestservice_pb.LsPrefixResponse,
    (request: requestservice_requestservice_pb.TopologyRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.LsPrefixResponse.deserializeBinary
  );

  getLsPrefixes(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.LsPrefixResponse>;

  getLsPrefixes(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsPrefixResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.LsPrefixResponse>;

  getLsPrefixes(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsPrefixResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetLsPrefixes',
        request,
        metadata || {},
        this.methodInfoGetLsPrefixes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetLsPrefixes',
    request,
    metadata || {},
    this.methodInfoGetLsPrefixes);
  }

  methodInfoGetLsSrv6Sids = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetLsSrv6Sids',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.TopologyRequest,
    requestservice_requestservice_pb.LsSrv6SidResponse,
    (request: requestservice_requestservice_pb.TopologyRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.LsSrv6SidResponse.deserializeBinary
  );

  getLsSrv6Sids(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.LsSrv6SidResponse>;

  getLsSrv6Sids(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsSrv6SidResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.LsSrv6SidResponse>;

  getLsSrv6Sids(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsSrv6SidResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetLsSrv6Sids',
        request,
        metadata || {},
        this.methodInfoGetLsSrv6Sids,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetLsSrv6Sids',
    request,
    metadata || {},
    this.methodInfoGetLsSrv6Sids);
  }

  methodInfoGetLsNodeEdges = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetLsNodeEdges',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.TopologyRequest,
    requestservice_requestservice_pb.LsNodeEdgeResponse,
    (request: requestservice_requestservice_pb.TopologyRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.LsNodeEdgeResponse.deserializeBinary
  );

  getLsNodeEdges(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.LsNodeEdgeResponse>;

  getLsNodeEdges(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsNodeEdgeResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.LsNodeEdgeResponse>;

  getLsNodeEdges(
    request: requestservice_requestservice_pb.TopologyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsNodeEdgeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetLsNodeEdges',
        request,
        metadata || {},
        this.methodInfoGetLsNodeEdges,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetLsNodeEdges',
    request,
    metadata || {},
    this.methodInfoGetLsNodeEdges);
  }

  methodInfoGetLsNodeCoordinates = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetLsNodeCoordinates',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.LsNodeCoordinatesRequest,
    requestservice_requestservice_pb.LsNodeCoordinatesResponse,
    (request: requestservice_requestservice_pb.LsNodeCoordinatesRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.LsNodeCoordinatesResponse.deserializeBinary
  );

  getLsNodeCoordinates(
    request: requestservice_requestservice_pb.LsNodeCoordinatesRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.LsNodeCoordinatesResponse>;

  getLsNodeCoordinates(
    request: requestservice_requestservice_pb.LsNodeCoordinatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsNodeCoordinatesResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.LsNodeCoordinatesResponse>;

  getLsNodeCoordinates(
    request: requestservice_requestservice_pb.LsNodeCoordinatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.LsNodeCoordinatesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetLsNodeCoordinates',
        request,
        metadata || {},
        this.methodInfoGetLsNodeCoordinates,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetLsNodeCoordinates',
    request,
    metadata || {},
    this.methodInfoGetLsNodeCoordinates);
  }

  methodInfoGetTelemetryData = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetTelemetryData',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.TelemetryRequest,
    requestservice_requestservice_pb.TelemetryResponse,
    (request: requestservice_requestservice_pb.TelemetryRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.TelemetryResponse.deserializeBinary
  );

  getTelemetryData(
    request: requestservice_requestservice_pb.TelemetryRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.TelemetryResponse>;

  getTelemetryData(
    request: requestservice_requestservice_pb.TelemetryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.TelemetryResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.TelemetryResponse>;

  getTelemetryData(
    request: requestservice_requestservice_pb.TelemetryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.TelemetryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetTelemetryData',
        request,
        metadata || {},
        this.methodInfoGetTelemetryData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetTelemetryData',
    request,
    metadata || {},
    this.methodInfoGetTelemetryData);
  }

  methodInfoGetMeasurements = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetMeasurements',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.MeasurementsRequest,
    requestservice_requestservice_pb.MeasurementsResponse,
    (request: requestservice_requestservice_pb.MeasurementsRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.MeasurementsResponse.deserializeBinary
  );

  getMeasurements(
    request: requestservice_requestservice_pb.MeasurementsRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.MeasurementsResponse>;

  getMeasurements(
    request: requestservice_requestservice_pb.MeasurementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.MeasurementsResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.MeasurementsResponse>;

  getMeasurements(
    request: requestservice_requestservice_pb.MeasurementsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.MeasurementsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetMeasurements',
        request,
        metadata || {},
        this.methodInfoGetMeasurements,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetMeasurements',
    request,
    metadata || {},
    this.methodInfoGetMeasurements);
  }

  methodInfoGetMeasurementDetails = new grpcWeb.MethodDescriptor(
    '/jagw.RequestService/GetMeasurementDetails',
    grpcWeb.MethodType.UNARY,
    requestservice_requestservice_pb.MeasurementDetailsRequest,
    requestservice_requestservice_pb.MeasurementDetailsResponse,
    (request: requestservice_requestservice_pb.MeasurementDetailsRequest) => {
      return request.serializeBinary();
    },
    requestservice_requestservice_pb.MeasurementDetailsResponse.deserializeBinary
  );

  getMeasurementDetails(
    request: requestservice_requestservice_pb.MeasurementDetailsRequest,
    metadata: grpcWeb.Metadata | null): Promise<requestservice_requestservice_pb.MeasurementDetailsResponse>;

  getMeasurementDetails(
    request: requestservice_requestservice_pb.MeasurementDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.MeasurementDetailsResponse) => void): grpcWeb.ClientReadableStream<requestservice_requestservice_pb.MeasurementDetailsResponse>;

  getMeasurementDetails(
    request: requestservice_requestservice_pb.MeasurementDetailsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: requestservice_requestservice_pb.MeasurementDetailsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/jagw.RequestService/GetMeasurementDetails',
        request,
        metadata || {},
        this.methodInfoGetMeasurementDetails,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/jagw.RequestService/GetMeasurementDetails',
    request,
    metadata || {},
    this.methodInfoGetMeasurementDetails);
  }

}

