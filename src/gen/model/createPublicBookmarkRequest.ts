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
import { PublicDistributionAnalyticsPageState } from './publicDistributionAnalyticsPageState';
import { PublicDwellTimePageState } from './publicDwellTimePageState';
import { PublicOriginDestinationPageState } from './publicOriginDestinationPageState';
import { PublicTrendAnalyticsPageState } from './publicTrendAnalyticsPageState';
import { PublicVisualAnalyticsPageState } from './publicVisualAnalyticsPageState';

export class CreatePublicBookmarkRequest {
    /**
    * The name for the bookmark
    */
    'name': string;
    /**
    * The description if the bookmark
    */
    'description'?: string;
    /**
    * <p>True when the bookmark should become the default one for the project.</p><p>Note that each project can have at most one default bookmark.When this value is true, this bookmark will become the default one, even if another bookmark was previously marked as the default one.</p>
    */
    'defaultBookmark'?: boolean;
    'visualAnalyticsPageState'?: PublicVisualAnalyticsPageState;
    'trendAnalyticsPageState'?: PublicTrendAnalyticsPageState;
    'distributionAnalyticsPageState'?: PublicDistributionAnalyticsPageState;
    'originDestinationPageState'?: PublicOriginDestinationPageState;
    'dwellTimePageState'?: PublicDwellTimePageState;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "defaultBookmark",
            "baseName": "defaultBookmark",
            "type": "boolean"
        },
        {
            "name": "visualAnalyticsPageState",
            "baseName": "visualAnalyticsPageState",
            "type": "PublicVisualAnalyticsPageState"
        },
        {
            "name": "trendAnalyticsPageState",
            "baseName": "trendAnalyticsPageState",
            "type": "PublicTrendAnalyticsPageState"
        },
        {
            "name": "distributionAnalyticsPageState",
            "baseName": "distributionAnalyticsPageState",
            "type": "PublicDistributionAnalyticsPageState"
        },
        {
            "name": "originDestinationPageState",
            "baseName": "originDestinationPageState",
            "type": "PublicOriginDestinationPageState"
        },
        {
            "name": "dwellTimePageState",
            "baseName": "dwellTimePageState",
            "type": "PublicDwellTimePageState"
        }    ];

    static getAttributeTypeMap() {
        return CreatePublicBookmarkRequest.attributeTypeMap;
    }
}

