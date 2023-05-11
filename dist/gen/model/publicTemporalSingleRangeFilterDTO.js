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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicTemporalSingleRangeFilterDTO = void 0;
/**
* Defines a time range
*/
class PublicTemporalSingleRangeFilterDTO {
    static getAttributeTypeMap() {
        return PublicTemporalSingleRangeFilterDTO.attributeTypeMap;
    }
}
exports.PublicTemporalSingleRangeFilterDTO = PublicTemporalSingleRangeFilterDTO;
PublicTemporalSingleRangeFilterDTO.discriminator = undefined;
PublicTemporalSingleRangeFilterDTO.attributeTypeMap = [
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
    }
];
(function (PublicTemporalSingleRangeFilterDTO) {
    let StartTimeTypeEnum;
    (function (StartTimeTypeEnum) {
        StartTimeTypeEnum[StartTimeTypeEnum["AbsoluteTime"] = 'ABSOLUTE_TIME'] = "AbsoluteTime";
        StartTimeTypeEnum[StartTimeTypeEnum["AfterStartOfData"] = 'AFTER_START_OF_DATA'] = "AfterStartOfData";
        StartTimeTypeEnum[StartTimeTypeEnum["BeforeEndOfFilter"] = 'BEFORE_END_OF_FILTER'] = "BeforeEndOfFilter";
    })(StartTimeTypeEnum = PublicTemporalSingleRangeFilterDTO.StartTimeTypeEnum || (PublicTemporalSingleRangeFilterDTO.StartTimeTypeEnum = {}));
    let EndTimeTypeEnum;
    (function (EndTimeTypeEnum) {
        EndTimeTypeEnum[EndTimeTypeEnum["AbsoluteTime"] = 'ABSOLUTE_TIME'] = "AbsoluteTime";
        EndTimeTypeEnum[EndTimeTypeEnum["BeforeEndOfData"] = 'BEFORE_END_OF_DATA'] = "BeforeEndOfData";
        EndTimeTypeEnum[EndTimeTypeEnum["AfterStartOfFilter"] = 'AFTER_START_OF_FILTER'] = "AfterStartOfFilter";
    })(EndTimeTypeEnum = PublicTemporalSingleRangeFilterDTO.EndTimeTypeEnum || (PublicTemporalSingleRangeFilterDTO.EndTimeTypeEnum = {}));
})(PublicTemporalSingleRangeFilterDTO = exports.PublicTemporalSingleRangeFilterDTO || (exports.PublicTemporalSingleRangeFilterDTO = {}));
