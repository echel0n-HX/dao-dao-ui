/* tslint:disable */
import { CreateMsg } from './shared-types'

/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ReceiveMsg =
  | {
      create: CreateMsg
    }
  | {
      top_up: {
        id: string
        [k: string]: unknown
      }
    }
