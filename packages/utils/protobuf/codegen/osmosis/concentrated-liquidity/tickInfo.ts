import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
export interface TickInfo {
  liquidityGross: string;
  liquidityNet: string;
  spreadRewardGrowthOppositeDirectionOfLastTraversal: DecCoin[];
  /**
   * uptime_trackers is a container encapsulating the uptime trackers.
   * We use a container instead of a "repeated UptimeTracker" directly
   * because we need the ability to serialize and deserialize the
   * container easily for events when crossing a tick.
   */
  uptimeTrackers: UptimeTrackers | undefined;
}
export interface TickInfoProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo";
  value: Uint8Array;
}
export interface TickInfoAmino {
  liquidity_gross?: string;
  liquidity_net?: string;
  spread_reward_growth_opposite_direction_of_last_traversal?: DecCoinAmino[];
  /**
   * uptime_trackers is a container encapsulating the uptime trackers.
   * We use a container instead of a "repeated UptimeTracker" directly
   * because we need the ability to serialize and deserialize the
   * container easily for events when crossing a tick.
   */
  uptime_trackers?: UptimeTrackersAmino | undefined;
}
export interface TickInfoAminoMsg {
  type: "osmosis/concentratedliquidity/tick-info";
  value: TickInfoAmino;
}
export interface TickInfoSDKType {
  liquidity_gross: string;
  liquidity_net: string;
  spread_reward_growth_opposite_direction_of_last_traversal: DecCoinSDKType[];
  uptime_trackers: UptimeTrackersSDKType | undefined;
}
export interface UptimeTrackers {
  list: UptimeTracker[];
}
export interface UptimeTrackersProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTrackers";
  value: Uint8Array;
}
export interface UptimeTrackersAmino {
  list?: UptimeTrackerAmino[];
}
export interface UptimeTrackersAminoMsg {
  type: "osmosis/concentratedliquidity/uptime-trackers";
  value: UptimeTrackersAmino;
}
export interface UptimeTrackersSDKType {
  list: UptimeTrackerSDKType[];
}
export interface UptimeTracker {
  uptimeGrowthOutside: DecCoin[];
}
export interface UptimeTrackerProtoMsg {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker";
  value: Uint8Array;
}
export interface UptimeTrackerAmino {
  uptime_growth_outside?: DecCoinAmino[];
}
export interface UptimeTrackerAminoMsg {
  type: "osmosis/concentratedliquidity/uptime-tracker";
  value: UptimeTrackerAmino;
}
export interface UptimeTrackerSDKType {
  uptime_growth_outside: DecCoinSDKType[];
}
function createBaseTickInfo(): TickInfo {
  return {
    liquidityGross: "",
    liquidityNet: "",
    spreadRewardGrowthOppositeDirectionOfLastTraversal: [],
    uptimeTrackers: UptimeTrackers.fromPartial({})
  };
}
export const TickInfo = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo",
  encode(message: TickInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.liquidityGross !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.liquidityGross, 18).atomics);
    }
    if (message.liquidityNet !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.liquidityNet, 18).atomics);
    }
    for (const v of message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.uptimeTrackers !== undefined) {
      UptimeTrackers.encode(message.uptimeTrackers, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): TickInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityGross = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.liquidityNet = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.spreadRewardGrowthOppositeDirectionOfLastTraversal.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        case 4:
          message.uptimeTrackers = UptimeTrackers.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TickInfo>): TickInfo {
    const message = createBaseTickInfo();
    message.liquidityGross = object.liquidityGross ?? "";
    message.liquidityNet = object.liquidityNet ?? "";
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal = object.spreadRewardGrowthOppositeDirectionOfLastTraversal?.map(e => DecCoin.fromPartial(e)) || [];
    message.uptimeTrackers = object.uptimeTrackers !== undefined && object.uptimeTrackers !== null ? UptimeTrackers.fromPartial(object.uptimeTrackers) : undefined;
    return message;
  },
  fromAmino(object: TickInfoAmino): TickInfo {
    const message = createBaseTickInfo();
    if (object.liquidity_gross !== undefined && object.liquidity_gross !== null) {
      message.liquidityGross = object.liquidity_gross;
    }
    if (object.liquidity_net !== undefined && object.liquidity_net !== null) {
      message.liquidityNet = object.liquidity_net;
    }
    message.spreadRewardGrowthOppositeDirectionOfLastTraversal = object.spread_reward_growth_opposite_direction_of_last_traversal?.map(e => DecCoin.fromAmino(e)) || [];
    if (object.uptime_trackers !== undefined && object.uptime_trackers !== null) {
      message.uptimeTrackers = UptimeTrackers.fromAmino(object.uptime_trackers);
    }
    return message;
  },
  toAmino(message: TickInfo, useInterfaces: boolean = false): TickInfoAmino {
    const obj: any = {};
    obj.liquidity_gross = message.liquidityGross;
    obj.liquidity_net = message.liquidityNet;
    if (message.spreadRewardGrowthOppositeDirectionOfLastTraversal) {
      obj.spread_reward_growth_opposite_direction_of_last_traversal = message.spreadRewardGrowthOppositeDirectionOfLastTraversal.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.spread_reward_growth_opposite_direction_of_last_traversal = [];
    }
    obj.uptime_trackers = message.uptimeTrackers ? UptimeTrackers.toAmino(message.uptimeTrackers, useInterfaces) : undefined;
    return obj;
  },
  fromAminoMsg(object: TickInfoAminoMsg): TickInfo {
    return TickInfo.fromAmino(object.value);
  },
  toAminoMsg(message: TickInfo, useInterfaces: boolean = false): TickInfoAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/tick-info",
      value: TickInfo.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: TickInfoProtoMsg, useInterfaces: boolean = false): TickInfo {
    return TickInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: TickInfo): Uint8Array {
    return TickInfo.encode(message).finish();
  },
  toProtoMsg(message: TickInfo): TickInfoProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.TickInfo",
      value: TickInfo.encode(message).finish()
    };
  }
};
function createBaseUptimeTrackers(): UptimeTrackers {
  return {
    list: []
  };
}
export const UptimeTrackers = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTrackers",
  encode(message: UptimeTrackers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      UptimeTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): UptimeTrackers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUptimeTrackers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(UptimeTracker.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UptimeTrackers>): UptimeTrackers {
    const message = createBaseUptimeTrackers();
    message.list = object.list?.map(e => UptimeTracker.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UptimeTrackersAmino): UptimeTrackers {
    const message = createBaseUptimeTrackers();
    message.list = object.list?.map(e => UptimeTracker.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UptimeTrackers, useInterfaces: boolean = false): UptimeTrackersAmino {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? UptimeTracker.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.list = [];
    }
    return obj;
  },
  fromAminoMsg(object: UptimeTrackersAminoMsg): UptimeTrackers {
    return UptimeTrackers.fromAmino(object.value);
  },
  toAminoMsg(message: UptimeTrackers, useInterfaces: boolean = false): UptimeTrackersAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/uptime-trackers",
      value: UptimeTrackers.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: UptimeTrackersProtoMsg, useInterfaces: boolean = false): UptimeTrackers {
    return UptimeTrackers.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UptimeTrackers): Uint8Array {
    return UptimeTrackers.encode(message).finish();
  },
  toProtoMsg(message: UptimeTrackers): UptimeTrackersProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTrackers",
      value: UptimeTrackers.encode(message).finish()
    };
  }
};
function createBaseUptimeTracker(): UptimeTracker {
  return {
    uptimeGrowthOutside: []
  };
}
export const UptimeTracker = {
  typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker",
  encode(message: UptimeTracker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.uptimeGrowthOutside) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = false): UptimeTracker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUptimeTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uptimeGrowthOutside.push(DecCoin.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<UptimeTracker>): UptimeTracker {
    const message = createBaseUptimeTracker();
    message.uptimeGrowthOutside = object.uptimeGrowthOutside?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: UptimeTrackerAmino): UptimeTracker {
    const message = createBaseUptimeTracker();
    message.uptimeGrowthOutside = object.uptime_growth_outside?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UptimeTracker, useInterfaces: boolean = false): UptimeTrackerAmino {
    const obj: any = {};
    if (message.uptimeGrowthOutside) {
      obj.uptime_growth_outside = message.uptimeGrowthOutside.map(e => e ? DecCoin.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.uptime_growth_outside = [];
    }
    return obj;
  },
  fromAminoMsg(object: UptimeTrackerAminoMsg): UptimeTracker {
    return UptimeTracker.fromAmino(object.value);
  },
  toAminoMsg(message: UptimeTracker, useInterfaces: boolean = false): UptimeTrackerAminoMsg {
    return {
      type: "osmosis/concentratedliquidity/uptime-tracker",
      value: UptimeTracker.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: UptimeTrackerProtoMsg, useInterfaces: boolean = false): UptimeTracker {
    return UptimeTracker.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: UptimeTracker): Uint8Array {
    return UptimeTracker.encode(message).finish();
  },
  toProtoMsg(message: UptimeTracker): UptimeTrackerProtoMsg {
    return {
      typeUrl: "/osmosis.concentratedliquidity.v1beta1.UptimeTracker",
      value: UptimeTracker.encode(message).finish()
    };
  }
};