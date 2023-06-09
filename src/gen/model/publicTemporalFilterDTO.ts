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
* The temporal filter
*/
export class PublicTemporalFilterDTO {
    /**
    * <p>When not empty, only include records that happened at the specified hour of the day.</p><ul><li>When the list is empty, there will be no filtering on the hour of the day.</li><li>When the list is not empty, only the records that happened in one of the specified hours of the day will be included.For example when the list contains <code>[3,4,14]</code>, the records for <code>[3:00 AM, 4:00 AM[</code>, <code>[4:00 AM, 5:00 AM[</code> and <code<[14:00 (2:00PM), 15:00 (3:00PM)[</code> will be included, and all other records will be excluded.</li></ul><p>The valid hours are between 0 (inclusive) and 23 (inclusive).
    */
    'hoursOfDay': Array<number>;
    /**
    * <p>When not empty, only include records that happened at the specified day of the week.</p><ul><li>When the list is empty, there will be no filtering on the day of the week.</li><li>When the list is not empty, only the records that happened on one of the specified days of the week will be included.For example when the list contains <code>[TUESDAY,FRIDAY]</code>, only the records that happened on a Tuesday or Friday will be included.All other records will be excluded.</li></ul>
    */
    'daysOfWeek': Array<PublicTemporalFilterDTO.DaysOfWeekEnum>;
    /**
    * <p>When not empty, only include records that happened at the specified month of the year.</p><ul><li>When the list is empty, there will be no filtering on the day of the week.</li><li>When the list is not empty, only the records that happened during one of the specified months of the year will be included. For example when the list contains <code>[APRIL,JULY]</code>, only the records that happened in April or July will be included. All other records will be excluded.</li></ul>
    */
    'monthsOfYear': Array<PublicTemporalFilterDTO.MonthsOfYearEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hoursOfDay",
            "baseName": "hoursOfDay",
            "type": "Array<number>"
        },
        {
            "name": "daysOfWeek",
            "baseName": "daysOfWeek",
            "type": "Array<PublicTemporalFilterDTO.DaysOfWeekEnum>"
        },
        {
            "name": "monthsOfYear",
            "baseName": "monthsOfYear",
            "type": "Array<PublicTemporalFilterDTO.MonthsOfYearEnum>"
        }    ];

    static getAttributeTypeMap() {
        return PublicTemporalFilterDTO.attributeTypeMap;
    }
}

export namespace PublicTemporalFilterDTO {
    export enum DaysOfWeekEnum {
        Monday = <any> 'MONDAY',
        Tuesday = <any> 'TUESDAY',
        Wednesday = <any> 'WEDNESDAY',
        Thursday = <any> 'THURSDAY',
        Friday = <any> 'FRIDAY',
        Saturday = <any> 'SATURDAY',
        Sunday = <any> 'SUNDAY'
    }
    export enum MonthsOfYearEnum {
        January = <any> 'JANUARY',
        February = <any> 'FEBRUARY',
        March = <any> 'MARCH',
        April = <any> 'APRIL',
        May = <any> 'MAY',
        June = <any> 'JUNE',
        July = <any> 'JULY',
        August = <any> 'AUGUST',
        September = <any> 'SEPTEMBER',
        October = <any> 'OCTOBER',
        November = <any> 'NOVEMBER',
        December = <any> 'DECEMBER'
    }
}
