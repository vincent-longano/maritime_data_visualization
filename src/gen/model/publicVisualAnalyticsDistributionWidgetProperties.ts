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
* <p>Defines the properties specific to a distribution widget.</p><p>This property must be provided when the <code>widgetType</code> is set to <code>DISTRIBUTION</code>.</p>
*/
export class PublicVisualAnalyticsDistributionWidgetProperties {
    /**
    * The id of the data set of the distribution widget
    */
    'dataSetId': string;
    /**
    * <p>Defines the mode of the distribution widget.The widget can show the number of assets, the ids or the distribution of a specific property.</p>
    */
    'distributionWidgetMode'?: PublicVisualAnalyticsDistributionWidgetProperties.DistributionWidgetModeEnum;
    /**
    * <p>Defines which property is shown on the distribution widget.This must be one of the supported properties of the active data set of the map for which the widget is created.</p><p>This property must be provided when the <code>distributionWidgetMode</code> to <code>SHOW_PROPERTY</code>.
    */
    'distributionPropertyId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dataSetId",
            "baseName": "dataSetId",
            "type": "string"
        },
        {
            "name": "distributionWidgetMode",
            "baseName": "distributionWidgetMode",
            "type": "PublicVisualAnalyticsDistributionWidgetProperties.DistributionWidgetModeEnum"
        },
        {
            "name": "distributionPropertyId",
            "baseName": "distributionPropertyId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PublicVisualAnalyticsDistributionWidgetProperties.attributeTypeMap;
    }
}

export namespace PublicVisualAnalyticsDistributionWidgetProperties {
    export enum DistributionWidgetModeEnum {
        NumberOfAssets = <any> 'SHOW_NUMBER_OF_ASSETS',
        Ids = <any> 'SHOW_IDS',
        Property = <any> 'SHOW_PROPERTY'
    }
}