import * as jspb from 'google-protobuf'

import * as core_base_pb from '../core/base_pb';


export class LsNode extends jspb.Message {
  getKey(): string;
  setKey(value: string): LsNode;

  getId(): string;
  setId(value: string): LsNode;

  getRouterHash(): string;
  setRouterHash(value: string): LsNode;

  getDomainId(): number;
  setDomainId(value: number): LsNode;

  getRouterIp(): string;
  setRouterIp(value: string): LsNode;

  getPeerHash(): string;
  setPeerHash(value: string): LsNode;

  getPeerIp(): string;
  setPeerIp(value: string): LsNode;

  getPeerAsn(): number;
  setPeerAsn(value: number): LsNode;

  getTimestamp(): string;
  setTimestamp(value: string): LsNode;

  getIgpRouterId(): string;
  setIgpRouterId(value: string): LsNode;

  getAsn(): number;
  setAsn(value: number): LsNode;

  getMtidList(): Array<core_base_pb.MultiTopologyIdentifier>;
  setMtidList(value: Array<core_base_pb.MultiTopologyIdentifier>): LsNode;
  clearMtidList(): LsNode;
  addMtid(value?: core_base_pb.MultiTopologyIdentifier, index?: number): core_base_pb.MultiTopologyIdentifier;

  getAreaId(): string;
  setAreaId(value: string): LsNode;

  getProtocol(): string;
  setProtocol(value: string): LsNode;

  getProtocolId(): number;
  setProtocolId(value: number): LsNode;

  getName(): string;
  setName(value: string): LsNode;

  getIsPrepolicy(): boolean;
  setIsPrepolicy(value: boolean): LsNode;

  getIsAdjRibIn(): boolean;
  setIsAdjRibIn(value: boolean): LsNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNode.AsObject;
  static toObject(includeInstance: boolean, msg: LsNode): LsNode.AsObject;
  static serializeBinaryToWriter(message: LsNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNode;
  static deserializeBinaryFromReader(message: LsNode, reader: jspb.BinaryReader): LsNode;
}

export namespace LsNode {
  export type AsObject = {
    key: string,
    id: string,
    routerHash: string,
    domainId: number,
    routerIp: string,
    peerHash: string,
    peerIp: string,
    peerAsn: number,
    timestamp: string,
    igpRouterId: string,
    asn: number,
    mtidList: Array<core_base_pb.MultiTopologyIdentifier.AsObject>,
    areaId: string,
    protocol: string,
    protocolId: number,
    name: string,
    isPrepolicy: boolean,
    isAdjRibIn: boolean,
  }
}

export class LsLink extends jspb.Message {
  getKey(): string;
  setKey(value: string): LsLink;

  getId(): string;
  setId(value: string): LsLink;

  getRouterHash(): string;
  setRouterHash(value: string): LsLink;

  getRouterIp(): string;
  setRouterIp(value: string): LsLink;

  getDomainId(): number;
  setDomainId(value: number): LsLink;

  getPeerHash(): string;
  setPeerHash(value: string): LsLink;

  getPeerIp(): string;
  setPeerIp(value: string): LsLink;

  getPeerAsn(): number;
  setPeerAsn(value: number): LsLink;

  getTimestamp(): string;
  setTimestamp(value: string): LsLink;

  getIgpRouterId(): string;
  setIgpRouterId(value: string): LsLink;

  getProtocol(): string;
  setProtocol(value: string): LsLink;

  getAreaId(): string;
  setAreaId(value: string): LsLink;

  getNexthop(): string;
  setNexthop(value: string): LsLink;

  getMtid(): core_base_pb.MultiTopologyIdentifier | undefined;
  setMtid(value?: core_base_pb.MultiTopologyIdentifier): LsLink;
  hasMtid(): boolean;
  clearMtid(): LsLink;

  getLocalLinkId(): string;
  setLocalLinkId(value: string): LsLink;

  getRemoteLinkId(): string;
  setRemoteLinkId(value: string): LsLink;

  getLocalLinkIp(): string;
  setLocalLinkIp(value: string): LsLink;

  getRemoteLinkIp(): string;
  setRemoteLinkIp(value: string): LsLink;

  getIgpMetric(): number;
  setIgpMetric(value: number): LsLink;

  getRemoteNodeHash(): string;
  setRemoteNodeHash(value: string): LsLink;

