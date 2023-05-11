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
import { PublicAnalyticsFilterDTO } from './publicAnalyticsFilterDTO';
import { PublicVisualAnalyticsGriddedDisplayOptions } from './publicVisualAnalyticsGriddedDisplayOptions';
import { PublicVisualAnalyticsPerPropertyStylingDTO } from './publicVisualAnalyticsPerPropertyStylingDTO';
import { PublicVisualAnalyticsRealtimeDisplayOptions } from './publicVisualAnalyticsRealtimeDisplayOptions';
import { PublicVisualAnalyticsTrajectoriesDisplayOptions } from './publicVisualAnalyticsTrajectoriesDisplayOptions';

/**
* The styling and filtering properties for a data set.
*/
export class PublicVisualAnalyticsDataSetProperties {
    'filter'?: PublicAnalyticsFilterDTO;
    /**
    * <p>The mode in which the data is displayed.</p><p>When not specified, <code>GRIDDED</code> is used.</p>
    */
    'visualizationMode'?: PublicVisualAnalyticsDataSetProperties.VisualizationModeEnum;
    'griddedDisplayOptions'?: PublicVisualAnalyticsGriddedDisplayOptions;
    'realtimeDisplayOptions'?: PublicVisualAnalyticsRealtimeDisplayOptions;
    'trajectoriesDisplayOptions'?: PublicVisualAnalyticsTrajectoriesDisplayOptions;
    /**
    * <p>Mapping from the property id to the style information for that property.The key of the map is the id of the property, the value is the style information for that property.</p><p>Properties not included in this mapping will use default styling.</p><p>This styling is used for all data visualization modes (gridded, realtime and trajectories).</p>
    */
    'perPropertyStyling'?: { [key: string]: PublicVisualAnalyticsPerPropertyStylingDTO; };
    /**
    * <p>Some visualizations can only use a single color, which is defined here as a hex string.</p><p>For example, when visualizing the occurrence of data in gridded, realtime or trajectory mode, each occurrence is visualized in the same color.</p>
    */
    'singleHexColorStyle'?: string;
    /**
    * <p>The timezone for this data set, which is used to interpret the time filters.</p><p>For example if you specify to only include data on a Monday, the platform will interpret this as a Monday in the specified timezone</p><p>When not specified, the platform assumes the data set uses the same time zone as the timeline.</p>
    */
    'timeZoneIdentifier'?: string;
    /**
    * Controls the visibility of the layer
    */
    'visible'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "PublicAnalyticsFilterDTO"
        },
        {
            "name": "visualizationMode",
            "baseName": "visualizationMode",
            "type": "PublicVisualAnalyticsDataSetProperties.VisualizationModeEnum"
        },
        {
            "name": "griddedDisplayOptions",
            "baseName": "griddedDisplayOptions",
            "type": "PublicVisualAnalyticsGriddedDisplayOptions"
        },
        {
            "name": "realtimeDisplayOptions",
            "baseName": "realtimeDisplayOptions",
            "type": "PublicVisualAnalyticsRealtimeDisplayOptions"
        },
        {
            "name": "trajectoriesDisplayOptions",
            "baseName": "trajectoriesDisplayOptions",
            "type": "PublicVisualAnalyticsTrajectoriesDisplayOptions"
        },
        {
            "name": "perPropertyStyling",
            "baseName": "perPropertyStyling",
            "type": "{ [key: string]: PublicVisualAnalyticsPerPropertyStylingDTO; }"
        },
        {
            "name": "singleHexColorStyle",
            "baseName": "singleHexColorStyle",
            "type": "string"
        },
        {
            "name": "timeZoneIdentifier",
            "baseName": "timeZoneIdentifier",
            "type": "string"
        },
        {
            "name": "visible",
            "baseName": "visible",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PublicVisualAnalyticsDataSetProperties.attributeTypeMap;
    }
}

export namespace PublicVisualAnalyticsDataSetProperties {
    export enum VisualizationModeEnum {
        Gridded = <any> 'GRIDDED',
        Trajectories = <any> 'TRAJECTORIES',
        Realtime = <any> 'REALTIME'
    }
}