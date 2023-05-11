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
* The properties specific to the dwell time widget
*/
export class PublicDwellTimeWidgetProperties {
    /**
    * The type of widget to create
    */
    'widgetType'?: PublicDwellTimeWidgetProperties.WidgetTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "widgetType",
            "baseName": "widgetType",
            "type": "PublicDwellTimeWidgetProperties.WidgetTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PublicDwellTimeWidgetProperties.attributeTypeMap;
    }
}

export namespace PublicDwellTimeWidgetProperties {
    export enum WidgetTypeEnum {
        AverageDwellTimes = <any> 'AVERAGE_DWELL_TIMES',
        AverageDwellTimesTrend = <any> 'AVERAGE_DWELL_TIMES_TREND',
        IndividualDwellTimesTable = <any> 'INDIVIDUAL_DWELL_TIMES_TABLE',
        IndividualDwellTimesSequenceDiagram = <any> 'INDIVIDUAL_DWELL_TIMES_SEQUENCE_DIAGRAM'
    }
}
