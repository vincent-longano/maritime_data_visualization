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
import { PublicSingleIndividualAreaVisitDTO } from './publicSingleIndividualAreaVisitDTO';

/**
* <p>The mappings from the areas to the dwell time results for the each asset within the area, at individual level.</p><p>The key in the first map is the area identifier.</p><p>The corresponding is another map where the key is asset id and the value is the dwell time analysis for that asset in that particular area.</p><p>This map is only available when the dwell time analysis is of type <code>INDIVIDUAL</code>.</p>
*/
export class PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO {
    /**
    * From all the visits to this area, what is the minimal time spent in the area by the asset.
    */
    'minTimeSpentInSeconds': number;
    /**
    * From all the visits to this area, what is the maximal time spent in the area by the asset.
    */
    'maxTimeSpentInSeconds': number;
    /**
    * From all the visits to this area, what is the average time spent in the area by the asset.
    */
    'averageTimeSpentInSeconds': number;
    /**
    * The number of times the asset is in the area.
    */
    'totalNumberOfVisits': number;
    /**
    * Total time spent in this area, adding up all visits.
    */
    'totalTimeSpentInSeconds': number;
    /**
    * All visits with start and end times in this area for the respective asset.
    */
    'visits': Array<PublicSingleIndividualAreaVisitDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO.attributeTypeMap;
    }
}
