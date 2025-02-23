/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { QueryClient, UseQueryOptions } from '@tanstack/react-query'

import {
  NullableUint64,
  OwnershipForAddr,
  StakeTrackerQuery,
  Timestamp,
  Uint128,
  Vest,
} from '@dao-dao/types/contracts/CwVesting'
import { getCosmWasmClientForChainId } from '@dao-dao/utils'

import { CwVestingQueryClient } from '../../../contracts/CwVesting'
import { indexerQueries } from '../indexer'

export const cwVestingQueryKeys = {
  contract: [
    {
      contract: 'cwVesting',
    },
  ] as const,
  address: (chainId: string, contractAddress: string) =>
    [
      {
        ...cwVestingQueryKeys.contract[0],
        chainId,
        address: contractAddress,
      },
    ] as const,
  ownership: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cwVestingQueryKeys.address(chainId, contractAddress)[0],
        method: 'ownership',
        args,
      },
    ] as const,
  info: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cwVestingQueryKeys.address(chainId, contractAddress)[0],
        method: 'info',
        args,
      },
    ] as const,
  distributable: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cwVestingQueryKeys.address(chainId, contractAddress)[0],
        method: 'distributable',
        args,
      },
    ] as const,
  vested: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cwVestingQueryKeys.address(chainId, contractAddress)[0],
        method: 'vested',
        args,
      },
    ] as const,
  totalToVest: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cwVestingQueryKeys.address(chainId, contractAddress)[0],
        method: 'total_to_vest',
        args,
      },
    ] as const,
  vestDuration: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cwVestingQueryKeys.address(chainId, contractAddress)[0],
        method: 'vest_duration',
        args,
      },
    ] as const,
  stake: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cwVestingQueryKeys.address(chainId, contractAddress)[0],
        method: 'stake',
        args,
      },
    ] as const,
}
export const cwVestingQueries = {
  ownership: <TData = OwnershipForAddr>(
    queryClient: QueryClient,
    { chainId, contractAddress, options }: CwVestingOwnershipQuery<TData>
  ): UseQueryOptions<OwnershipForAddr, Error, TData> => ({
    queryKey: cwVestingQueryKeys.ownership(chainId, contractAddress),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'cwVesting/ownership',
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new CwVestingQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).ownership()
    },
    ...options,
  }),
  info: <TData = Vest>(
    queryClient: QueryClient,
    { chainId, contractAddress, options }: CwVestingInfoQuery<TData>
  ): UseQueryOptions<Vest, Error, TData> => ({
    queryKey: cwVestingQueryKeys.info(chainId, contractAddress),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'cwVesting/info',
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new CwVestingQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).info()
    },
    ...options,
  }),
  distributable: <TData = Uint128>({
    chainId,
    contractAddress,
    args,
    options,
  }: CwVestingDistributableQuery<TData>): UseQueryOptions<
    Uint128,
    Error,
    TData
  > => ({
    queryKey: cwVestingQueryKeys.distributable(chainId, contractAddress, args),
    queryFn: async () => {
      return new CwVestingQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).distributable({
        t: args.t,
      })
    },
    ...options,
  }),
  vested: <TData = Uint128>(
    queryClient: QueryClient,
    { chainId, contractAddress, args, options }: CwVestingVestedQuery<TData>
  ): UseQueryOptions<Uint128, Error, TData> => ({
    queryKey: cwVestingQueryKeys.vested(chainId, contractAddress, args),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'cwVesting/vested',
            args,
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new CwVestingQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).vested({
        t: args.t,
      })
    },
    ...options,
  }),
  totalToVest: <TData = Uint128>(
    queryClient: QueryClient,
    { chainId, contractAddress, options }: CwVestingTotalToVestQuery<TData>
  ): UseQueryOptions<Uint128, Error, TData> => ({
    queryKey: cwVestingQueryKeys.totalToVest(chainId, contractAddress),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'cwVesting/totalToVest',
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new CwVestingQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).totalToVest()
    },
    ...options,
  }),
  vestDuration: <TData = NullableUint64>(
    queryClient: QueryClient,
    { chainId, contractAddress, options }: CwVestingVestDurationQuery<TData>
  ): UseQueryOptions<NullableUint64, Error, TData> => ({
    queryKey: cwVestingQueryKeys.vestDuration(chainId, contractAddress),
    queryFn: async () => {
      try {
        // Attempt to fetch data from the indexer.
        return await queryClient.fetchQuery(
          indexerQueries.queryContract(queryClient, {
            chainId,
            contractAddress,
            formula: 'cwVesting/vestDuration',
          })
        )
      } catch (error) {
        console.error(error)
      }

      // If indexer query fails, fallback to contract query.
      return new CwVestingQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).vestDuration()
    },
    ...options,
  }),
  stake: <TData = Uint128>({
    chainId,
    contractAddress,
    args,
    options,
  }: CwVestingStakeQuery<TData>): UseQueryOptions<Uint128, Error, TData> => ({
    queryKey: cwVestingQueryKeys.stake(chainId, contractAddress, args),
    queryFn: async () => {
      return new CwVestingQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).stake(args)
    },
    ...options,
  }),
}
export interface CwVestingReactQuery<TResponse, TData = TResponse> {
  chainId: string
  contractAddress: string
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    'queryKey' | 'queryFn' | 'initialData'
  > & {
    initialData?: undefined
  }
}
export interface CwVestingStakeQuery<TData>
  extends CwVestingReactQuery<Uint128, TData> {
  args: StakeTrackerQuery
}
export interface CwVestingVestDurationQuery<TData>
  extends CwVestingReactQuery<NullableUint64, TData> {}
export interface CwVestingTotalToVestQuery<TData>
  extends CwVestingReactQuery<Uint128, TData> {}
export interface CwVestingVestedQuery<TData>
  extends CwVestingReactQuery<Uint128, TData> {
  args: {
    t?: Timestamp
  }
}
export interface CwVestingDistributableQuery<TData>
  extends CwVestingReactQuery<Uint128, TData> {
  args: {
    t?: Timestamp
  }
}
export interface CwVestingInfoQuery<TData>
  extends CwVestingReactQuery<Vest, TData> {}
export interface CwVestingOwnershipQuery<TData>
  extends CwVestingReactQuery<OwnershipForAddr, TData> {}
