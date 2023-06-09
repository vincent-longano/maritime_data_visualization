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

export class PublicDownloadOriginDestinationDTO {
    /**
    * <p>The mappings from the origin areas ids to the destinations and their value</p><p>The key in the first map is the origin area id.</p><p>The corresponding value is another map where the key is the destination area id and the value is the matrix value for the origin-destination pair.</p>
    */
    'originToDestinationsMapping': { [key: string]: { [key: string]: number; }; };
    /**
    * The property used in the matrix
    */
    'mode': PublicDownloadOriginDestinationDTO.ModeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "originToDestinationsMapping",
            "baseName": "originToDestinationsMapping",
            "type": "{ [key: string]: { [key: string]: number; }; }"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "PublicDownloadOriginDestinationDTO.ModeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PublicDownloadOriginDestinationDTO.attributeTypeMap;
    }
}

export namespace PublicDownloadOriginDestinationDTO {
    export enum ModeEnum {
        NumberOfTrips = <any> 'NUMBER_OF_TRIPS',
        PercentageOfTripsSameOrigin = <any> 'PERCENTAGE_OF_TRIPS_SAME_ORIGIN',
        PercentageOfTripsSameDestination = <any> 'PERCENTAGE_OF_TRIPS_SAME_DESTINATION',
        AverageTravelTime = <any> 'AVERAGE_TRAVEL_TIME'
    }
}
