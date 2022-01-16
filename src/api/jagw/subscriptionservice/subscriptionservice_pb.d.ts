import * as jspb from 'google-protobuf'

import * as core_topology_pb from '../core/topology_pb';
import * as core_base_pb from '../core/base_pb';


export class TopologySubscription extends jspb.Message {
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): TopologySubscription;
  clearKeysList(): TopologySubscription;
  addKeys(value: string, index?: number): TopologySubscription;

  getPropertyNamesList(): Array<string>;
  setPropertyNamesList(value: Array<string>): TopologySubscription;
  clearPropertyNamesList(): TopologySubscription;
  addPropertyNames(value: string, index?: number): TopologySubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopologySubscription.AsObject;
  static toObject(includeInstance: boolean, msg: TopologySubscription): TopologySubscription.AsObject;
  static serializeBinaryToWriter(message: TopologySubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopologySubscription;
  static deserializeBinaryFromReader(message: TopologySubscription, reader: jspb.BinaryReader): TopologySubscription;
}

export namespace TopologySubscription {
  export type AsObject = {
    keysList: Array<string>,
    propertyNamesList: Array<string>,
  }
}

export class TelemetrySubscription extends jspb.Message {
  getInterfaceIdsList(): Array<core_base_pb.InterfaceIdentifier>;
  setInterfaceIdsList(value: Array<core_base_pb.InterfaceIdentifier>): TelemetrySubscription;
  clearInterfaceIdsList(): TelemetrySubscription;
  addInterfaceIds(value?: core_base_pb.InterfaceIdentifier, index?: number): core_base_pb.InterfaceIdentifier;

  getPropertyNamesList(): Array<string>;
  setPropertyNamesList(value: Array<string>): TelemetrySubscription;
  clearPropertyNamesList(): TelemetrySubscription;
  addPropertyNames(value: string, index?: number): TelemetrySubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetrySubscription.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetrySubscription): TelemetrySubscription.AsObject;
  static serializeBinaryToWriter(message: TelemetrySubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetrySubscription;
  static deserializeBinaryFromReader(message: TelemetrySubscription, reader: jspb.BinaryReader): TelemetrySubscription;
}

export namespace TelemetrySubscription {
  export type AsObject = {
    interfaceIdsList: Array<core_base_pb.InterfaceIdentifier.AsObject>,
    propertyNamesList: Array<string>,
  }
}

export class LsNodeEvent extends jspb.Message {
  getAction(): string;
  setAction(value: string): LsNodeEvent;

  getKey(): string;
  setKey(value: string): LsNodeEvent;

  getLsNode(): core_topology_pb.LsNode | undefined;
  setLsNode(value?: core_topology_pb.LsNode): LsNodeEvent;
  hasLsNode(): boolean;
  clearLsNode(): LsNodeEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNodeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LsNodeEvent): LsNodeEvent.AsObject;
  static serializeBinaryToWriter(message: LsNodeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNodeEvent;
  static deserializeBinaryFromReader(message: LsNodeEvent, reader: jspb.BinaryReader): LsNodeEvent;
}

export namespace LsNodeEvent {
  export type AsObject = {
    action: string,
    key: string,
    lsNode?: core_topology_pb.LsNode.AsObject,
  }
}

export class LsLinkEvent extends jspb.Message {
  getAction(): string;
  setAction(value: string): LsLinkEvent;

  getKey(): string;
  setKey(value: string): LsLinkEvent;

  getLsLink(): core_topology_pb.LsLink | undefined;
  setLsLink(value?: core_topology_pb.LsLink): LsLinkEvent;
  hasLsLink(): boolean;
  clearLsLink(): LsLinkEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsLinkEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LsLinkEvent): LsLinkEvent.AsObject;
  static serializeBinaryToWriter(message: LsLinkEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsLinkEvent;
  static deserializeBinaryFromReader(message: LsLinkEvent, reader: jspb.BinaryReader): LsLinkEvent;
}

export namespace LsLinkEvent {
  export type AsObject = {
    action: string,
    key: string,
    lsLink?: core_topology_pb.LsLink.AsObject,
  }
}

export class LsPrefixEvent extends jspb.Message {
  getAction(): string;
  setAction(value: string): LsPrefixEvent;

  getKey(): string;
  setKey(value: string): LsPrefixEvent;

