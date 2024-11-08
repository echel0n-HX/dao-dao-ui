import { ChainId } from '@dao-dao/types'

type DeploySet = {
  name: string
  /**
   * The type of set to deploy.
   *
   * - `once`: Only deploy the set once. If the contracts already exist, do not
   *   deploy new versions.
   * - `always`: Always deploy new versions of the contracts.
   * - `manual`: Do not deploy automatically, but store for manual deployment.
   */
  type: 'once' | 'always' | 'manual'
  /**
   * Contracts to deploy.
   */
  contracts: string[]
  /**
   * If defined, only deploy the set for the given chain IDs.
   */
  chainIds?: string[]
  /**
   * If defined, skip the set for the given chain IDs.
   */
  skipChainIds?: string[]
}

/**
 * List of contracts that should deploy on each chain.
 */
export const deploySets: DeploySet[] = [
  // the polytone contracts to deploy manually
  {
    name: 'polytone',
    type: 'manual',
    contracts: [
      'polytone_listener',
      'polytone_note',
      'polytone_proxy',
      'polytone_voice',
    ],
  },

  // the contracts to deploy on all chains once
  {
    name: 'external',
    type: 'once',
    contracts: ['cw1_whitelist', 'cw4_group'],
  },

  // the contracts to deploy on all chains every time
  {
    name: 'core DAO stuff',
    type: 'always',
    contracts: [
      'cw_admin_factory',
      'cw_payroll_factory',
      'cw_token_swap',
      'dao_dao_core',
      'dao_pre_propose_approval_single',
      'dao_pre_propose_approver',
      'dao_pre_propose_multiple',
      'dao_pre_propose_single',
      'dao_proposal_multiple',
      'dao_proposal_single',
      'dao_rewards_distributor',
      'dao_voting_cw4',
    ],
  },

  // cw-vesting with staking, which all chains but Neutron support
  {
    name: 'cw-vesting with staking',
    type: 'always',
    contracts: ['cw_vesting-staking'],
    skipChainIds: [ChainId.NeutronMainnet, ChainId.NeutronTestnet],
  },

  // cw-vesting without staking
  {
    name: 'cw-vesting without staking',
    type: 'always',
    contracts: ['cw_vesting-no_staking'],
    chainIds: [ChainId.NeutronMainnet, ChainId.NeutronTestnet],
  },

  // cw20 contract to deploy once
  {
    name: 'cw20 base',
    type: 'once',
    contracts: ['cw20_base'],
    chainIds: [
      ChainId.JunoMainnet,
      ChainId.JunoTestnet,

      'layer',

      ChainId.OraichainMainnet,

      ChainId.TerraMainnet,
      ChainId.TerraClassicMainnet,
    ],
  },

  // cw20 contracts to deploy every time
  {
    name: 'cw20 DAO stuff',
    type: 'always',
    contracts: ['cw20_stake', 'dao_voting_cw20_staked'],
    chainIds: [
      ChainId.JunoMainnet,
      ChainId.JunoTestnet,

      'layer',

      ChainId.OraichainMainnet,

      ChainId.TerraMainnet,
      ChainId.TerraClassicMainnet,
    ],
  },

  // cw721 contract to deploy once
  {
    name: 'cw721 base',
    type: 'once',
    contracts: ['cw721_base'],
    chainIds: [
      ChainId.JunoMainnet,
      ChainId.JunoTestnet,

      ChainId.KujiraMainnet,
      ChainId.KujiraTestnet,

      'layer',

      ChainId.MigalooMainnet,
      ChainId.MigalooTestnet,

      ChainId.NeutronMainnet,
      ChainId.NeutronTestnet,

      ChainId.OraichainMainnet,

      ChainId.OsmosisMainnet,
      ChainId.OsmosisTestnet,

      ChainId.TerraMainnet,
      ChainId.TerraClassicMainnet,
    ],
  },

  // cw721 contracts to deploy every time
  {
    name: 'cw721 DAO stuff',
    type: 'always',
    contracts: ['dao_voting_cw721_staked'],
    chainIds: [
      ChainId.BitsongMainnet,
      ChainId.BitsongTestnet,

      ChainId.JunoMainnet,
      ChainId.JunoTestnet,

      ChainId.KujiraMainnet,
      ChainId.KujiraTestnet,

      'layer',

      ChainId.MigalooMainnet,
      ChainId.MigalooTestnet,

      ChainId.NeutronMainnet,
      ChainId.NeutronTestnet,

      ChainId.OraichainMainnet,

      ChainId.OsmosisMainnet,
      ChainId.OsmosisTestnet,

      ChainId.StargazeMainnet,
      ChainId.StargazeTestnet,

      ChainId.TerraMainnet,
      ChainId.TerraClassicMainnet,
    ],
  },

  // token factory contract to deploy every time
  {
    name: 'token factory',
    type: 'always',
    contracts: ['cw_tokenfactory_issuer'],
    chainIds: [
      ChainId.JunoMainnet,
      ChainId.JunoTestnet,

      'layer',

      ChainId.MigalooMainnet,
      ChainId.MigalooTestnet,

      ChainId.NeutronMainnet,
      ChainId.NeutronTestnet,

      ChainId.OmniflixHubMainnet,
      ChainId.OmniflixHubTestnet,

      ChainId.OraichainMainnet,

      ChainId.OsmosisMainnet,
      ChainId.OsmosisTestnet,

      ChainId.StargazeMainnet,
      ChainId.StargazeTestnet,

      ChainId.TerraMainnet,
    ],
  },

  // token factory kujira contract to deploy every time
  {
    name: 'token factory kujira',
    type: 'always',
    contracts: ['cw_tokenfactory_issuer-kujira'],
    chainIds: [ChainId.KujiraMainnet, ChainId.KujiraTestnet],
  },

  // token staking contract to deploy every time
  {
    name: 'token staking',
    type: 'always',
    contracts: ['dao_voting_token_staked'],
    chainIds: [
      ChainId.BitsongMainnet,
      ChainId.BitsongTestnet,

      ChainId.CosmosHubMainnet,
      ChainId.CosmosHubThetaTestnet,
      ChainId.CosmosHubProviderTestnet,

      ChainId.JunoMainnet,
      ChainId.JunoTestnet,

      ChainId.KujiraMainnet,
      ChainId.KujiraTestnet,

      'layer',

      ChainId.MigalooMainnet,
      ChainId.MigalooTestnet,

      ChainId.NeutronMainnet,
      ChainId.NeutronTestnet,

      ChainId.OmniflixHubMainnet,
      ChainId.OmniflixHubTestnet,

      ChainId.OraichainMainnet,

      ChainId.OsmosisMainnet,
      ChainId.OsmosisTestnet,

      ChainId.StargazeMainnet,
      ChainId.StargazeTestnet,

      ChainId.TerraMainnet,
    ],
  },

  // bitsong contract to deploy every time
  {
    name: 'bitsong',
    type: 'always',
    contracts: ['btsg_ft_factory'],
    chainIds: [ChainId.BitsongMainnet, ChainId.BitsongTestnet],
  },

  // omniflix NFT staking to deploy every time
  {
    name: 'omniflix',
    type: 'always',
    contracts: ['dao_voting_onft_staked'],
    chainIds: [ChainId.OmniflixHubMainnet, ChainId.OmniflixHubTestnet],
  },
]
