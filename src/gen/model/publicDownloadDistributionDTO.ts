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
import { PublicDownloadNumericIntervalDistributionDTO } from './publicDownloadNumericIntervalDistributionDTO';
import { PublicDownloadStringDistributionDTO } from './publicDownloadStringDistributionDTO';

export class PublicDownloadDistributionDTO {
    /**
    * The type of the distribution.
    */
    'distributionType': PublicDownloadDistributionDTO.DistributionTypeEnum;
    'numericIntervalDistribution'?: PublicDownloadNumericIntervalDistributionDTO;
    'stringDistribution'?: PublicDownloadStringDistributionDTO;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "distributionType",
            "baseName": "distributionType",
            "type": "PublicDownloadDistributionDTO.DistributionTypeEnum"
        },
        {
            "name": "numericIntervalDistribution",
            "baseName": "numericIntervalDistribution",
            "type": "PublicDownloadNumericIntervalDistributionDTO"
        },
        {
            "name": "stringDistribution",
            "baseName": "stringDistribution",
            "type": "PublicDownloadStringDistributionDTO"
        }    ];

    static getAttributeTypeMap() {
        return PublicDownloadDistributionDTO.attributeTypeMap;
    }
}

export namespace PublicDownloadDistributionDTO {
    export enum DistributionTypeEnum {
        NumericIntervalProperty = <any> 'NUMERIC_INTERVAL_PROPERTY',
        StringProperty = <any> 'STRING_PROPERTY'
    }
}
