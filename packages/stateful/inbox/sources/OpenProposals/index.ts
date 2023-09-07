import { useCallback } from 'react'
import { useSetRecoilState, waitForAll } from 'recoil'

import { refreshOpenProposalsAtom } from '@dao-dao/state/recoil'
import { useCachedLoadable } from '@dao-dao/stateless'
import { InboxSource } from '@dao-dao/types'
import {
  getSupportedChains,
  transformBech32Address,
  webSocketChannelNameForDao,
} from '@dao-dao/utils'

import {
  ProposalLine,
  ProposalLineProps,
} from '../../../components/ProposalLine'
import { useOnWebSocketMessage, useWallet } from '../../../hooks'
import { followingDaosSelector } from '../../../recoil'
import { inboxOpenProposalsSelector } from './state'

export const OpenProposals: InboxSource<ProposalLineProps> = {
  id: 'open_proposals',
  Renderer: ProposalLine,
  useData: () => {
    const { address, hexPublicKey } = useWallet({
      loadAccount: true,
    })

    const setRefresh = useSetRecoilState(refreshOpenProposalsAtom)
    const refresh = useCallback(() => setRefresh((id) => id + 1), [setRefresh])

    const chains = getSupportedChains()

    const daosWithItemsLoadable = useCachedLoadable(
      waitForAll(
        chains.map(({ chain }) =>
          inboxOpenProposalsSelector({
            chainId: chain.chain_id,
            wallet:
              address && !hexPublicKey.loading
                ? {
                    address: transformBech32Address(address, chain.chain_id),
                    hexPublicKey: hexPublicKey.data,
                  }
                : undefined,
          })
        )
      )
    )

    const followingDaosLoadable = useCachedLoadable(
      hexPublicKey.loading
        ? undefined
        : waitForAll(
            chains.map(({ chain }) =>
              followingDaosSelector({
                chainId: chain.chain_id,
                walletPublicKey: hexPublicKey.data,
              })
            )
          )
    )

    // Refresh when any proposal or vote is updated for any of the followed
    // DAOs.
    useOnWebSocketMessage(
      followingDaosLoadable.state === 'hasValue'
        ? chains.flatMap(({ chain: { chain_id: chainId } }, index) =>
            followingDaosLoadable.contents[index].map((coreAddress) =>
              webSocketChannelNameForDao({
                coreAddress,
                chainId,
              })
            )
          )
        : [],
      ['proposal', 'vote'],
      refresh
    )

    return {
      loading: daosWithItemsLoadable.state === 'loading',
      refreshing:
        daosWithItemsLoadable.state === 'hasValue' &&
        daosWithItemsLoadable.updating,
      daosWithItems:
        daosWithItemsLoadable.state === 'hasValue'
          ? daosWithItemsLoadable.contents.flat()
          : [],
      refresh,
    }
  },
}
