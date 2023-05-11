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
exports.GroupedByDayValue = void 0;
/**
* The trend values grouped by day. Only available when the <code>groupingMode</code> is set to <code>GROUP_BY_DAY</code>.
*/
class GroupedByDayValue {
    static getAttributeTypeMap() {
        return GroupedByDayValue.attributeTypeMap;
    }
}
exports.GroupedByDayValue = GroupedByDayValue;
GroupedByDayValue.discriminator = undefined;
GroupedByDayValue.attributeTypeMap = [
    {
        "name": "day",
        "baseName": "day",
        "type": "GroupedByDayValue.DayEnum"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    }
];
(function (GroupedByDayValue) {
    let DayEnum;
    (function (DayEnum) {
        DayEnum[DayEnum["Monday"] = 'Monday'] = "Monday";
        DayEnum[DayEnum["Tuesday"] = 'Tuesday'] = "Tuesday";
        DayEnum[DayEnum["Wednesday"] = 'Wednesday'] = "Wednesday";
        DayEnum[DayEnum["Thursday"] = 'Thursday'] = "Thursday";
        DayEnum[DayEnum["Friday"] = 'Friday'] = "Friday";
        DayEnum[DayEnum["Saturday"] = 'Saturday'] = "Saturday";
        DayEnum[DayEnum["Sunday"] = 'Sunday'] = "Sunday";
    })(DayEnum = GroupedByDayValue.DayEnum || (GroupedByDayValue.DayEnum = {}));
})(GroupedByDayValue = exports.GroupedByDayValue || (exports.GroupedByDayValue = {}));