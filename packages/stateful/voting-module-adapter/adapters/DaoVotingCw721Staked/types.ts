import { HugeDecimal } from '@dao-dao/math'
import {
  ContractVersion,
  Duration,
  GenericToken,
  LazyNftCardInfo,
  LoadingData,
  LoadingDataWithError,
} from '@dao-dao/types'
import { NftClaim } from '@dao-dao/types/contracts/DaoVotingCw721Staked'

export interface UseStakingInfoOptions {
  fetchClaims?: boolean
  fetchTotalStakedValue?: boolean
  fetchWalletStakedValue?: boolean
  fetchWalletUnstakedNfts?: boolean
}

export interface UseStakingInfoResponse {
  stakingContractVersion: ContractVersion
  stakingContractAddress: string
  unstakingDuration?: Duration
  refreshTotals: () => void
  /// Optional
  // Claims
  blockHeight?: number
  refreshClaims?: () => void
  claims?: NftClaim[]
  claimsPending?: NftClaim[]
  claimsAvailable?: NftClaim[]
  sumClaimsAvailable?: HugeDecimal
  // Total staked value
  loadingTotalStakedValue?: LoadingData<HugeDecimal>
  // Wallet staked value
  loadingWalletStakedValue?: LoadingData<HugeDecimal>
  loadingWalletStakedNfts?: LoadingDataWithError<LazyNftCardInfo[]>
  loadingWalletUnstakedNfts?: LoadingDataWithError<LazyNftCardInfo[]>
}

export interface UseGovernanceCollectionInfoOptions {
  fetchWalletBalance?: boolean
  fetchTreasuryBalance?: boolean
  // fetchUsdcPrice?: boolean
}

export interface UseGovernanceCollectionInfoResponse {
  stakingContractAddress: string
  collectionAddress: string
  collectionInfo: {
    name: string
    symbol: string
    totalSupply: HugeDecimal
  }
  token: GenericToken
  /// Optional
  // Wallet balance
  loadingWalletBalance?: LoadingData<HugeDecimal>
  // Treasury balance
  loadingTreasuryBalance?: LoadingData<HugeDecimal>
  // Price
  // loadingPrice?: LoadingData<GenericTokenWithUsdPrice>
}