  getLocalNodeHash(): string;
  setLocalNodeHash(value: string): LsLink;

  getRemoteIgpRouterId(): string;
  setRemoteIgpRouterId(value: string): LsLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsLink.AsObject;
  static toObject(includeInstance: boolean, msg: LsLink): LsLink.AsObject;
  static serializeBinaryToWriter(message: LsLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsLink;
  static deserializeBinaryFromReader(message: LsLink, reader: jspb.BinaryReader): LsLink;
}

export namespace LsLink {
  export type AsObject = {
    key: string,
    id: string,
    routerHash: string,
    routerIp: string,
    domainId: number,
    peerHash: string,
    peerIp: string,
    peerAsn: number,
    timestamp: string,
    igpRouterId: string,
    protocol: string,
    areaId: string,
    nexthop: string,
    mtid?: core_base_pb.MultiTopologyIdentifier.AsObject,
    localLinkId: string,
    remoteLinkId: string,
    localLinkIp: string,
    remoteLinkIp: string,
    igpMetric: number,
    remoteNodeHash: string,
    localNodeHash: string,
    remoteIgpRouterId: string,
  }
}

export class LsPrefix extends jspb.Message {
  getKey(): string;
  setKey(value: string): LsPrefix;

  getId(): string;
  setId(value: string): LsPrefix;

  getRouterHash(): string;
  setRouterHash(value: string): LsPrefix;

  getRouterIp(): string;
  setRouterIp(value: string): LsPrefix;

  getDomainId(): number;
  setDomainId(value: number): LsPrefix;

  getPeerHash(): string;
  setPeerHash(value: string): LsPrefix;

  getPeerIp(): string;
  setPeerIp(value: string): LsPrefix;

  getPeerAsn(): number;
  setPeerAsn(value: number): LsPrefix;

  getTimestamp(): string;
  setTimestamp(value: string): LsPrefix;

  getIgpRouterId(): string;
  setIgpRouterId(value: string): LsPrefix;

  getProtocol(): string;
  setProtocol(value: string): LsPrefix;

  getAreaId(): string;
  setAreaId(value: string): LsPrefix;

  getNexthop(): string;
  setNexthop(value: string): LsPrefix;

  getLocalNodeHash(): string;
  setLocalNodeHash(value: string): LsPrefix;

  getMtid(): core_base_pb.MultiTopologyIdentifier | undefined;
  setMtid(value?: core_base_pb.MultiTopologyIdentifier): LsPrefix;
  hasMtid(): boolean;
  clearMtid(): LsPrefix;

  getPrefix(): string;
  setPrefix(value: string): LsPrefix;

  getPrefixLen(): number;
  setPrefixLen(value: number): LsPrefix;

  getPrefixMetric(): number;
  setPrefixMetric(value: number): LsPrefix;

  getIsPrepolicy(): boolean;
  setIsPrepolicy(value: boolean): LsPrefix;

  getIsAdjRibIn(): boolean;
  setIsAdjRibIn(value: boolean): LsPrefix;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: LsPrefix): LsPrefix.AsObject;
  static serializeBinaryToWriter(message: LsPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsPrefix;
  static deserializeBinaryFromReader(message: LsPrefix, reader: jspb.BinaryReader): LsPrefix;
}

export namespace LsPrefix {
  export type AsObject = {
    key: string,
    id: string,
    routerHash: string,
    routerIp: string,
    domainId: number,
    peerHash: string,
    peerIp: string,
    peerAsn: number,
    timestamp: string,
    igpRouterId: string,
    protocol: string,
    areaId: string,
    nexthop: string,
    localNodeHash: string,
    mtid?: core_base_pb.MultiTopologyIdentifier.AsObject,
    prefix: string,
    prefixLen: number,
    prefixMetric: number,
    isPrepolicy: boolean,
    isAdjRibIn: boolean,
  }
}

export class LsSrv6Sid extends jspb.Message {
  getKey(): string;
  setKey(value: string): LsSrv6Sid;

  getId(): string;
  setId(value: string): LsSrv6Sid;

  getRouterHash(): string;
  setRouterHash(value: string): LsSrv6Sid;

  getRouterIp(): string;
  setRouterIp(value: string): LsSrv6Sid;

  getDomainId(): number;
  setDomainId(value: number): LsSrv6Sid;

  getPeerHash(): string;
  setPeerHash(value: string): LsSrv6Sid;

