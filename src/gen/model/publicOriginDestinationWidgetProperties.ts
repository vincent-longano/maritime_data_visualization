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
* The properties specific to the origin destination widget
*/
export class PublicOriginDestinationWidgetProperties {
    /**
    * <p>The type of widget to create.</p><p>When using <code>SECOND_MATRIX</code> or <code>COMPARISON_MATRIX</code>, you need to define 2 <code>timeRanges</code> in the page state.</p>
    */
    'widgetType'?: PublicOriginDestinationWidgetProperties.WidgetTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "widgetType",
            "baseName": "widgetType",
            "type": "PublicOriginDestinationWidgetProperties.WidgetTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PublicOriginDestinationWidgetProperties.attributeTypeMap;
    }
}

export namespace PublicOriginDestinationWidgetProperties {
    export enum WidgetTypeEnum {
        FirstMatrix = <any> 'FIRST_MATRIX',
        SecondMatrix = <any> 'SECOND_MATRIX',
        ComparisonMatrix = <any> 'COMPARISON_MATRIX'
    }
}
