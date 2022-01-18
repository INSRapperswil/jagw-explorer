import * as jspb from 'google-protobuf'

import * as core_topology_pb from '../core/topology_pb';
import * as core_enums_pb from '../core/enums_pb';


export class MeasurementsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasurementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MeasurementsRequest): MeasurementsRequest.AsObject;
  static serializeBinaryToWriter(message: MeasurementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasurementsRequest;
  static deserializeBinaryFromReader(message: MeasurementsRequest, reader: jspb.BinaryReader): MeasurementsRequest;
}

export namespace MeasurementsRequest {
  export type AsObject = {
  }
}

export class MeasurementsResponse extends jspb.Message {
  getMeasurementsList(): Array<Measurement>;
  setMeasurementsList(value: Array<Measurement>): MeasurementsResponse;
  clearMeasurementsList(): MeasurementsResponse;
  addMeasurements(value?: Measurement, index?: number): Measurement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasurementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MeasurementsResponse): MeasurementsResponse.AsObject;
  static serializeBinaryToWriter(message: MeasurementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasurementsResponse;
  static deserializeBinaryFromReader(message: MeasurementsResponse, reader: jspb.BinaryReader): MeasurementsResponse;
}

export namespace MeasurementsResponse {
  export type AsObject = {
    measurementsList: Array<Measurement.AsObject>,
  }
}

export class Measurement extends jspb.Message {
  getName(): string;
  setName(value: string): Measurement;

  getTimestampLatestMeasurement(): number;
  setTimestampLatestMeasurement(value: number): Measurement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Measurement.AsObject;
  static toObject(includeInstance: boolean, msg: Measurement): Measurement.AsObject;
  static serializeBinaryToWriter(message: Measurement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Measurement;
  static deserializeBinaryFromReader(message: Measurement, reader: jspb.BinaryReader): Measurement;
}

export namespace Measurement {
  export type AsObject = {
    name: string,
    timestampLatestMeasurement: number,
  }
}

export class MeasurementDetailsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): MeasurementDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasurementDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MeasurementDetailsRequest): MeasurementDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: MeasurementDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasurementDetailsRequest;
  static deserializeBinaryFromReader(message: MeasurementDetailsRequest, reader: jspb.BinaryReader): MeasurementDetailsRequest;
}

export namespace MeasurementDetailsRequest {
  export type AsObject = {
    name: string,
  }
}

export class MeasurementDetailsResponse extends jspb.Message {
  getTimestampLatestMeasurement(): number;
  setTimestampLatestMeasurement(value: number): MeasurementDetailsResponse;

  getColumnsList(): Array<MeasurementColumn>;
  setColumnsList(value: Array<MeasurementColumn>): MeasurementDetailsResponse;
  clearColumnsList(): MeasurementDetailsResponse;
  addColumns(value?: MeasurementColumn, index?: number): MeasurementColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasurementDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MeasurementDetailsResponse): MeasurementDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: MeasurementDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasurementDetailsResponse;
  static deserializeBinaryFromReader(message: MeasurementDetailsResponse, reader: jspb.BinaryReader): MeasurementDetailsResponse;
}

export namespace MeasurementDetailsResponse {
  export type AsObject = {
    timestampLatestMeasurement: number,
    columnsList: Array<MeasurementColumn.AsObject>,
  }
}

export class MeasurementColumn extends jspb.Message {
  getName(): string;
  setName(value: string): MeasurementColumn;

  getType(): string;
  setType(value: string): MeasurementColumn;

  getInfluxType(): string;
  setInfluxType(value: string): MeasurementColumn;

  getLastValueStringyfied(): string;
  setLastValueStringyfied(value: string): MeasurementColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasurementColumn.AsObject;
  static toObject(includeInstance: boolean, msg: MeasurementColumn): MeasurementColumn.AsObject;
  static serializeBinaryToWriter(message: MeasurementColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasurementColumn;
  static deserializeBinaryFromReader(message: MeasurementColumn, reader: jspb.BinaryReader): MeasurementColumn;
}

export namespace MeasurementColumn {
  export type AsObject = {
    name: string,
    type: string,
    influxType: string,
    lastValueStringyfied: string,
  }
}

export class TopologyRequest extends jspb.Message {
  getKeysList(): Array<string>;
  setKeysList(value: Array<string>): TopologyRequest;
  clearKeysList(): TopologyRequest;
  addKeys(value: string, index?: number): TopologyRequest;

