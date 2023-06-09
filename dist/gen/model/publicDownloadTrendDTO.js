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
exports.PublicDownloadTrendDTO = void 0;
class PublicDownloadTrendDTO {
    static getAttributeTypeMap() {
        return PublicDownloadTrendDTO.attributeTypeMap;
    }
}
exports.PublicDownloadTrendDTO = PublicDownloadTrendDTO;
PublicDownloadTrendDTO.discriminator = undefined;
PublicDownloadTrendDTO.attributeTypeMap = [
    {
        "name": "groupingMode",
        "baseName": "groupingMode",
        "type": "PublicDownloadTrendDTO.GroupingModeEnum"
    },
    {
        "name": "valuesByDay",
        "baseName": "valuesByDay",
        "type": "Array<GroupedByDayValue>"
    },
    {
        "name": "valuesByHour",
        "baseName": "valuesByHour",
        "type": "Array<GroupedByHourValue>"
    },
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<UngroupedValue>"
    }
];
(function (PublicDownloadTrendDTO) {
    let GroupingModeEnum;
    (function (GroupingModeEnum) {
        GroupingModeEnum[GroupingModeEnum["GroupByHour"] = 'GROUP_BY_HOUR'] = "GroupByHour";
        GroupingModeEnum[GroupingModeEnum["GroupByDay"] = 'GROUP_BY_DAY'] = "GroupByDay";
        GroupingModeEnum[GroupingModeEnum["NoGrouping"] = 'NO_GROUPING'] = "NoGrouping";
    })(GroupingModeEnum = PublicDownloadTrendDTO.GroupingModeEnum || (PublicDownloadTrendDTO.GroupingModeEnum = {}));
})(PublicDownloadTrendDTO = exports.PublicDownloadTrendDTO || (exports.PublicDownloadTrendDTO = {}));
