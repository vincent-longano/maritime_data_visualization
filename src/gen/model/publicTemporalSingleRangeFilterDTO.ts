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
* Defines a time range
*/
export class PublicTemporalSingleRangeFilterDTO {
    /**
    * <p>Defines how the start time is specified.</p><p>Note that only the combinations of start and end time types that are possible in the UI are supported.The behavior when using an unsupported combination is undefined.</p>
    */
    'startTimeType': PublicTemporalSingleRangeFilterDTO.StartTimeTypeEnum;
    /**
    * <p>When the start time type is a relative type (<code>AFTER_START_OF_DATA</code>, <code>BEFORE_END_OF_FILTER</code>), this property defines the difference in seconds.</p><p>When using another start time type, the value of this property will be ignored. The property should however still be specified.</p>
    */
    'startTimeDeltaInSeconds': number;
    /**
    * <p>When the start time type is <code>ABSOLUTE_TIME</code>, this property defines the start time as the number of seconds since the epoch.</p><p>When using another start time type, the value of this property will be ignored. The property should however still be specified.</p>
    */
    'startTimeInSeconds': number;
    /**
    * <p>Defines how the end time is specified.</p><p>Note that only the combinations of start and end time types that are possible in the UI are supported.The behavior when using an unsupported combination is undefined.</p>
    */
    'endTimeType': PublicTemporalSingleRangeFilterDTO.EndTimeTypeEnum;
    /**
    * <p>When the end time type is a relative type (<code>BEFORE_END_OF_DATA</code>, <code>AFTER_START_OF_FILTER</code>), this property defines the difference in seconds.</p><p>When using another end time type, the value of this property will be ignored. The property should however still be specified.</p>
    */
    'endTimeDeltaInSeconds': number;
    /**
    * <p>When the end time type is <code>ABSOLUTE_TIME</code>, this property defines the end time as the number of seconds since the epoch.</p><p>When using another end time type, the value of this property will be ignored. The property should however still be specified.</p>
    */
    'endTimeInSeconds': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startTimeType",
            "baseName": "startTimeType",
            "type": "PublicTemporalSingleRangeFilterDTO.StartTimeTypeEnum"
        },
        {
            "name": "startTimeDeltaInSeconds",
            "baseName": "startTimeDeltaInSeconds",
            "type": "number"
        },
        {
            "name": "startTimeInSeconds",
            "baseName": "startTimeInSeconds",
            "type": "number"
        },
        {
            "name": "endTimeType",
            "baseName": "endTimeType",
            "type": "PublicTemporalSingleRangeFilterDTO.EndTimeTypeEnum"
        },
        {
            "name": "endTimeDeltaInSeconds",
            "baseName": "endTimeDeltaInSeconds",
            "type": "number"
        },
        {
            "name": "endTimeInSeconds",
            "baseName": "endTimeInSeconds",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PublicTemporalSingleRangeFilterDTO.attributeTypeMap;
    }
}

export namespace PublicTemporalSingleRangeFilterDTO {
    export enum StartTimeTypeEnum {
        AbsoluteTime = <any> 'ABSOLUTE_TIME',
        AfterStartOfData = <any> 'AFTER_START_OF_DATA',
        BeforeEndOfFilter = <any> 'BEFORE_END_OF_FILTER'
    }
    export enum EndTimeTypeEnum {
        AbsoluteTime = <any> 'ABSOLUTE_TIME',
        BeforeEndOfData = <any> 'BEFORE_END_OF_DATA',
        AfterStartOfFilter = <any> 'AFTER_START_OF_FILTER'
    }
}
