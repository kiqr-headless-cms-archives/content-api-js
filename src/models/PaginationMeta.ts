/* tslint:disable */
/* eslint-disable */
/**
 * Content API
 * Content API for KIQR Headless CMS
 *
 * The version of the OpenAPI document: 0.15.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PaginationMeta
 */
export interface PaginationMeta {
    /**
     * 
     * @type {number}
     * @memberof PaginationMeta
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMeta
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMeta
     */
    items: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMeta
     */
    pages: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMeta
     */
    from?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMeta
     */
    to?: number;
}

/**
 * Check if a given object implements the PaginationMeta interface.
 */
export function instanceOfPaginationMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "page" in value;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "pages" in value;

    return isInstance;
}

export function PaginationMetaFromJSON(json: any): PaginationMeta {
    return PaginationMetaFromJSONTyped(json, false);
}

export function PaginationMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginationMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'page': json['page'],
        'items': json['items'],
        'pages': json['pages'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
    };
}

export function PaginationMetaToJSON(value?: PaginationMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'page': value.page,
        'items': value.items,
        'pages': value.pages,
        'from': value.from,
        'to': value.to,
    };
}

