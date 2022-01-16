/**
 * @fileoverview gRPC-Web generated client stub for jagw
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as subscriptionservice_subscriptionservice_pb from './subscriptionservice_pb';


export class SubscriptionServiceClient {
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

  methodInfoSubscribeToLsNodes = new grpcWeb.MethodDescriptor(
    '/jagw.SubscriptionService/SubscribeToLsNodes',
    grpcWeb.MethodType.SERVER_STREAMING,
    subscriptionservice_subscriptionservice_pb.TopologySubscription,
    subscriptionservice_subscriptionservice_pb.LsNodeEvent,
    (request: subscriptionservice_subscriptionservice_pb.TopologySubscription) => {
      return request.serializeBinary();
    },
    subscriptionservice_subscriptionservice_pb.LsNodeEvent.deserializeBinary
  );

  subscribeToLsNodes(
    request: subscriptionservice_subscriptionservice_pb.TopologySubscription,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/jagw.SubscriptionService/SubscribeToLsNodes',
      request,
      metadata || {},
      this.methodInfoSubscribeToLsNodes);
  }

  methodInfoSubscribeToLsLinks = new grpcWeb.MethodDescriptor(
    '/jagw.SubscriptionService/SubscribeToLsLinks',
    grpcWeb.MethodType.SERVER_STREAMING,
    subscriptionservice_subscriptionservice_pb.TopologySubscription,
    subscriptionservice_subscriptionservice_pb.LsLinkEvent,
    (request: subscriptionservice_subscriptionservice_pb.TopologySubscription) => {
      return request.serializeBinary();
    },
    subscriptionservice_subscriptionservice_pb.LsLinkEvent.deserializeBinary
  );

  subscribeToLsLinks(
    request: subscriptionservice_subscriptionservice_pb.TopologySubscription,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/jagw.SubscriptionService/SubscribeToLsLinks',
      request,
      metadata || {},
      this.methodInfoSubscribeToLsLinks);
  }

  methodInfoSubscribeToLsPrefixes = new grpcWeb.MethodDescriptor(
    '/jagw.SubscriptionService/SubscribeToLsPrefixes',
    grpcWeb.MethodType.SERVER_STREAMING,
    subscriptionservice_subscriptionservice_pb.TopologySubscription,
    subscriptionservice_subscriptionservice_pb.LsPrefixEvent,
    (request: subscriptionservice_subscriptionservice_pb.TopologySubscription) => {
      return request.serializeBinary();
    },
    subscriptionservice_subscriptionservice_pb.LsPrefixEvent.deserializeBinary
  );

  subscribeToLsPrefixes(
    request: subscriptionservice_subscriptionservice_pb.TopologySubscription,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/jagw.SubscriptionService/SubscribeToLsPrefixes',
      request,
      metadata || {},
      this.methodInfoSubscribeToLsPrefixes);
  }

  methodInfoSubscribeToLsSrv6Sids = new grpcWeb.MethodDescriptor(
    '/jagw.SubscriptionService/SubscribeToLsSrv6Sids',
    grpcWeb.MethodType.SERVER_STREAMING,
    subscriptionservice_subscriptionservice_pb.TopologySubscription,
    subscriptionservice_subscriptionservice_pb.LsSrv6SidEvent,
    (request: subscriptionservice_subscriptionservice_pb.TopologySubscription) => {
      return request.serializeBinary();
    },
    subscriptionservice_subscriptionservice_pb.LsSrv6SidEvent.deserializeBinary
  );

  subscribeToLsSrv6Sids(
    request: subscriptionservice_subscriptionservice_pb.TopologySubscription,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/jagw.SubscriptionService/SubscribeToLsSrv6Sids',
      request,
      metadata || {},
      this.methodInfoSubscribeToLsSrv6Sids);
  }

  methodInfoSubscribeToLsNodeEdges = new grpcWeb.MethodDescriptor(
    '/jagw.SubscriptionService/SubscribeToLsNodeEdges',
    grpcWeb.MethodType.SERVER_STREAMING,
    subscriptionservice_subscriptionservice_pb.TopologySubscription,
    subscriptionservice_subscriptionservice_pb.LsNodeEdgeEvent,
    (request: subscriptionservice_subscriptionservice_pb.TopologySubscription) => {
      return request.serializeBinary();
    },
    subscriptionservice_subscriptionservice_pb.LsNodeEdgeEvent.deserializeBinary
  );

  subscribeToLsNodeEdges(
    request: subscriptionservice_subscriptionservice_pb.TopologySubscription,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/jagw.SubscriptionService/SubscribeToLsNodeEdges',
      request,
      metadata || {},
      this.methodInfoSubscribeToLsNodeEdges);
  }

  methodInfoSubscribeToTelemetryData = new grpcWeb.MethodDescriptor(
    '/jagw.SubscriptionService/SubscribeToTelemetryData',
    grpcWeb.MethodType.SERVER_STREAMING,
    subscriptionservice_subscriptionservice_pb.TelemetrySubscription,
    subscriptionservice_subscriptionservice_pb.TelemetryEvent,
    (request: subscriptionservice_subscriptionservice_pb.TelemetrySubscription) => {
      return request.serializeBinary();
    },
    subscriptionservice_subscriptionservice_pb.TelemetryEvent.deserializeBinary
  );

  subscribeToTelemetryData(
    request: subscriptionservice_subscriptionservice_pb.TelemetrySubscription,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/jagw.SubscriptionService/SubscribeToTelemetryData',
      request,
      metadata || {},
      this.methodInfoSubscribeToTelemetryData);
  }

}

