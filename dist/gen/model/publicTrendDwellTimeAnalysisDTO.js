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
exports.PublicTrendDwellTimeAnalysisDTO = void 0;
/**
* <p>The trends of the average dwell time for each area.</p><p>The trend is only available when the dwell time analysis is of type <code>TREND</code>.</p>
*/
class PublicTrendDwellTimeAnalysisDTO {
    static getAttributeTypeMap() {
        return PublicTrendDwellTimeAnalysisDTO.attributeTypeMap;
    }
}
exports.PublicTrendDwellTimeAnalysisDTO = PublicTrendDwellTimeAnalysisDTO;
PublicTrendDwellTimeAnalysisDTO.discriminator = undefined;
PublicTrendDwellTimeAnalysisDTO.attributeTypeMap = [
    {
        "name": "timeInstances",
        "baseName": "timeInstances",
        "type": "Array<Date>"
    },
    {
        "name": "areaToSummaryDwellTimeAnalysisResults",
        "baseName": "areaToSummaryDwellTimeAnalysisResults",
        "type": "{ [key: string]: Array<PublicSingleAreaDwellTimeAnalysisSummaryDTO>; }"
    }
];
