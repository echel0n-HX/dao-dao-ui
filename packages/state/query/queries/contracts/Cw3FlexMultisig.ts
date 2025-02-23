/**
 * This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { QueryClient, UseQueryOptions } from '@tanstack/react-query'

import {
  Config,
  ProposalListResponseForEmpty,
  ProposalResponseForEmpty,
  ThresholdResponse,
  VoteListResponse,
  VoteResponse,
  VoterListResponse,
  VoterResponse,
} from '@dao-dao/types/contracts/Cw3FlexMultisig'
import { getCosmWasmClientForChainId } from '@dao-dao/utils'

import { Cw3FlexMultisigQueryClient } from '../../../contracts/Cw3FlexMultisig'

export const cw3FlexMultisigQueryKeys = {
  contract: [
    {
      contract: 'cw3FlexMultisig',
    },
  ] as const,
  address: (chainId: string, contractAddress: string) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.contract[0],
        chainId,
        address: contractAddress,
      },
    ] as const,
  threshold: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'threshold',
        args,
      },
    ] as const,
  proposal: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'proposal',
        args,
      },
    ] as const,
  listProposals: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'list_proposals',
        args,
      },
    ] as const,
  reverseProposals: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'reverse_proposals',
        args,
      },
    ] as const,
  getVote: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'vote',
        args,
      },
    ] as const,
  listVotes: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'list_votes',
        args,
      },
    ] as const,
  voter: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'voter',
        args,
      },
    ] as const,
  listVoters: (
    chainId: string,
    contractAddress: string,
    args?: Record<string, unknown>
  ) =>
    [
      {
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'list_voters',
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
        ...cw3FlexMultisigQueryKeys.address(chainId, contractAddress)[0],
        method: 'config',
        args,
      },
    ] as const,
}
export const cw3FlexMultisigQueries = {
  threshold: <TData = ThresholdResponse>({
    chainId,
    contractAddress,
    options,
  }: Cw3FlexMultisigThresholdQuery<TData>): UseQueryOptions<
    ThresholdResponse,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.threshold(chainId, contractAddress),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).threshold(),
    ...options,
  }),
  proposal: <TData = ProposalResponseForEmpty>({
    chainId,
    contractAddress,
    args,
    options,
  }: Cw3FlexMultisigProposalQuery<TData>): UseQueryOptions<
    ProposalResponseForEmpty,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.proposal(chainId, contractAddress, args),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).proposal({
        proposalId: args.proposalId,
      }),
    ...options,
  }),
  listProposals: <TData = ProposalListResponseForEmpty>({
    chainId,
    contractAddress,
    args,
    options,
  }: Cw3FlexMultisigListProposalsQuery<TData>): UseQueryOptions<
    ProposalListResponseForEmpty,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.listProposals(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).listProposals({
        limit: args.limit,
        startAfter: args.startAfter,
      }),
    ...options,
  }),
  reverseProposals: <TData = ProposalListResponseForEmpty>({
    chainId,
    contractAddress,
    args,
    options,
  }: Cw3FlexMultisigReverseProposalsQuery<TData>): UseQueryOptions<
    ProposalListResponseForEmpty,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.reverseProposals(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).reverseProposals({
        limit: args.limit,
        startBefore: args.startBefore,
      }),
    ...options,
  }),
  getVote: <TData = VoteResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: Cw3FlexMultisigVoteQuery<TData>): UseQueryOptions<
    VoteResponse,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.getVote(chainId, contractAddress, args),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).getVote({
        proposalId: args.proposalId,
        voter: args.voter,
      }),
    ...options,
  }),
  listVotes: <TData = VoteListResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: Cw3FlexMultisigListVotesQuery<TData>): UseQueryOptions<
    VoteListResponse,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.listVotes(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).listVotes({
        limit: args.limit,
        proposalId: args.proposalId,
        startAfter: args.startAfter,
      }),
    ...options,
  }),
  voter: <TData = VoterResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: Cw3FlexMultisigVoterQuery<TData>): UseQueryOptions<
    VoterResponse,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.voter(chainId, contractAddress, args),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).voter({
        address: args.address,
      }),
    ...options,
  }),
  listVoters: <TData = VoterListResponse>({
    chainId,
    contractAddress,
    args,
    options,
  }: Cw3FlexMultisigListVotersQuery<TData>): UseQueryOptions<
    VoterListResponse,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.listVoters(
      chainId,
      contractAddress,
      args
    ),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).listVoters({
        limit: args.limit,
        startAfter: args.startAfter,
      }),
    ...options,
  }),
  listAllVoters: <TData = VoterListResponse>({
    queryClient,
    chainId,
    contractAddress,
    options,
  }: Cw3FlexMultisigListAllVotersQuery<TData>): UseQueryOptions<
    VoterListResponse,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.listVoters(chainId, contractAddress),
    queryFn: async () => {
      const voters: VoterListResponse['voters'] = []

      const limit = 30
      while (true) {
        const page = await queryClient.fetchQuery(
          cw3FlexMultisigQueries.listVoters({
            chainId,
            contractAddress,
            args: {
              limit,
              startAfter:
                voters.length > 0 ? voters[voters.length - 1].addr : undefined,
            },
          })
        )
        if (!page.voters.length) {
          break
        }

        voters.push(...page.voters)

        // If we have less than the limit of voters, we've exhausted them.
        if (page.voters.length < limit) {
          break
        }
      }

      return {
        voters,
      }
    },
    ...options,
  }),
  config: <TData = Config>({
    chainId,
    contractAddress,
    options,
  }: Cw3FlexMultisigConfigQuery<TData>): UseQueryOptions<
    Config,
    Error,
    TData
  > => ({
    queryKey: cw3FlexMultisigQueryKeys.config(chainId, contractAddress),
    queryFn: async () =>
      new Cw3FlexMultisigQueryClient(
        await getCosmWasmClientForChainId(chainId),
        contractAddress
      ).config(),
    ...options,
  }),
}
export interface Cw3FlexMultisigReactQuery<TResponse, TData = TResponse> {
  chainId: string
  contractAddress: string
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    'queryKey' | 'queryFn' | 'initialData'
  > & {
    initialData?: undefined
  }
}
export interface Cw3FlexMultisigConfigQuery<TData>
  extends Cw3FlexMultisigReactQuery<Config, TData> {}
export interface Cw3FlexMultisigListVotersQuery<TData>
  extends Cw3FlexMultisigReactQuery<VoterListResponse, TData> {
  args: {
    limit?: number
    startAfter?: string
  }
}
export interface Cw3FlexMultisigListAllVotersQuery<TData>
  extends Cw3FlexMultisigReactQuery<VoterListResponse, TData> {
  queryClient: QueryClient
}
export interface Cw3FlexMultisigVoterQuery<TData>
  extends Cw3FlexMultisigReactQuery<VoterResponse, TData> {
  args: {
    address: string
  }
}
export interface Cw3FlexMultisigListVotesQuery<TData>
  extends Cw3FlexMultisigReactQuery<VoteListResponse, TData> {
  args: {
    limit?: number
    proposalId: number
    startAfter?: string
  }
}
export interface Cw3FlexMultisigVoteQuery<TData>
  extends Cw3FlexMultisigReactQuery<VoteResponse, TData> {
  args: {
    proposalId: number
    voter: string
  }
}
export interface Cw3FlexMultisigReverseProposalsQuery<TData>
  extends Cw3FlexMultisigReactQuery<ProposalListResponseForEmpty, TData> {
  args: {
    limit?: number
    startBefore?: number
  }
}
export interface Cw3FlexMultisigListProposalsQuery<TData>
  extends Cw3FlexMultisigReactQuery<ProposalListResponseForEmpty, TData> {
  args: {
    limit?: number
    startAfter?: number
  }
}
export interface Cw3FlexMultisigProposalQuery<TData>
  extends Cw3FlexMultisigReactQuery<ProposalResponseForEmpty, TData> {
  args: {
    proposalId: number
  }
}
export interface Cw3FlexMultisigThresholdQuery<TData>
  extends Cw3FlexMultisigReactQuery<ThresholdResponse, TData> {}

export interface Cw3FlexMultisigAccountQuery<TData>
  extends Cw3FlexMultisigReactQuery<ThresholdResponse, TData> {}
