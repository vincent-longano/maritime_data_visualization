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

export class PublicDownloadTableDTO {
    /**
    * The name of the columns in the table
    */
    'columns': Array<string>;
    /**
    * <p>The rows of the table.</p><p>Each row contains a mapping from the column name to the corresponding value.</p>
    */
    'rows': Array<{ [key: string]: object; }>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<string>"
        },
        {
            "name": "rows",
            "baseName": "rows",
            "type": "Array<{ [key: string]: object; }>"
        }    ];

    static getAttributeTypeMap() {
        return PublicDownloadTableDTO.attributeTypeMap;
    }
}

