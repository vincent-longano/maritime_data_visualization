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

import { RequestFile } from './models';
import { PublicBookmarkLinkDashboardProperties } from './publicBookmarkLinkDashboardProperties';

export class CreatePublicBookmarkLinkRequest {
    /**
    * The name of the link
    */
    'name': string;
    /**
    * The page you want to give access to through the link
    */
    'page': CreatePublicBookmarkLinkRequest.PageEnum;
    /**
    * The theme that should be used when somebody accesses the link
    */
    'theme'?: CreatePublicBookmarkLinkRequest.ThemeEnum;
    'dashboardProperties'?: PublicBookmarkLinkDashboardProperties;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "CreatePublicBookmarkLinkRequest.PageEnum"
        },
        {
            "name": "theme",
            "baseName": "theme",
            "type": "CreatePublicBookmarkLinkRequest.ThemeEnum"
        },
        {
            "name": "dashboardProperties",
            "baseName": "dashboardProperties",
            "type": "PublicBookmarkLinkDashboardProperties"
        }    ];

    static getAttributeTypeMap() {
        return CreatePublicBookmarkLinkRequest.attributeTypeMap;
    }
}

export namespace CreatePublicBookmarkLinkRequest {
    export enum PageEnum {
        VisualAnalyticsPage = <any> 'VISUAL_ANALYTICS_PAGE',
        TrendAnalyticsPage = <any> 'TREND_ANALYTICS_PAGE',
        DistributionAnalyticsPage = <any> 'DISTRIBUTION_ANALYTICS_PAGE',
        OriginDestinationPage = <any> 'ORIGIN_DESTINATION_PAGE',
        DwellTimePage = <any> 'DWELL_TIME_PAGE',
        DashboardPage = <any> 'DASHBOARD_PAGE'
    }
    export enum ThemeEnum {
        Light = <any> 'Light',
        Dark = <any> 'Dark'
    }
}
