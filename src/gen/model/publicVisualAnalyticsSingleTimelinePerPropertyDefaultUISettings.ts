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
* The UI settings specific to the properties on the timeline. The first item are the settings for the first property on the timeline, the second item are the settings for the second on the timeline, ... .
*/
export class PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings {
    /**
    * The type of chart
    */
    'chartType'?: PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings.ChartTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chartType",
            "baseName": "chartType",
            "type": "PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings.ChartTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings.attributeTypeMap;
    }
}

export namespace PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings {
    export enum ChartTypeEnum {
        BarChart = <any> 'BAR_CHART',
        LineChart = <any> 'LINE_CHART'
    }
}
