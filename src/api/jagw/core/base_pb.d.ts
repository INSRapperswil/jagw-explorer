import * as jspb from 'google-protobuf'



export class MultiTopologyIdentifier extends jspb.Message {
  getOFlag(): boolean;
  setOFlag(value: boolean): MultiTopologyIdentifier;

  getAFlag(): boolean;
  setAFlag(value: boolean): MultiTopologyIdentifier;

  getMtid(): number;
  setMtid(value: number): MultiTopologyIdentifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiTopologyIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: MultiTopologyIdentifier): MultiTopologyIdentifier.AsObject;
  static serializeBinaryToWriter(message: MultiTopologyIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiTopologyIdentifier;
  static deserializeBinaryFromReader(message: MultiTopologyIdentifier, reader: jspb.BinaryReader): MultiTopologyIdentifier;
}

export namespace MultiTopologyIdentifier {
  export type AsObject = {
    oFlag: boolean,
    aFlag: boolean,
    mtid: number,
  }
}

export class InterfaceIdentifier extends jspb.Message {
  getHostname(): string;
  setHostname(value: string): InterfaceIdentifier;

  getLinkId(): number;
  setLinkId(value: number): InterfaceIdentifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterfaceIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: InterfaceIdentifier): InterfaceIdentifier.AsObject;
  static serializeBinaryToWriter(message: InterfaceIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterfaceIdentifier;
  static deserializeBinaryFromReader(message: InterfaceIdentifier, reader: jspb.BinaryReader): InterfaceIdentifier;
}

export namespace InterfaceIdentifier {
  export type AsObject = {
    hostname: string,
    linkId: number,
  }
}

