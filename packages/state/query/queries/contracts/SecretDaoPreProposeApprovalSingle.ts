/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions } from '@tanstack/react-query'

import {
  AnyContractInfo,
  Binary,
  Config,
  DepositInfoResponse,
  HooksResponse,
  QueryExt,
} from '@dao-dao/types/contracts/SecretDaoPreProposeApprovalSingle'
import { getCosmWasmClientForChainId } from '@dao-dao/utils'

import { SecretDaoPreProposeApprovalSingleQueryClient } from '../../../contracts/SecretDaoPreProposeApprovalSingle'
import { contractQueries } from '../contract'

export const secretDaoPreProposeApprovalSingleQueryKeys = {
  contract: [
    {
      contract: 'secretDaoPreProposeApprovalSingle',
    },
  ] as const,
  address: (chainId: string, contractAddress: string) =>
    [
      {
        ...secretDaoPreProposeApprovalSingleQueryKeys.contract[0],
        chainId,
        address: contractAddress,
      },
    ] as const,
  proposalModule: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoPreProposeApprovalSingleQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'proposal_module',
        args,
      },
    ] as const,
  dao: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoPreProposeApprovalSingleQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'dao',
        args,
      },
    ] as const,
  config: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoPreProposeApprovalSingleQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'config',
        args,
      },
    ] as const,
  depositInfo: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoPreProposeApprovalSingleQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'deposit_info',
        args,
      },
    ] as const,
  proposalSubmittedHooks: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoPreProposeApprovalSingleQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'proposal_submitted_hooks',
        args,
      },
    ] as const,
  queryExtension: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...secretDaoPreProposeApprovalSingleQueryKeys.address(
          chainId,
          contractAddress
        )[0],
        method: 'query_extension',
        args,
      },
    ] as const,
}
export const secretDaoPreProposeApprovalSingleQueries = {
  proposalModule: <TData = AnyContractInfo>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoPreProposeApprovalSingleProposalModuleQuery<TData>): UseQueryOptions<
    AnyContractInfo,
    Error,
    TData
  > => ({
    queryKey: secretDaoPreProposeApprovalSingleQueryKeys.proposalModule(
      chainId,
      contractAddress
    ),
    queryFn: async () =>
      new SecretDaoPreProposeApprovalSingleQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).proposalModule(),
    ...options,
  }),
  dao: <TData = AnyContractInfo>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoPreProposeApprovalSingleDaoQuery<TData>): UseQueryOptions<
    AnyContractInfo,
    Error,
    TData
  > => ({
    queryKey: secretDaoPreProposeApprovalSingleQueryKeys.dao(
      chainId,
      contractAddress
    ),
    queryFn: async () =>
      new SecretDaoPreProposeApprovalSingleQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).dao(),
    ...options,
  }),
  config: <TData = Config>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoPreProposeApprovalSingleConfigQuery<TData>): UseQueryOptions<
    Config,
    Error,
    TData
  > => ({
    queryKey: secretDaoPreProposeApprovalSingleQueryKeys.config(
      chainId,
      contractAddress
    ),
    queryFn: async () =>
      new SecretDaoPreProposeApprovalSingleQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).config(),
    ...options,
  }),
  depositInfo: <TData = DepositInfoResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: SecretDaoPreProposeApprovalSingleDepositInfoQuery<TData>): UseQueryOptions<
    DepositInfoResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoPreProposeApprovalSingleQueryKeys.depositInfo(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () =>
      new SecretDaoPreProposeApprovalSingleQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).depositInfo({
        proposalId: args.proposalId,
      }),
    ...options,
  }),
  proposalSubmittedHooks: <TData = HooksResponse>({
    chainId,
    contractAddress,
    options,
  }: SecretDaoPreProposeApprovalSingleProposalSubmittedHooksQuery<TData>): UseQueryOptions<
    HooksResponse,
    Error,
    TData
  > => ({
    queryKey: secretDaoPreProposeApprovalSingleQueryKeys.proposalSubmittedHooks(
      chainId,
      contractAddress
    ),
    queryFn: async () =>
      new SecretDaoPreProposeApprovalSingleQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).proposalSubmittedHooks(),
    ...options,
  }),
  queryExtension: <TData = Binary>({
    chainId,
    contractAddress,
    args,
    options,
  }: SecretDaoPreProposeApprovalSingleQueryExtensionQuery<TData>): UseQueryOptions<
    Binary,
    Error,
    TData
  > => ({
    queryKey: secretDaoPreProposeApprovalSingleQueryKeys.queryExtension(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () =>
      new SecretDaoPreProposeApprovalSingleQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).queryExtension({
        msg: args.msg,
      }),
    ...options,
  }),
  info: contractQueries.info,
}
export interface SecretDaoPreProposeApprovalSingleReactQuery<
  TResponse,
  TData = TResponse,
> {
  chainId: string
  contractAddress: string
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    'queryKey' | 'queryFn' | 'initialData'
  > & {
    initialData?: undefined
  }
}
export interface SecretDaoPreProposeApprovalSingleQueryExtensionQuery<TData>
  extends SecretDaoPreProposeApprovalSingleReactQuery<Binary, TData> {
  args: {
    msg: QueryExt
  }
}
export interface SecretDaoPreProposeApprovalSingleProposalSubmittedHooksQuery<
  TData,
> extends SecretDaoPreProposeApprovalSingleReactQuery<HooksResponse, TData> {}
export interface SecretDaoPreProposeApprovalSingleDepositInfoQuery<TData>
  extends SecretDaoPreProposeApprovalSingleReactQuery<
    DepositInfoResponse,
    TData
  > {
  args: {
    proposalId: number
  }
}
export interface SecretDaoPreProposeApprovalSingleConfigQuery<TData>
  extends SecretDaoPreProposeApprovalSingleReactQuery<Config, TData> {}
export interface SecretDaoPreProposeApprovalSingleDaoQuery<TData>
  extends SecretDaoPreProposeApprovalSingleReactQuery<AnyContractInfo, TData> {}
export interface SecretDaoPreProposeApprovalSingleProposalModuleQuery<TData>
  extends SecretDaoPreProposeApprovalSingleReactQuery<AnyContractInfo, TData> {}
