/* tslint:disable */
import { CosmosMsgFor_Empty } from './shared-types'

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type QueryMsg =
  | {
      admin_list: {
        [k: string]: unknown
      }
    }
  | {
      can_execute: {
        msg: CosmosMsgFor_Empty
        sender: string
        [k: string]: unknown
      }
    }