  getPeerIp(): string;
  setPeerIp(value: string): LsSrv6Sid;

  getPeerAsn(): number;
  setPeerAsn(value: number): LsSrv6Sid;

  getTimestamp(): string;
  setTimestamp(value: string): LsSrv6Sid;

  getIgpRouterId(): string;
  setIgpRouterId(value: string): LsSrv6Sid;

  getLocalNodeAsn(): number;
  setLocalNodeAsn(value: number): LsSrv6Sid;

  getProtocol(): string;
  setProtocol(value: string): LsSrv6Sid;

  getNexthop(): string;
  setNexthop(value: string): LsSrv6Sid;

  getLocalNodeHash(): string;
  setLocalNodeHash(value: string): LsSrv6Sid;

  getMtid(): core_base_pb.MultiTopologyIdentifier | undefined;
  setMtid(value?: core_base_pb.MultiTopologyIdentifier): LsSrv6Sid;
  hasMtid(): boolean;
  clearMtid(): LsSrv6Sid;

  getIgpFlags(): number;
  setIgpFlags(value: number): LsSrv6Sid;

  getIsPrepolicy(): boolean;
  setIsPrepolicy(value: boolean): LsSrv6Sid;

  getIsAdjRibIn(): boolean;
  setIsAdjRibIn(value: boolean): LsSrv6Sid;

  getSrv6Sid(): string;
  setSrv6Sid(value: string): LsSrv6Sid;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsSrv6Sid.AsObject;
  static toObject(includeInstance: boolean, msg: LsSrv6Sid): LsSrv6Sid.AsObject;
  static serializeBinaryToWriter(message: LsSrv6Sid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsSrv6Sid;
  static deserializeBinaryFromReader(message: LsSrv6Sid, reader: jspb.BinaryReader): LsSrv6Sid;
}

export namespace LsSrv6Sid {
  export type AsObject = {
    key: string,
    id: string,
    routerHash: string,
    routerIp: string,
    domainId: number,
    peerHash: string,
    peerIp: string,
    peerAsn: number,
    timestamp: string,
    igpRouterId: string,
    localNodeAsn: number,
    protocol: string,
    nexthop: string,
    localNodeHash: string,
    mtid?: core_base_pb.MultiTopologyIdentifier.AsObject,
    igpFlags: number,
    isPrepolicy: boolean,
    isAdjRibIn: boolean,
    srv6Sid: string,
  }
}

export class LsNodeEdge extends jspb.Message {
  getKey(): string;
  setKey(value: string): LsNodeEdge;

  getId(): string;
  setId(value: string): LsNodeEdge;

  getFrom(): string;
  setFrom(value: string): LsNodeEdge;

  getTo(): string;
  setTo(value: string): LsNodeEdge;

  getLink(): string;
  setLink(value: string): LsNodeEdge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNodeEdge.AsObject;
  static toObject(includeInstance: boolean, msg: LsNodeEdge): LsNodeEdge.AsObject;
  static serializeBinaryToWriter(message: LsNodeEdge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNodeEdge;
  static deserializeBinaryFromReader(message: LsNodeEdge, reader: jspb.BinaryReader): LsNodeEdge;
}

export namespace LsNodeEdge {
  export type AsObject = {
    key: string,
    id: string,
    from: string,
    to: string,
    link: string,
  }
}

export class LsNodeCoordinates extends jspb.Message {
  getKey(): string;
  setKey(value: string): LsNodeCoordinates;

  getId(): string;
  setId(value: string): LsNodeCoordinates;

  getLsNodeKey(): string;
  setLsNodeKey(value: string): LsNodeCoordinates;

  getLatitude(): number;
  setLatitude(value: number): LsNodeCoordinates;

  getLongitude(): number;
  setLongitude(value: number): LsNodeCoordinates;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNodeCoordinates.AsObject;
  static toObject(includeInstance: boolean, msg: LsNodeCoordinates): LsNodeCoordinates.AsObject;
  static serializeBinaryToWriter(message: LsNodeCoordinates, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNodeCoordinates;
  static deserializeBinaryFromReader(message: LsNodeCoordinates, reader: jspb.BinaryReader): LsNodeCoordinates;
}

export namespace LsNodeCoordinates {
  export type AsObject = {
    key: string,
    id: string,
    lsNodeKey: string,
    latitude: number,
    longitude: number,
  }
}

