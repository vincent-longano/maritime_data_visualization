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
* Spatial filter on an area
*/
export class PublicAreaFilterDTO {
    /**
    * The identifier of the area to use in the filter
    */
    'areaIdentifier': string;
    /**
    * <p>Defines the mode of the area filter.</p><p>The supported modes depend on the type of data set that is being used. The prefix in the mode name specifies the supported data set type. The behavior is undefined when using an unsupported mode.</p>
    */
    'filteringMode': PublicAreaFilterDTO.FilteringModeEnum;
    /**
    * true to include records that match the area filter, false to exclude those records
    */
    'included': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "areaIdentifier",
            "baseName": "areaIdentifier",
            "type": "string"
        },
        {
            "name": "filteringMode",
            "baseName": "filteringMode",
            "type": "PublicAreaFilterDTO.FilteringModeEnum"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PublicAreaFilterDTO.attributeTypeMap;
    }
}

export namespace PublicAreaFilterDTO {
    export enum FilteringModeEnum {
        MovementDatasetInside = <any> 'MOVEMENT_DATASET_INSIDE',
        MovementDatasetOutside = <any> 'MOVEMENT_DATASET_OUTSIDE',
        MovementDatasetFrom = <any> 'MOVEMENT_DATASET_FROM',
        MovementDatasetTo = <any> 'MOVEMENT_DATASET_TO',
        MovementDatasetThrough = <any> 'MOVEMENT_DATASET_THROUGH',
        TimeSeriesDatasetOverlaps = <any> 'TIME_SERIES_DATASET_OVERLAPS',
        TimeSeriesDatasetOutside = <any> 'TIME_SERIES_DATASET_OUTSIDE'
    }
}
