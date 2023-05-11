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
exports.PublicDwellTimeAreaPropertiesDTO = void 0;
/**
* Defines the areas to include in the dwell time analysis
*/
class PublicDwellTimeAreaPropertiesDTO {
    static getAttributeTypeMap() {
        return PublicDwellTimeAreaPropertiesDTO.attributeTypeMap;
    }
}
exports.PublicDwellTimeAreaPropertiesDTO = PublicDwellTimeAreaPropertiesDTO;
PublicDwellTimeAreaPropertiesDTO.discriminator = undefined;
PublicDwellTimeAreaPropertiesDTO.attributeTypeMap = [
    {
        "name": "areaIdentifier",
        "baseName": "areaIdentifier",
        "type": "string"
    }
];
