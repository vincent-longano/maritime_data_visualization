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
* <p>Describes the style of a map data layer.</p><p>Depending of the type of map data, only a subset of the options is used. For example, when working with WMS data, all the stroke, label and fill style settings will be ignored.</p>
*/
export class PublicVisualAnalyticsMapDataLayerStyleDTO {
    /**
    * Controls the visibility of the layer
    */
    'visible'?: boolean;
    /**
    * The opacity of the layer. This is a value between 0 (= transparent) and 1 (= opaque).
    */
    'opacity'?: number;
    /**
    * The brightness of the layer. This is a value between 0 (= dark) and 1 (= bright).
    */
    'brightness'?: number;
    /**
    * Controls the visibility of the layer labels
    */
    'paintLabels'?: boolean;
    /**
    * The font size for the labels
    */
    'labelFontSize'?: number;
    /**
    * The color of the labels, expressed as a hex string
    */
    'labelColor'?: string;
    /**
    * Controls the visibility of the stroke
    */
    'paintStroke'?: boolean;
    /**
    * The width of the stroke, expressed in pixels
    */
    'strokeWidth'?: number;
    /**
    * The color of the stroke, expressed as a hex string
    */
    'strokeColor'?: string;
    /**
    * Controls the visibility of the fill
    */
    'paintFill'?: boolean;
    /**
    * The color of the fill, expressed as a hex string
    */
    'fillColor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "visible",
            "baseName": "visible",
            "type": "boolean"
        },
        {
            "name": "opacity",
            "baseName": "opacity",
            "type": "number"
        },
        {
            "name": "brightness",
            "baseName": "brightness",
            "type": "number"
        },
        {
            "name": "paintLabels",
            "baseName": "paintLabels",
            "type": "boolean"
        },
        {
            "name": "labelFontSize",
            "baseName": "labelFontSize",
            "type": "number"
        },
        {
            "name": "labelColor",
            "baseName": "labelColor",
            "type": "string"
        },
        {
            "name": "paintStroke",
            "baseName": "paintStroke",
            "type": "boolean"
        },
        {
            "name": "strokeWidth",
            "baseName": "strokeWidth",
            "type": "number"
        },
        {
            "name": "strokeColor",
            "baseName": "strokeColor",
            "type": "string"
        },
        {
            "name": "paintFill",
            "baseName": "paintFill",
            "type": "boolean"
        },
        {
            "name": "fillColor",
            "baseName": "fillColor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PublicVisualAnalyticsMapDataLayerStyleDTO.attributeTypeMap;
    }
}