  getPropertyNamesList(): Array<string>;
  setPropertyNamesList(value: Array<string>): TopologyRequest;
  clearPropertyNamesList(): TopologyRequest;
  addPropertyNames(value: string, index?: number): TopologyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopologyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopologyRequest): TopologyRequest.AsObject;
  static serializeBinaryToWriter(message: TopologyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopologyRequest;
  static deserializeBinaryFromReader(message: TopologyRequest, reader: jspb.BinaryReader): TopologyRequest;
}

export namespace TopologyRequest {
  export type AsObject = {
    keysList: Array<string>,
    propertyNamesList: Array<string>,
  }
}

export class LsNodeCoordinatesRequest extends jspb.Message {
  getLsNodeKeysList(): Array<string>;
  setLsNodeKeysList(value: Array<string>): LsNodeCoordinatesRequest;
  clearLsNodeKeysList(): LsNodeCoordinatesRequest;
  addLsNodeKeys(value: string, index?: number): LsNodeCoordinatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNodeCoordinatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LsNodeCoordinatesRequest): LsNodeCoordinatesRequest.AsObject;
  static serializeBinaryToWriter(message: LsNodeCoordinatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNodeCoordinatesRequest;
  static deserializeBinaryFromReader(message: LsNodeCoordinatesRequest, reader: jspb.BinaryReader): LsNodeCoordinatesRequest;
}

export namespace LsNodeCoordinatesRequest {
  export type AsObject = {
    lsNodeKeysList: Array<string>,
  }
}

export class TelemetryRequest extends jspb.Message {
  getSensorPath(): string;
  setSensorPath(value: string): TelemetryRequest;

  getPropertiesList(): Array<string>;
  setPropertiesList(value: Array<string>): TelemetryRequest;
  clearPropertiesList(): TelemetryRequest;
  addProperties(value: string, index?: number): TelemetryRequest;

  getStringFiltersList(): Array<StringFilter>;
  setStringFiltersList(value: Array<StringFilter>): TelemetryRequest;
  clearStringFiltersList(): TelemetryRequest;
  addStringFilters(value?: StringFilter, index?: number): StringFilter;

  getRangeFilter(): RangeFilter | undefined;
  setRangeFilter(value?: RangeFilter): TelemetryRequest;
  hasRangeFilter(): boolean;
  clearRangeFilter(): TelemetryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryRequest): TelemetryRequest.AsObject;
  static serializeBinaryToWriter(message: TelemetryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryRequest;
  static deserializeBinaryFromReader(message: TelemetryRequest, reader: jspb.BinaryReader): TelemetryRequest;
}

export namespace TelemetryRequest {
  export type AsObject = {
    sensorPath: string,
    propertiesList: Array<string>,
    stringFiltersList: Array<StringFilter.AsObject>,
    rangeFilter?: RangeFilter.AsObject,
  }
}

export class StringFilter extends jspb.Message {
  getProperty(): string;
  setProperty(value: string): StringFilter;

  getValue(): string;
  setValue(value: string): StringFilter;

  getOperator(): core_enums_pb.StringOperator;
  setOperator(value: core_enums_pb.StringOperator): StringFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringFilter.AsObject;
  static toObject(includeInstance: boolean, msg: StringFilter): StringFilter.AsObject;
  static serializeBinaryToWriter(message: StringFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringFilter;
  static deserializeBinaryFromReader(message: StringFilter, reader: jspb.BinaryReader): StringFilter;
}

export namespace StringFilter {
  export type AsObject = {
    property: string,
    value: string,
    operator: core_enums_pb.StringOperator,
  }
}

export class RangeFilter extends jspb.Message {
  getEarliestTimestamp(): number;
  setEarliestTimestamp(value: number): RangeFilter;

