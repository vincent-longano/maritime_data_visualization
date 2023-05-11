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
import { PublicAnalyticsFilterDTO } from './publicAnalyticsFilterDTO';
import { PublicCommonAnalyticsLocalAreaPropertiesDTO } from './publicCommonAnalyticsLocalAreaPropertiesDTO';
import { PublicDistributionAnalyticsDisplayPropertyOptions } from './publicDistributionAnalyticsDisplayPropertyOptions';
import { PublicTemporalRangeFilterDTO } from './publicTemporalRangeFilterDTO';

/**
* The state of the distribution analytics page
*/
export class PublicDistributionAnalyticsPageState {
    /**
    * The id of the active data set
    */
    'activeDataSetId': string;
    'displayPropertyOptions': PublicDistributionAnalyticsDisplayPropertyOptions;
    'filter'?: PublicAnalyticsFilterDTO;
    /**
    * <p>The time zone of the global distribution analytics.</p><p>When not specified, UTC is used as timezone.</p>
    */
    'globalTimeZoneIdentifier'?: string;
    /**
    * Defines the local areas for which distribution analytics must be calculated
    */
    'localAreas'?: Array<PublicCommonAnalyticsLocalAreaPropertiesDTO>;
    /**
    * <p>Defines the time ranges.</p><ul><li>When not specified, a default time range will be used.</li><li>When a single time range is specified, the distribution analytics will show distributions for this range.</li><li>When specifying two ranges, the distribution analytics will show a comparison between those two ranges.</li></ul>
    */
    'timeRanges'?: Array<PublicTemporalRangeFilterDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeDataSetId",
            "baseName": "activeDataSetId",
            "type": "string"
        },
        {
            "name": "displayPropertyOptions",
            "baseName": "displayPropertyOptions",
            "type": "PublicDistributionAnalyticsDisplayPropertyOptions"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "PublicAnalyticsFilterDTO"
        },
        {
            "name": "globalTimeZoneIdentifier",
            "baseName": "globalTimeZoneIdentifier",
            "type": "string"
        },
        {
            "name": "localAreas",
            "baseName": "localAreas",
            "type": "Array<PublicCommonAnalyticsLocalAreaPropertiesDTO>"
        },
        {
            "name": "timeRanges",
            "baseName": "timeRanges",
            "type": "Array<PublicTemporalRangeFilterDTO>"
        }    ];

    static getAttributeTypeMap() {
        return PublicDistributionAnalyticsPageState.attributeTypeMap;
    }
}
