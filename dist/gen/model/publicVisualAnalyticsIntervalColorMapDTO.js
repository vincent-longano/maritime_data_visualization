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
exports.PublicVisualAnalyticsIntervalColorMapDTO = void 0;
/**
* <p>Use a color map where you define intervals or ranges and their corresponding color.</p><p>An interval based color map is defined by splitting the range of the color map into different sub-ranges or intervals, and specify a color for each of those intervals.</p><p>For numerical properties, the color map specifies the mapping from a numeric value to a color. You can only specify a single color map for a numerical property. If you specify multiple ones, it is undefined which of the specified color maps will be used.</p>
*/
class PublicVisualAnalyticsIntervalColorMapDTO {
    static getAttributeTypeMap() {
        return PublicVisualAnalyticsIntervalColorMapDTO.attributeTypeMap;
    }
}
exports.PublicVisualAnalyticsIntervalColorMapDTO = PublicVisualAnalyticsIntervalColorMapDTO;
PublicVisualAnalyticsIntervalColorMapDTO.discriminator = undefined;
PublicVisualAnalyticsIntervalColorMapDTO.attributeTypeMap = [
    {
        "name": "values",
        "baseName": "values",
        "type": "Array<number>"
    },
    {
        "name": "colors",
        "baseName": "colors",
        "type": "Array<string>"
    },
    {
        "name": "lowerValuesHexColor",
        "baseName": "lowerValuesHexColor",
        "type": "string"
    },
    {
        "name": "upperValuesHexColor",
        "baseName": "upperValuesHexColor",
        "type": "string"
    },
    {
        "name": "noDataHexColor",
        "baseName": "noDataHexColor",
        "type": "string"
    }
];