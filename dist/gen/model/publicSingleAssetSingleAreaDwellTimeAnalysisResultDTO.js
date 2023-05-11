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
exports.PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO = void 0;
/**
* <p>The mappings from the areas to the dwell time results for the each asset within the area, at individual level.</p><p>The key in the first map is the area identifier.</p><p>The corresponding is another map where the key is asset id and the value is the dwell time analysis for that asset in that particular area.</p><p>This map is only available when the dwell time analysis is of type <code>INDIVIDUAL</code>.</p>
*/
class PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO {
    static getAttributeTypeMap() {
        return PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO.attributeTypeMap;
    }
}
exports.PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO = PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO;
PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO.discriminator = undefined;
PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO.attributeTypeMap = [
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
        "name": "totalNumberOfVisits",
        "baseName": "totalNumberOfVisits",
        "type": "number"
    },
    {
        "name": "totalTimeSpentInSeconds",
        "baseName": "totalTimeSpentInSeconds",
        "type": "number"
    },
    {
        "name": "visits",
        "baseName": "visits",
        "type": "Array<PublicSingleIndividualAreaVisitDTO>"
    }
];