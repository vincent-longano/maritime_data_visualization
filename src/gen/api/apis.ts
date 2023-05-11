export * from './authenticationJWTTokenApi';
import { AuthenticationJWTTokenApi } from './authenticationJWTTokenApi';
export * from './backgroundLayersAndAreasOfInterestMapdataApi';
import { BackgroundLayersAndAreasOfInterestMapdataApi } from './backgroundLayersAndAreasOfInterestMapdataApi';
export * from './dataSetsApi';
import { DataSetsApi } from './dataSetsApi';
export * from './projectQueriesQueryAndDownloadDataApi';
import { ProjectQueriesQueryAndDownloadDataApi } from './projectQueriesQueryAndDownloadDataApi';
export * from './projectResourcesBookmarksApi';
import { ProjectResourcesBookmarksApi } from './projectResourcesBookmarksApi';
export * from './projectResourcesDataSetsApi';
import { ProjectResourcesDataSetsApi } from './projectResourcesDataSetsApi';
export * from './projectResourcesFilterInformationApi';
import { ProjectResourcesFilterInformationApi } from './projectResourcesFilterInformationApi';
export * from './projectResourcesLinksApi';
import { ProjectResourcesLinksApi } from './projectResourcesLinksApi';
export * from './projectResourcesMapdataApi';
import { ProjectResourcesMapdataApi } from './projectResourcesMapdataApi';
export * from './projectResourcesWidgetsApi';
import { ProjectResourcesWidgetsApi } from './projectResourcesWidgetsApi';
export * from './projectsApi';
import { ProjectsApi } from './projectsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthenticationJWTTokenApi, BackgroundLayersAndAreasOfInterestMapdataApi, DataSetsApi, ProjectQueriesQueryAndDownloadDataApi, ProjectResourcesBookmarksApi, ProjectResourcesDataSetsApi, ProjectResourcesFilterInformationApi, ProjectResourcesLinksApi, ProjectResourcesMapdataApi, ProjectResourcesWidgetsApi, ProjectsApi];
