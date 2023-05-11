"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./authenticationJWTTokenApi"), exports);
const authenticationJWTTokenApi_1 = require("./authenticationJWTTokenApi");
__exportStar(require("./backgroundLayersAndAreasOfInterestMapdataApi"), exports);
const backgroundLayersAndAreasOfInterestMapdataApi_1 = require("./backgroundLayersAndAreasOfInterestMapdataApi");
__exportStar(require("./dataSetsApi"), exports);
const dataSetsApi_1 = require("./dataSetsApi");
__exportStar(require("./projectQueriesQueryAndDownloadDataApi"), exports);
const projectQueriesQueryAndDownloadDataApi_1 = require("./projectQueriesQueryAndDownloadDataApi");
__exportStar(require("./projectResourcesBookmarksApi"), exports);
const projectResourcesBookmarksApi_1 = require("./projectResourcesBookmarksApi");
__exportStar(require("./projectResourcesDataSetsApi"), exports);
const projectResourcesDataSetsApi_1 = require("./projectResourcesDataSetsApi");
__exportStar(require("./projectResourcesFilterInformationApi"), exports);
const projectResourcesFilterInformationApi_1 = require("./projectResourcesFilterInformationApi");
__exportStar(require("./projectResourcesLinksApi"), exports);
const projectResourcesLinksApi_1 = require("./projectResourcesLinksApi");
__exportStar(require("./projectResourcesMapdataApi"), exports);
const projectResourcesMapdataApi_1 = require("./projectResourcesMapdataApi");
__exportStar(require("./projectResourcesWidgetsApi"), exports);
const projectResourcesWidgetsApi_1 = require("./projectResourcesWidgetsApi");
__exportStar(require("./projectsApi"), exports);
const projectsApi_1 = require("./projectsApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [authenticationJWTTokenApi_1.AuthenticationJWTTokenApi, backgroundLayersAndAreasOfInterestMapdataApi_1.BackgroundLayersAndAreasOfInterestMapdataApi, dataSetsApi_1.DataSetsApi, projectQueriesQueryAndDownloadDataApi_1.ProjectQueriesQueryAndDownloadDataApi, projectResourcesBookmarksApi_1.ProjectResourcesBookmarksApi, projectResourcesDataSetsApi_1.ProjectResourcesDataSetsApi, projectResourcesFilterInformationApi_1.ProjectResourcesFilterInformationApi, projectResourcesLinksApi_1.ProjectResourcesLinksApi, projectResourcesMapdataApi_1.ProjectResourcesMapdataApi, projectResourcesWidgetsApi_1.ProjectResourcesWidgetsApi, projectsApi_1.ProjectsApi];
