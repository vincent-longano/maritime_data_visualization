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
* A filter for a numerical property
*/
export class PublicNumericPropertyFilterDTO {
    /**
    * The identifier of the property to filter on
    */
    'propertyIdentifier': string;
    /**
    * The minimum value (inclusive) of the range to be used by the filter
    */
    'minimumValue': number;
    /**
    * The maximum value (inclusive) of the range to be used by the filter
    */
    'maximumValue': number;
    /**
    * true to include the values in the range of this filter, false to exclude those values
    */
    'included': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "propertyIdentifier",
            "baseName": "propertyIdentifier",
            "type": "string"
        },
        {
            "name": "minimumValue",
            "baseName": "minimumValue",
            "type": "number"
        },
        {
            "name": "maximumValue",
            "baseName": "maximumValue",
            "type": "number"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PublicNumericPropertyFilterDTO.attributeTypeMap;
    }
}
