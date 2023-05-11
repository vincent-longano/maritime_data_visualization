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

export class PublicMapDataDTO {
    /**
    * The unique identifier of the mapdata
    */
    'id': string;
    /**
    * The human readable name of the mapdata
    */
    'name': string;
    /**
    * The description of the mapdata
    */
    'description': string;
    /**
    * The source of the mapdata
    */
    'source': PublicMapDataDTO.SourceEnum;
    /**
    * The type of mapdata
    */
    'type': PublicMapDataDTO.TypeEnum;
    /**
    * Indicates whether you are the owner of this resource. When the resource is not owned by you, some operations on it will not work.
    */
    'owned': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "PublicMapDataDTO.SourceEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PublicMapDataDTO.TypeEnum"
        },
        {
            "name": "owned",
            "baseName": "owned",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PublicMapDataDTO.attributeTypeMap;
    }
}

export namespace PublicMapDataDTO {
    export enum SourceEnum {
        File = <any> 'FILE',
        Mapbox = <any> 'MAPBOX',
        Wms = <any> 'WMS'
    }
    export enum TypeEnum {
        Background = <any> 'BACKGROUND',
        Areaofinterest = <any> 'AREAOFINTEREST'
    }
}
