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
* The trend values grouped by hour. Only available when the <code>groupingMode</code> is set to <code>GROUP_BY_HOUR</code>.
*/
export class GroupedByHourValue {
    /**
    * <p>The hour, calculated in the timezone specified in the request.</p><p>Hour 0 goes from 0:00AM until 0:59AM, hour 1 goes from 01:00AM until 01:59AM, etc.</p>
    */
    'hour'?: number;
    /**
    * The value for that hour
    */
    'value'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hour",
            "baseName": "hour",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GroupedByHourValue.attributeTypeMap;
    }
}