  getLsPrefix(): core_topology_pb.LsPrefix | undefined;
  setLsPrefix(value?: core_topology_pb.LsPrefix): LsPrefixEvent;
  hasLsPrefix(): boolean;
  clearLsPrefix(): LsPrefixEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsPrefixEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LsPrefixEvent): LsPrefixEvent.AsObject;
  static serializeBinaryToWriter(message: LsPrefixEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsPrefixEvent;
  static deserializeBinaryFromReader(message: LsPrefixEvent, reader: jspb.BinaryReader): LsPrefixEvent;
}

export namespace LsPrefixEvent {
  export type AsObject = {
    action: string,
    key: string,
    lsPrefix?: core_topology_pb.LsPrefix.AsObject,
  }
}

export class LsSrv6SidEvent extends jspb.Message {
  getAction(): string;
  setAction(value: string): LsSrv6SidEvent;

  getKey(): string;
  setKey(value: string): LsSrv6SidEvent;

  getLsSrv6Sid(): core_topology_pb.LsSrv6Sid | undefined;
  setLsSrv6Sid(value?: core_topology_pb.LsSrv6Sid): LsSrv6SidEvent;
  hasLsSrv6Sid(): boolean;
  clearLsSrv6Sid(): LsSrv6SidEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsSrv6SidEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LsSrv6SidEvent): LsSrv6SidEvent.AsObject;
  static serializeBinaryToWriter(message: LsSrv6SidEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsSrv6SidEvent;
  static deserializeBinaryFromReader(message: LsSrv6SidEvent, reader: jspb.BinaryReader): LsSrv6SidEvent;
}

export namespace LsSrv6SidEvent {
  export type AsObject = {
    action: string,
    key: string,
    lsSrv6Sid?: core_topology_pb.LsSrv6Sid.AsObject,
  }
}

export class LsNodeEdgeEvent extends jspb.Message {
  getAction(): string;
  setAction(value: string): LsNodeEdgeEvent;

  getKey(): string;
  setKey(value: string): LsNodeEdgeEvent;

  getLsNodeEdge(): core_topology_pb.LsNodeEdge | undefined;
  setLsNodeEdge(value?: core_topology_pb.LsNodeEdge): LsNodeEdgeEvent;
  hasLsNodeEdge(): boolean;
  clearLsNodeEdge(): LsNodeEdgeEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNodeEdgeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LsNodeEdgeEvent): LsNodeEdgeEvent.AsObject;
  static serializeBinaryToWriter(message: LsNodeEdgeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNodeEdgeEvent;
  static deserializeBinaryFromReader(message: LsNodeEdgeEvent, reader: jspb.BinaryReader): LsNodeEdgeEvent;
}

export namespace LsNodeEdgeEvent {
  export type AsObject = {
    action: string,
    key: string,
    lsNodeEdge?: core_topology_pb.LsNodeEdge.AsObject,
  }
}

export class TelemetryEvent extends jspb.Message {
  getInterfaceId(): core_base_pb.InterfaceIdentifier | undefined;
  setInterfaceId(value?: core_base_pb.InterfaceIdentifier): TelemetryEvent;
  hasInterfaceId(): boolean;
  clearInterfaceId(): TelemetryEvent;

  getIpv4Address(): string;
  setIpv4Address(value: string): TelemetryEvent;

  getDataRate(): number;
  setDataRate(value: number): TelemetryEvent;

  getPacketsSent(): number;
  setPacketsSent(value: number): TelemetryEvent;

  getPacketsReceived(): number;
  setPacketsReceived(value: number): TelemetryEvent;

  getState(): string;
  setState(value: string): TelemetryEvent;

  getLastStateTransitionTime(): number;
  setLastStateTransitionTime(value: number): TelemetryEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryEvent): TelemetryEvent.AsObject;
  static serializeBinaryToWriter(message: TelemetryEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryEvent;
  static deserializeBinaryFromReader(message: TelemetryEvent, reader: jspb.BinaryReader): TelemetryEvent;
}

export namespace TelemetryEvent {
  export type AsObject = {
    interfaceId?: core_base_pb.InterfaceIdentifier.AsObject,
    ipv4Address: string,
    dataRate: number,
    packetsSent: number,
    packetsReceived: number,
    state: string,
    lastStateTransitionTime: number,
  }
}

