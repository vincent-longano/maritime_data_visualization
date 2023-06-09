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
* <p>Use a color map where you define intervals or ranges and their corresponding color.</p><p>An interval based color map is defined by splitting the range of the color map into different sub-ranges or intervals, and specify a color for each of those intervals.</p><p>For numerical properties, the color map specifies the mapping from a numeric value to a color. You can only specify a single color map for a numerical property. If you specify multiple ones, it is undefined which of the specified color maps will be used.</p>
*/
export class PublicVisualAnalyticsIntervalColorMapDTO {
    /**
    * <p>Defines the intervals of the color map.</p><p>The first interval goes from <code>[value[0],value[1][</code> and the corresponding color is <code>colors[0]</code>, the second interval goes from <code>[value[1],value[2][</code> and the corresponding color is <code>colors[1]</code>, ... . This implies that the <code>values.length == colors.length + 1</code>.</p>
    */
    'values': Array<number>;
    /**
    * <p>Defines the colors of the color map, expressed as hex strings.</p><p>The first interval goes from <code>[value[0],value[1][</code> and the corresponding color is <code>colors[0]</code>, the second interval goes from <code>[value[1],value[2][</code> and the corresponding color is <code>colors[1]</code>, ... . This implies that the <code>values.length == colors.length + 1</code>.</p>
    */
    'colors': Array<string>;
    /**
    * <p>Defines the color to use for values smaller than <code>values[0]</code>.</p>
    */
    'lowerValuesHexColor'?: string;
    /**
    * <p>Defines the color to use for values greater than <code>values[values.length-1]</code>.</p>
    */
    'upperValuesHexColor'?: string;
    /**
    * <p>When specified, this color will be used for the No Data values.</p><p>Otherwise, a random color will be used for those values.</p>
    */
    'noDataHexColor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return PublicVisualAnalyticsIntervalColorMapDTO.attributeTypeMap;
    }
}

