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
import { PublicOriginDestinationAreaPropertiesDTO } from './publicOriginDestinationAreaPropertiesDTO';
import { PublicTemporalRangeFilterDTO } from './publicTemporalRangeFilterDTO';

/**
* The state of the origin destination page
*/
export class PublicOriginDestinationPageState {
    /**
    * The id of the active data set
    */
    'activeDataSetId': string;
    /**
    * Determines what is shown on the origin-destination matrices
    */
    'mode'?: PublicOriginDestinationPageState.ModeEnum;
    'filter'?: PublicAnalyticsFilterDTO;
    /**
    * <p>The time zone in which the results are displayed.</p><p>When not specified, UTC is used as timezone.</p>
    */
    'timeZoneIdentifier'?: string;
    /**
    * Defines the areas to include in the origin destination matrices
    */
    'areas': Array<PublicOriginDestinationAreaPropertiesDTO>;
    /**
    * <p>Defines the time ranges.</p><ul><li>When not specified, a default time range will be used.</li><li>When a single time range is specified, a single origin destination will be shown for the specified range.</li><li>When specifying two ranges, the origin destination matrices for both ranges will be shown, as well as a comparison matrix.</li></ul>
    */
    'timeRanges'?: Array<PublicTemporalRangeFilterDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "activeDataSetId",
            "baseName": "activeDataSetId",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "PublicOriginDestinationPageState.ModeEnum"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "PublicAnalyticsFilterDTO"
        },
        {
            "name": "timeZoneIdentifier",
            "baseName": "timeZoneIdentifier",
            "type": "string"
        },
        {
            "name": "areas",
            "baseName": "areas",
            "type": "Array<PublicOriginDestinationAreaPropertiesDTO>"
        },
        {
            "name": "timeRanges",
            "baseName": "timeRanges",
            "type": "Array<PublicTemporalRangeFilterDTO>"
        }    ];

    static getAttributeTypeMap() {
        return PublicOriginDestinationPageState.attributeTypeMap;
    }
}

export namespace PublicOriginDestinationPageState {
    export enum ModeEnum {
        NumberOfTrips = <any> 'NUMBER_OF_TRIPS',
        PercentageOfTripsSameOrigin = <any> 'PERCENTAGE_OF_TRIPS_SAME_ORIGIN',
        PercentageOfTripsSameDestination = <any> 'PERCENTAGE_OF_TRIPS_SAME_DESTINATION',
        AverageTravelTime = <any> 'AVERAGE_TRAVEL_TIME'
    }
}
