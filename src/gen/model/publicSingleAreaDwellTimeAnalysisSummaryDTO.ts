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

/**
* <p>For each area, for each time instance, there is an average dwell time. The lists are sorted according to the timeInstances list.</p><p>The key of the map is the id of the area.</p><p>The corresponding value is a list of dwell times for the different areas. The list contains one item for each of the <code>timeInstances</code>, in the same order as the <code>timeInstances</code>.</p>
*/
export class PublicSingleAreaDwellTimeAnalysisSummaryDTO {
    /**
    * The id of the area for which this are the average dwell time results
    */
    'area': string;
    /**
    * From all assets in this area, what is the shortest time an asset spends in the area
    */
    'minTimeSpentInSeconds': number;
    /**
    * From all assets in this area, what is the longest time an asset spends in the area
    */
    'maxTimeSpentInSeconds': number;
    /**
    * Over all assets in this area, denotes the average time spent in the area.
    */
    'averageTimeSpentInSeconds': number;
    /**
    * The number of different assets that are in the area.
    */
    'totalNumberOfAssetsInArea': number;
    /**
    * The minimum number of times a single asset visited this area. This is typically 1, but it can be more also.
    */
    'minNumberOfVisitsInArea': number;
    /**
    * The maximum number of times a single asset visited this area. This is typically 1, but it can be more also.
    */
    'maxNumberOfVisitsInArea': number;
    /**
    * The average number of times an asset comes in this area (during the query time).
    */
    'averageNumberOfVisitsInArea': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "area",
            "baseName": "area",
            "type": "string"
        },
        {
            "name": "minTimeSpentInSeconds",
            "baseName": "minTimeSpentInSeconds",
            "type": "number"
        },
        {
            "name": "maxTimeSpentInSeconds",
            "baseName": "maxTimeSpentInSeconds",
            "type": "number"
        },
        {
            "name": "averageTimeSpentInSeconds",
            "baseName": "averageTimeSpentInSeconds",
            "type": "number"
        },
        {
            "name": "totalNumberOfAssetsInArea",
            "baseName": "totalNumberOfAssetsInArea",
            "type": "number"
        },
        {
            "name": "minNumberOfVisitsInArea",
            "baseName": "minNumberOfVisitsInArea",
            "type": "number"
        },
        {
            "name": "maxNumberOfVisitsInArea",
            "baseName": "maxNumberOfVisitsInArea",
            "type": "number"
        },
        {
            "name": "averageNumberOfVisitsInArea",
            "baseName": "averageNumberOfVisitsInArea",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PublicSingleAreaDwellTimeAnalysisSummaryDTO.attributeTypeMap;
    }
}
