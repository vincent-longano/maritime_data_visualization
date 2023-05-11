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
import { PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO } from './publicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO';

/**
* Defines the styling for the realtime specific visualizations
*/
export class PublicVisualAnalyticsRealtimePerComputedPropertyStylingDTO {
    'additiveBlendingColorMap': PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additiveBlendingColorMap",
            "baseName": "additiveBlendingColorMap",
            "type": "PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO"
        }    ];

    static getAttributeTypeMap() {
        return PublicVisualAnalyticsRealtimePerComputedPropertyStylingDTO.attributeTypeMap;
    }
}