  getLatestTimestamp(): number;
  setLatestTimestamp(value: number): RangeFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeFilter.AsObject;
  static toObject(includeInstance: boolean, msg: RangeFilter): RangeFilter.AsObject;
  static serializeBinaryToWriter(message: RangeFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeFilter;
  static deserializeBinaryFromReader(message: RangeFilter, reader: jspb.BinaryReader): RangeFilter;
}

export namespace RangeFilter {
  export type AsObject = {
    earliestTimestamp: number,
    latestTimestamp: number,
  }
}

export class LsNodeResponse extends jspb.Message {
  getLsNodesList(): Array<core_topology_pb.LsNode>;
  setLsNodesList(value: Array<core_topology_pb.LsNode>): LsNodeResponse;
  clearLsNodesList(): LsNodeResponse;
  addLsNodes(value?: core_topology_pb.LsNode, index?: number): core_topology_pb.LsNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LsNodeResponse): LsNodeResponse.AsObject;
  static serializeBinaryToWriter(message: LsNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNodeResponse;
  static deserializeBinaryFromReader(message: LsNodeResponse, reader: jspb.BinaryReader): LsNodeResponse;
}

export namespace LsNodeResponse {
  export type AsObject = {
    lsNodesList: Array<core_topology_pb.LsNode.AsObject>,
  }
}

export class LsLinkResponse extends jspb.Message {
  getLsLinksList(): Array<core_topology_pb.LsLink>;
  setLsLinksList(value: Array<core_topology_pb.LsLink>): LsLinkResponse;
  clearLsLinksList(): LsLinkResponse;
  addLsLinks(value?: core_topology_pb.LsLink, index?: number): core_topology_pb.LsLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LsLinkResponse): LsLinkResponse.AsObject;
  static serializeBinaryToWriter(message: LsLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsLinkResponse;
  static deserializeBinaryFromReader(message: LsLinkResponse, reader: jspb.BinaryReader): LsLinkResponse;
}

export namespace LsLinkResponse {
  export type AsObject = {
    lsLinksList: Array<core_topology_pb.LsLink.AsObject>,
  }
}

export class LsPrefixResponse extends jspb.Message {
  getLsPrefixesList(): Array<core_topology_pb.LsPrefix>;
  setLsPrefixesList(value: Array<core_topology_pb.LsPrefix>): LsPrefixResponse;
  clearLsPrefixesList(): LsPrefixResponse;
  addLsPrefixes(value?: core_topology_pb.LsPrefix, index?: number): core_topology_pb.LsPrefix;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsPrefixResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LsPrefixResponse): LsPrefixResponse.AsObject;
  static serializeBinaryToWriter(message: LsPrefixResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsPrefixResponse;
  static deserializeBinaryFromReader(message: LsPrefixResponse, reader: jspb.BinaryReader): LsPrefixResponse;
}

export namespace LsPrefixResponse {
  export type AsObject = {
    lsPrefixesList: Array<core_topology_pb.LsPrefix.AsObject>,
  }
}

export class LsSrv6SidResponse extends jspb.Message {
  getLsSrv6SidsList(): Array<core_topology_pb.LsSrv6Sid>;
  setLsSrv6SidsList(value: Array<core_topology_pb.LsSrv6Sid>): LsSrv6SidResponse;
  clearLsSrv6SidsList(): LsSrv6SidResponse;
  addLsSrv6Sids(value?: core_topology_pb.LsSrv6Sid, index?: number): core_topology_pb.LsSrv6Sid;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsSrv6SidResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LsSrv6SidResponse): LsSrv6SidResponse.AsObject;
  static serializeBinaryToWriter(message: LsSrv6SidResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsSrv6SidResponse;
  static deserializeBinaryFromReader(message: LsSrv6SidResponse, reader: jspb.BinaryReader): LsSrv6SidResponse;
}

export namespace LsSrv6SidResponse {
  export type AsObject = {
    lsSrv6SidsList: Array<core_topology_pb.LsSrv6Sid.AsObject>,
  }
}

export class LsNodeEdgeResponse extends jspb.Message {
  getLsNodeEdgesList(): Array<core_topology_pb.LsNodeEdge>;
  setLsNodeEdgesList(value: Array<core_topology_pb.LsNodeEdge>): LsNodeEdgeResponse;
  clearLsNodeEdgesList(): LsNodeEdgeResponse;
  addLsNodeEdges(value?: core_topology_pb.LsNodeEdge, index?: number): core_topology_pb.LsNodeEdge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNodeEdgeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LsNodeEdgeResponse): LsNodeEdgeResponse.AsObject;
  static serializeBinaryToWriter(message: LsNodeEdgeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNodeEdgeResponse;
  static deserializeBinaryFromReader(message: LsNodeEdgeResponse, reader: jspb.BinaryReader): LsNodeEdgeResponse;
}

export namespace LsNodeEdgeResponse {
  export type AsObject = {
    lsNodeEdgesList: Array<core_topology_pb.LsNodeEdge.AsObject>,
  }
}

export class LsNodeCoordinatesResponse extends jspb.Message {
  getCoordinatesList(): Array<core_topology_pb.LsNodeCoordinates>;
  setCoordinatesList(value: Array<core_topology_pb.LsNodeCoordinates>): LsNodeCoordinatesResponse;
  clearCoordinatesList(): LsNodeCoordinatesResponse;
  addCoordinates(value?: core_topology_pb.LsNodeCoordinates, index?: number): core_topology_pb.LsNodeCoordinates;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LsNodeCoordinatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LsNodeCoordinatesResponse): LsNodeCoordinatesResponse.AsObject;
  static serializeBinaryToWriter(message: LsNodeCoordinatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LsNodeCoordinatesResponse;
  static deserializeBinaryFromReader(message: LsNodeCoordinatesResponse, reader: jspb.BinaryReader): LsNodeCoordinatesResponse;
}

export namespace LsNodeCoordinatesResponse {
  export type AsObject = {
    coordinatesList: Array<core_topology_pb.LsNodeCoordinates.AsObject>,
  }
}

export class TelemetryResponse extends jspb.Message {
  getTelemetryDataList(): Array<string>;
  setTelemetryDataList(value: Array<string>): TelemetryResponse;
  clearTelemetryDataList(): TelemetryResponse;
  addTelemetryData(value: string, index?: number): TelemetryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelemetryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TelemetryResponse): TelemetryResponse.AsObject;
  static serializeBinaryToWriter(message: TelemetryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelemetryResponse;
  static deserializeBinaryFromReader(message: TelemetryResponse, reader: jspb.BinaryReader): TelemetryResponse;
}

export namespace TelemetryResponse {
  export type AsObject = {
    telemetryDataList: Array<string>,
  }
}

