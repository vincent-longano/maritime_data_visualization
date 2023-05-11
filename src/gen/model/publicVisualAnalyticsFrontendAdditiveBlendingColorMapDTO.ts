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
* <p>Use an additive blending color map as color map for a numerical property.</p><p>An additive color map is created by selecting a (dark) color as start color, and that color is added up repeatedly to define the color map.</p>
*/
export class PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO {
    /**
    * The start color for the additive color map as hex string.
    */
    'startColor': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startColor",
            "baseName": "startColor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO.attributeTypeMap;
    }
}

