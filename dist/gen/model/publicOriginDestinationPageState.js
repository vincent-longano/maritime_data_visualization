"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicOriginDestinationPageState = void 0;
/**
* The state of the origin destination page
*/
class PublicOriginDestinationPageState {
    static getAttributeTypeMap() {
        return PublicOriginDestinationPageState.attributeTypeMap;
    }
}
exports.PublicOriginDestinationPageState = PublicOriginDestinationPageState;
PublicOriginDestinationPageState.discriminator = undefined;
PublicOriginDestinationPageState.attributeTypeMap = [
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
    }
];
(function (PublicOriginDestinationPageState) {
    let ModeEnum;
    (function (ModeEnum) {
        ModeEnum[ModeEnum["NumberOfTrips"] = 'NUMBER_OF_TRIPS'] = "NumberOfTrips";
        ModeEnum[ModeEnum["PercentageOfTripsSameOrigin"] = 'PERCENTAGE_OF_TRIPS_SAME_ORIGIN'] = "PercentageOfTripsSameOrigin";
        ModeEnum[ModeEnum["PercentageOfTripsSameDestination"] = 'PERCENTAGE_OF_TRIPS_SAME_DESTINATION'] = "PercentageOfTripsSameDestination";
        ModeEnum[ModeEnum["AverageTravelTime"] = 'AVERAGE_TRAVEL_TIME'] = "AverageTravelTime";
    })(ModeEnum = PublicOriginDestinationPageState.ModeEnum || (PublicOriginDestinationPageState.ModeEnum = {}));
})(PublicOriginDestinationPageState = exports.PublicOriginDestinationPageState || (exports.PublicOriginDestinationPageState = {}));