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


import * as runtime from '../runtime';
import type {
  DocumentsCollection,
} from '../models';
import {
    DocumentsCollectionFromJSON,
    DocumentsCollectionToJSON,
} from '../models';

export interface GetDocumentsRequest {
    contentTypeId: string;
}

/**
 * DocumentsApi - interface
 * 
 * @export
 * @interface DocumentsApiInterface
 */
export interface DocumentsApiInterface {
    /**
     * 
     * @summary Returns documents by content type
     * @param {string} contentTypeId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentsApiInterface
     */
    getDocumentsRaw(requestParameters: GetDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentsCollection>>;

    /**
     * Returns documents by content type
     */
    getDocuments(requestParameters: GetDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentsCollection>;

}

/**
 * 
 */
export class DocumentsApi extends runtime.BaseAPI implements DocumentsApiInterface {

    /**
     * Returns documents by content type
     */
    async getDocumentsRaw(requestParameters: GetDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentsCollection>> {
        if (requestParameters.contentTypeId === null || requestParameters.contentTypeId === undefined) {
            throw new runtime.RequiredError('contentTypeId','Required parameter requestParameters.contentTypeId was null or undefined when calling getDocuments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["environmentId"] = this.configuration.apiKey("environmentId"); // environmentId authentication
        }

        const response = await this.request({
            path: `/{contentTypeId}/`.replace(`{${"contentTypeId"}}`, encodeURIComponent(String(requestParameters.contentTypeId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentsCollectionFromJSON(jsonValue));
    }

    /**
     * Returns documents by content type
     */
    async getDocuments(requestParameters: GetDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentsCollection> {
        const response = await this.getDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
