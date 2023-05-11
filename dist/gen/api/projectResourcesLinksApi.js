"use strict";
/**
 * xyzt.ai platform API
 * <p>Welcome to the documentation of the public API of the xyzt.ai platform. The goal of this API is to allow you to automate certain operations on the platform.</p><p>The base URL of the server is <a href=\"https://api.platform-xyzt.ai\">https://api.platform-xyzt.ai</a>. All URLs in this documentation are relative to this base URL.</p><p>You can also find some example scripts on <a href=\"https://github.com/xyzt-ai/platform-examples\">Github</a>.</p>
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@xyzt.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectResourcesLinksApi = exports.ProjectResourcesLinksApiApiKeys = void 0;
const request_1 = __importDefault(require("request"));
const models_1 = require("../model/models");
const models_2 = require("../model/models");
const apis_1 = require("./apis");
let defaultBasePath = 'https://api.platform-xyzt.ai';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var ProjectResourcesLinksApiApiKeys;
(function (ProjectResourcesLinksApiApiKeys) {
})(ProjectResourcesLinksApiApiKeys = exports.ProjectResourcesLinksApiApiKeys || (exports.ProjectResourcesLinksApiApiKeys = {}));
class ProjectResourcesLinksApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
            'jwtToken': new models_2.HttpBearerAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    set defaultHeaders(defaultHeaders) {
        this._defaultHeaders = defaultHeaders;
    }
    get defaultHeaders() {
        return this._defaultHeaders;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[ProjectResourcesLinksApiApiKeys[key]].apiKey = value;
    }
    set accessToken(accessToken) {
        this.authentications.jwtToken.accessToken = accessToken;
    }
    addInterceptor(interceptor) {
        this.interceptors.push(interceptor);
    }
    /**
     * <p>Creates a new link for the bookmark, and returns the created link.</p><p><strong>Warning:</strong> as long as the bookmark and link exist, anybody who knows the link has access to that project page and can view the data.</p>
     * @summary Create a new link for the bookmark
     * @param projectId The id of the project
     * @param bookmarkId The id of the bookmark to create the link for
     * @param createPublicBookmarkLinkRequest Request body describing the link under construction
     */
    createLink(projectId, bookmarkId, createPublicBookmarkLinkRequest, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/public/api/projects/{projectId}/bookmarks/{bookmarkId}/links'
                .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                .replace('{' + 'bookmarkId' + '}', encodeURIComponent(String(bookmarkId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new Error('Required parameter projectId was null or undefined when calling createLink.');
            }
            // verify required parameter 'bookmarkId' is not null or undefined
            if (bookmarkId === null || bookmarkId === undefined) {
                throw new Error('Required parameter bookmarkId was null or undefined when calling createLink.');
            }
            // verify required parameter 'createPublicBookmarkLinkRequest' is not null or undefined
            if (createPublicBookmarkLinkRequest === null || createPublicBookmarkLinkRequest === undefined) {
                throw new Error('Required parameter createPublicBookmarkLinkRequest was null or undefined when calling createLink.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(createPublicBookmarkLinkRequest, "CreatePublicBookmarkLinkRequest")
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.jwtToken.accessToken) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.jwtToken.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "PublicBookmarkLinkDTO");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * <p>Delete a link. Anybody trying to access the link afterwards will get an error.</p>
     * @summary Delete a link
     * @param projectId The id of the project
     * @param bookmarkId The id of the bookmark to delete
     * @param linkId The id of the link to delete
     */
    deleteLink(projectId, bookmarkId, linkId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/public/api/projects/{projectId}/bookmarks/{bookmarkId}/links/{linkId}'
                .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                .replace('{' + 'bookmarkId' + '}', encodeURIComponent(String(bookmarkId)))
                .replace('{' + 'linkId' + '}', encodeURIComponent(String(linkId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new Error('Required parameter projectId was null or undefined when calling deleteLink.');
            }
            // verify required parameter 'bookmarkId' is not null or undefined
            if (bookmarkId === null || bookmarkId === undefined) {
                throw new Error('Required parameter bookmarkId was null or undefined when calling deleteLink.');
            }
            // verify required parameter 'linkId' is not null or undefined
            if (linkId === null || linkId === undefined) {
                throw new Error('Required parameter linkId was null or undefined when calling deleteLink.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'DELETE',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.jwtToken.accessToken) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.jwtToken.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
    /**
     * <p>Returns all the links that are created for the bookmark.</p>
     * @summary Retrieve all available links for the bookmark
     * @param projectId The id of the project
     * @param bookmarkId The id of the bookmark
     */
    getBookmarkLinks(projectId, bookmarkId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/public/api/projects/{projectId}/bookmarks/{bookmarkId}/links'
                .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)))
                .replace('{' + 'bookmarkId' + '}', encodeURIComponent(String(bookmarkId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this._defaultHeaders);
            const produces = ['application/json'];
            // give precedence to 'application/json'
            if (produces.indexOf('application/json') >= 0) {
                localVarHeaderParams.Accept = 'application/json';
            }
            else {
                localVarHeaderParams.Accept = produces.join(',');
            }
            let localVarFormParams = {};
            // verify required parameter 'projectId' is not null or undefined
            if (projectId === null || projectId === undefined) {
                throw new Error('Required parameter projectId was null or undefined when calling getBookmarkLinks.');
            }
            // verify required parameter 'bookmarkId' is not null or undefined
            if (bookmarkId === null || bookmarkId === undefined) {
                throw new Error('Required parameter bookmarkId was null or undefined when calling getBookmarkLinks.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            let authenticationPromise = Promise.resolve();
            if (this.authentications.jwtToken.accessToken) {
                authenticationPromise = authenticationPromise.then(() => this.authentications.jwtToken.applyToRequest(localVarRequestOptions));
            }
            authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));
            let interceptorPromise = authenticationPromise;
            for (const interceptor of this.interceptors) {
                interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
            }
            return interceptorPromise.then(() => {
                if (Object.keys(localVarFormParams).length) {
                    if (localVarUseFormData) {
                        localVarRequestOptions.formData = localVarFormParams;
                    }
                    else {
                        localVarRequestOptions.form = localVarFormParams;
                    }
                }
                return new Promise((resolve, reject) => {
                    (0, request_1.default)(localVarRequestOptions, (error, response, body) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                body = models_1.ObjectSerializer.deserialize(body, "Array<PublicBookmarkLinkDTO>");
                                resolve({ response: response, body: body });
                            }
                            else {
                                reject(new apis_1.HttpError(response, body, response.statusCode));
                            }
                        }
                    });
                });
            });
        });
    }
}
exports.ProjectResourcesLinksApi = ProjectResourcesLinksApi;
