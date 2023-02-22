/* tslint:disable */
/* eslint-disable */
/**
 * Content API
 * Content API for KIQR Headless CMS
 *
 * The version of the OpenAPI document: 0.9.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PaginationMeta } from './PaginationMeta';
import {
    PaginationMetaFromJSON,
    PaginationMetaFromJSONTyped,
    PaginationMetaToJSON,
} from './PaginationMeta';

/**
 * 
 * @export
 * @interface DocumentsCollectionMeta
 */
export interface DocumentsCollectionMeta {
    /**
     * 
     * @type {PaginationMeta}
     * @memberof DocumentsCollectionMeta
     */
    pagination: PaginationMeta;
}

/**
 * Check if a given object implements the DocumentsCollectionMeta interface.
 */
export function instanceOfDocumentsCollectionMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pagination" in value;

    return isInstance;
}

export function DocumentsCollectionMetaFromJSON(json: any): DocumentsCollectionMeta {
    return DocumentsCollectionMetaFromJSONTyped(json, false);
}

export function DocumentsCollectionMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentsCollectionMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': PaginationMetaFromJSON(json['pagination']),
    };
}

export function DocumentsCollectionMetaToJSON(value?: DocumentsCollectionMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': PaginationMetaToJSON(value.pagination),
    };
}

