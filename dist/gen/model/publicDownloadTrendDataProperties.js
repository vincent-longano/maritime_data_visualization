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
exports.PublicDownloadTrendDataProperties = void 0;
/**
* Specifies the properties specific to the trend
*/
class PublicDownloadTrendDataProperties {
    static getAttributeTypeMap() {
        return PublicDownloadTrendDataProperties.attributeTypeMap;
    }
}
exports.PublicDownloadTrendDataProperties = PublicDownloadTrendDataProperties;
PublicDownloadTrendDataProperties.discriminator = undefined;
PublicDownloadTrendDataProperties.attributeTypeMap = [
    {
        "name": "mode",
        "baseName": "mode",
        "type": "PublicDownloadTrendDataProperties.ModeEnum"
    },
    {
        "name": "displayPropertyOptions",
        "baseName": "displayPropertyOptions",
        "type": "PublicTrendAnalyticsDisplayPropertyOptions"
    },
    {
        "name": "groupingMode",
        "baseName": "groupingMode",
        "type": "PublicDownloadTrendDataProperties.GroupingModeEnum"
    }
];
(function (PublicDownloadTrendDataProperties) {
    let ModeEnum;
    (function (ModeEnum) {
        ModeEnum[ModeEnum["Property"] = 'DISPLAY_PROPERTY'] = "Property";
        ModeEnum[ModeEnum["NumberOfAssets"] = 'DISPLAY_NUMBER_OF_ASSETS'] = "NumberOfAssets";
    })(ModeEnum = PublicDownloadTrendDataProperties.ModeEnum || (PublicDownloadTrendDataProperties.ModeEnum = {}));
    let GroupingModeEnum;
    (function (GroupingModeEnum) {
        GroupingModeEnum[GroupingModeEnum["GroupByHour"] = 'GROUP_BY_HOUR'] = "GroupByHour";
        GroupingModeEnum[GroupingModeEnum["GroupByDay"] = 'GROUP_BY_DAY'] = "GroupByDay";
        GroupingModeEnum[GroupingModeEnum["NoGrouping"] = 'NO_GROUPING'] = "NoGrouping";
    })(GroupingModeEnum = PublicDownloadTrendDataProperties.GroupingModeEnum || (PublicDownloadTrendDataProperties.GroupingModeEnum = {}));
})(PublicDownloadTrendDataProperties = exports.PublicDownloadTrendDataProperties || (exports.PublicDownloadTrendDataProperties = {}));
