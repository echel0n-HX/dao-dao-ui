/* tslint:disable */
import { Uint128 } from './shared-types'
/**
 * A fixed-point decimal value with 18 fractional digits, i.e. Decimal(1_000_000_000_000_000_000) == 1.0
 *
 * The greatest possible value that can be represented is 340282366920938463463.374607431768211455 (which is (2^128 - 1) / 10^18)
 */
export type Decimal = string

export interface CurveInfoResponse {
  reserve: Uint128
  reserve_denom: string
  spot_price: Decimal
  supply: Uint128
  [k: string]: unknown
}
