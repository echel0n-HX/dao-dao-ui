//@ts-nocheck
import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisState {
  basedenom: string;
  feetokens: FeeToken[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.txfees.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateAmino {
  basedenom?: string;
  feetokens?: FeeTokenAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/txfees/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the txfees module's genesis state. */
export interface GenesisStateSDKType {
  basedenom: string;
  feetokens: FeeTokenSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    basedenom: "",
    feetokens: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basedenom !== "") {
      writer.uint32(10).string(message.basedenom);
    }
    for (const v of message.feetokens) {
      FeeToken.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basedenom = reader.string();
          break;
        case 2:
          message.feetokens.push(FeeToken.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.basedenom = object.basedenom ?? "";
    message.feetokens = object.feetokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.basedenom !== undefined && object.basedenom !== null) {
      message.basedenom = object.basedenom;
    }
    message.feetokens = object.feetokens?.map(e => FeeToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState, useInterfaces: boolean = false): GenesisStateAmino {
    const obj: any = {};
    obj.basedenom = message.basedenom;
    if (message.feetokens) {
      obj.feetokens = message.feetokens.map(e => e ? FeeToken.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.feetokens = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState, useInterfaces: boolean = false): GenesisStateAminoMsg {
    return {
      type: "osmosis/txfees/genesis-state",
      value: GenesisState.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg, useInterfaces: boolean = false): GenesisState {
    return GenesisState.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};