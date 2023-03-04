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
import type { Document } from './Document';
import {
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './Document';
import type { DocumentsCollectionMeta } from './DocumentsCollectionMeta';
import {
    DocumentsCollectionMetaFromJSON,
    DocumentsCollectionMetaFromJSONTyped,
    DocumentsCollectionMetaToJSON,
} from './DocumentsCollectionMeta';

/**
 * 
 * @export
 * @interface DocumentsCollection
 */
export interface DocumentsCollection {
    /**
     * 
     * @type {Array<Document>}
     * @memberof DocumentsCollection
     */
    documents: Array<Document>;
    /**
     * 
     * @type {DocumentsCollectionMeta}
     * @memberof DocumentsCollection
     */
    meta: DocumentsCollectionMeta;
}

/**
 * Check if a given object implements the DocumentsCollection interface.
 */
export function instanceOfDocumentsCollection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "documents" in value;
    isInstance = isInstance && "meta" in value;

    return isInstance;
}

export function DocumentsCollectionFromJSON(json: any): DocumentsCollection {
    return DocumentsCollectionFromJSONTyped(json, false);
}

export function DocumentsCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentsCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documents': ((json['documents'] as Array<any>).map(DocumentFromJSON)),
        'meta': DocumentsCollectionMetaFromJSON(json['meta']),
    };
}

export function DocumentsCollectionToJSON(value?: DocumentsCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documents': ((value.documents as Array<any>).map(DocumentToJSON)),
        'meta': DocumentsCollectionMetaToJSON(value.meta),
    };
}

