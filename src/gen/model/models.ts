import localVarRequest from 'request';

export * from './createGeoJSONLayerRequest';
export * from './createPublicBookmarkLinkRequest';
export * from './createPublicBookmarkRequest';
export * from './createPublicDataSetRequest';
export * from './createPublicDistributionAnalyticsWidgetRequest';
export * from './createPublicDocumentationWidgetRequest';
export * from './createPublicDwellTimeWidgetRequest';
export * from './createPublicGeoJSONMapDataRequest';
export * from './createPublicMapboxMapDataRequest';
export * from './createPublicMovementDataSetRequestProcessingSettings';
export * from './createPublicOriginDestinationWidgetRequest';
export * from './createPublicProjectRequest';
export * from './createPublicTrendAnalyticsWidgetRequest';
export * from './createPublicVisualAnalyticsWidgetRequest';
export * from './createPublicWMSMapDataRequest';
export * from './createPublicWidgetGroupRequest';
export * from './groupedByDayValue';
export * from './groupedByHourValue';
export * from './jWTTokenDTO';
export * from './loginRequest';
export * from './numericIntervalDistributionValue';
export * from './publicAddDataSetToProjectRequest';
export * from './publicAddMapDataToProjectRequest';
export * from './publicAnalyticsFilterDTO';
export * from './publicAreaFilterDTO';
export * from './publicAreaIdentifierDTO';
export * from './publicBookmarkDTO';
export * from './publicBookmarkLinkDTO';
export * from './publicBookmarkLinkDashboardProperties';
export * from './publicCommonAnalyticsLocalAreaPropertiesDTO';
export * from './publicDataSetDTO';
export * from './publicDataSetSpatialBoundsDTO';
export * from './publicDistributionAnalyticsDisplayPropertyOptions';
export * from './publicDistributionAnalyticsDistributionPropertyDTO';
export * from './publicDistributionAnalyticsPageState';
export * from './publicDistributionAnalyticsWidgetProperties';
export * from './publicDocumentationWidgetProperties';
export * from './publicDownloadAssetIdsDTO';
export * from './publicDownloadAssetIdsDataRequest';
export * from './publicDownloadDataFilter';
export * from './publicDownloadDistributionDTO';
export * from './publicDownloadDistributionDataProperties';
export * from './publicDownloadDistributionDataRequest';
export * from './publicDownloadDwellTimeDTO';
export * from './publicDownloadDwellTimeDataProperties';
export * from './publicDownloadDwellTimeDataRequest';
export * from './publicDownloadNumericIntervalDistributionDTO';
export * from './publicDownloadOriginDestinationDTO';
export * from './publicDownloadOriginDestinationDataProperties';
export * from './publicDownloadOriginDestinationDataRequest';
export * from './publicDownloadStringDistributionDTO';
export * from './publicDownloadTableDTO';
export * from './publicDownloadTableDataProperties';
export * from './publicDownloadTableDataRequest';
export * from './publicDownloadTrendDTO';
export * from './publicDownloadTrendDataProperties';
export * from './publicDownloadTrendDataRequest';
export * from './publicDwellTimeAreaPropertiesDTO';
export * from './publicDwellTimePageState';
export * from './publicDwellTimeWidgetProperties';
export * from './publicIndividualDwellTimeSequenceDiagramPropertiesDTO';
export * from './publicIndividualDwellTimeTableColumnSortInfo';
export * from './publicIndividualDwellTimeTablePropertiesDTO';
export * from './publicMapDataDTO';
export * from './publicNumericPropertyFilterDTO';
export * from './publicOriginDestinationAreaPropertiesDTO';
export * from './publicOriginDestinationPageState';
export * from './publicOriginDestinationWidgetProperties';
export * from './publicProjectDTO';
export * from './publicPropertyIdentifierDTO';
export * from './publicSingleAreaDwellTimeAnalysisSummaryDTO';
export * from './publicSingleAssetSingleAreaDwellTimeAnalysisResultDTO';
export * from './publicSingleIndividualAreaVisitDTO';
export * from './publicSpatialBounds';
export * from './publicStringEnumPropertyFilterDTO';
export * from './publicTemporalFilterDTO';
export * from './publicTemporalRangeFilterDTO';
export * from './publicTemporalSingleRangeFilterDTO';
export * from './publicTrendAnalyticsDisplayPropertyOptions';
export * from './publicTrendAnalyticsHistogramPropertyDTO';
export * from './publicTrendAnalyticsPageState';
export * from './publicTrendAnalyticsWidgetProperties';
export * from './publicTrendDwellTimeAnalysisDTO';
export * from './publicVisualAnalyticsAdditiveColorMapDTO';
export * from './publicVisualAnalyticsColorPaletteDTO';
export * from './publicVisualAnalyticsDataSetProperties';
export * from './publicVisualAnalyticsDistributionPropertyDTO';
export * from './publicVisualAnalyticsDistributionWidgetProperties';
export * from './publicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO';
export * from './publicVisualAnalyticsGradientColorMapDTO';
export * from './publicVisualAnalyticsGriddedDisplayOptions';
export * from './publicVisualAnalyticsGriddedPerComputedPropertyStylingDTO';
export * from './publicVisualAnalyticsGriddedSpatialMapPropertyOptions';
export * from './publicVisualAnalyticsIconStyle';
export * from './publicVisualAnalyticsIntervalColorMapDTO';
export * from './publicVisualAnalyticsMapDataLayerStyleDTO';
export * from './publicVisualAnalyticsNamedHeatmapDTO';
export * from './publicVisualAnalyticsPageState';
export * from './publicVisualAnalyticsPerPropertyStylingDTO';
export * from './publicVisualAnalyticsRealtimeDisplayOptions';
export * from './publicVisualAnalyticsRealtimePerComputedPropertyStylingDTO';
export * from './publicVisualAnalyticsRealtimeSpatialMapPropertyOptions';
export * from './publicVisualAnalyticsSingleMapState';
export * from './publicVisualAnalyticsSingleTimelineDefaultUISettings';
export * from './publicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings';
export * from './publicVisualAnalyticsSingleTimelineProperty';
export * from './publicVisualAnalyticsSpatialMapPropertiesDTO';
export * from './publicVisualAnalyticsSpatialMapPropertyDTO';
export * from './publicVisualAnalyticsTableColumnSortInfo';
export * from './publicVisualAnalyticsTableProperties';
export * from './publicVisualAnalyticsTableViewColumnDTO';
export * from './publicVisualAnalyticsTableViewWidgetProperties';
export * from './publicVisualAnalyticsTimeLineDisplayPropertyOptions';
export * from './publicVisualAnalyticsTimeLinePropertiesDTO';
export * from './publicVisualAnalyticsTimeLinePropertyDTO';
export * from './publicVisualAnalyticsTrajectoriesDisplayOptions';
export * from './publicVisualAnalyticsTrajectoriesIconLayerSettings';
export * from './publicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO';
export * from './publicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions';
export * from './publicVisualAnalyticsWidgetProperties';
export * from './publicWidgetDTO';
export * from './publicWidgetGroupDTO';
export * from './stringDistributionValue';
export * from './ungroupedValue';
export * from './uploadGeoJSONImagesRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { CreateGeoJSONLayerRequest } from './createGeoJSONLayerRequest';
import { CreatePublicBookmarkLinkRequest } from './createPublicBookmarkLinkRequest';
import { CreatePublicBookmarkRequest } from './createPublicBookmarkRequest';
import { CreatePublicDataSetRequest } from './createPublicDataSetRequest';
import { CreatePublicDistributionAnalyticsWidgetRequest } from './createPublicDistributionAnalyticsWidgetRequest';
import { CreatePublicDocumentationWidgetRequest } from './createPublicDocumentationWidgetRequest';
import { CreatePublicDwellTimeWidgetRequest } from './createPublicDwellTimeWidgetRequest';
import { CreatePublicGeoJSONMapDataRequest } from './createPublicGeoJSONMapDataRequest';
import { CreatePublicMapboxMapDataRequest } from './createPublicMapboxMapDataRequest';
import { CreatePublicMovementDataSetRequestProcessingSettings } from './createPublicMovementDataSetRequestProcessingSettings';
import { CreatePublicOriginDestinationWidgetRequest } from './createPublicOriginDestinationWidgetRequest';
import { CreatePublicProjectRequest } from './createPublicProjectRequest';
import { CreatePublicTrendAnalyticsWidgetRequest } from './createPublicTrendAnalyticsWidgetRequest';
import { CreatePublicVisualAnalyticsWidgetRequest } from './createPublicVisualAnalyticsWidgetRequest';
import { CreatePublicWMSMapDataRequest } from './createPublicWMSMapDataRequest';
import { CreatePublicWidgetGroupRequest } from './createPublicWidgetGroupRequest';
import { GroupedByDayValue } from './groupedByDayValue';
import { GroupedByHourValue } from './groupedByHourValue';
import { JWTTokenDTO } from './jWTTokenDTO';
import { LoginRequest } from './loginRequest';
import { NumericIntervalDistributionValue } from './numericIntervalDistributionValue';
import { PublicAddDataSetToProjectRequest } from './publicAddDataSetToProjectRequest';
import { PublicAddMapDataToProjectRequest } from './publicAddMapDataToProjectRequest';
import { PublicAnalyticsFilterDTO } from './publicAnalyticsFilterDTO';
import { PublicAreaFilterDTO } from './publicAreaFilterDTO';
import { PublicAreaIdentifierDTO } from './publicAreaIdentifierDTO';
import { PublicBookmarkDTO } from './publicBookmarkDTO';
import { PublicBookmarkLinkDTO } from './publicBookmarkLinkDTO';
import { PublicBookmarkLinkDashboardProperties } from './publicBookmarkLinkDashboardProperties';
import { PublicCommonAnalyticsLocalAreaPropertiesDTO } from './publicCommonAnalyticsLocalAreaPropertiesDTO';
import { PublicDataSetDTO } from './publicDataSetDTO';
import { PublicDataSetSpatialBoundsDTO } from './publicDataSetSpatialBoundsDTO';
import { PublicDistributionAnalyticsDisplayPropertyOptions } from './publicDistributionAnalyticsDisplayPropertyOptions';
import { PublicDistributionAnalyticsDistributionPropertyDTO } from './publicDistributionAnalyticsDistributionPropertyDTO';
import { PublicDistributionAnalyticsPageState } from './publicDistributionAnalyticsPageState';
import { PublicDistributionAnalyticsWidgetProperties } from './publicDistributionAnalyticsWidgetProperties';
import { PublicDocumentationWidgetProperties } from './publicDocumentationWidgetProperties';
import { PublicDownloadAssetIdsDTO } from './publicDownloadAssetIdsDTO';
import { PublicDownloadAssetIdsDataRequest } from './publicDownloadAssetIdsDataRequest';
import { PublicDownloadDataFilter } from './publicDownloadDataFilter';
import { PublicDownloadDistributionDTO } from './publicDownloadDistributionDTO';
import { PublicDownloadDistributionDataProperties } from './publicDownloadDistributionDataProperties';
import { PublicDownloadDistributionDataRequest } from './publicDownloadDistributionDataRequest';
import { PublicDownloadDwellTimeDTO } from './publicDownloadDwellTimeDTO';
import { PublicDownloadDwellTimeDataProperties } from './publicDownloadDwellTimeDataProperties';
import { PublicDownloadDwellTimeDataRequest } from './publicDownloadDwellTimeDataRequest';
import { PublicDownloadNumericIntervalDistributionDTO } from './publicDownloadNumericIntervalDistributionDTO';
import { PublicDownloadOriginDestinationDTO } from './publicDownloadOriginDestinationDTO';
import { PublicDownloadOriginDestinationDataProperties } from './publicDownloadOriginDestinationDataProperties';
import { PublicDownloadOriginDestinationDataRequest } from './publicDownloadOriginDestinationDataRequest';
import { PublicDownloadStringDistributionDTO } from './publicDownloadStringDistributionDTO';
import { PublicDownloadTableDTO } from './publicDownloadTableDTO';
import { PublicDownloadTableDataProperties } from './publicDownloadTableDataProperties';
import { PublicDownloadTableDataRequest } from './publicDownloadTableDataRequest';
import { PublicDownloadTrendDTO } from './publicDownloadTrendDTO';
import { PublicDownloadTrendDataProperties } from './publicDownloadTrendDataProperties';
import { PublicDownloadTrendDataRequest } from './publicDownloadTrendDataRequest';
import { PublicDwellTimeAreaPropertiesDTO } from './publicDwellTimeAreaPropertiesDTO';
import { PublicDwellTimePageState } from './publicDwellTimePageState';
import { PublicDwellTimeWidgetProperties } from './publicDwellTimeWidgetProperties';
import { PublicIndividualDwellTimeSequenceDiagramPropertiesDTO } from './publicIndividualDwellTimeSequenceDiagramPropertiesDTO';
import { PublicIndividualDwellTimeTableColumnSortInfo } from './publicIndividualDwellTimeTableColumnSortInfo';
import { PublicIndividualDwellTimeTablePropertiesDTO } from './publicIndividualDwellTimeTablePropertiesDTO';
import { PublicMapDataDTO } from './publicMapDataDTO';
import { PublicNumericPropertyFilterDTO } from './publicNumericPropertyFilterDTO';
import { PublicOriginDestinationAreaPropertiesDTO } from './publicOriginDestinationAreaPropertiesDTO';
import { PublicOriginDestinationPageState } from './publicOriginDestinationPageState';
import { PublicOriginDestinationWidgetProperties } from './publicOriginDestinationWidgetProperties';
import { PublicProjectDTO } from './publicProjectDTO';
import { PublicPropertyIdentifierDTO } from './publicPropertyIdentifierDTO';
import { PublicSingleAreaDwellTimeAnalysisSummaryDTO } from './publicSingleAreaDwellTimeAnalysisSummaryDTO';
import { PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO } from './publicSingleAssetSingleAreaDwellTimeAnalysisResultDTO';
import { PublicSingleIndividualAreaVisitDTO } from './publicSingleIndividualAreaVisitDTO';
import { PublicSpatialBounds } from './publicSpatialBounds';
import { PublicStringEnumPropertyFilterDTO } from './publicStringEnumPropertyFilterDTO';
import { PublicTemporalFilterDTO } from './publicTemporalFilterDTO';
import { PublicTemporalRangeFilterDTO } from './publicTemporalRangeFilterDTO';
import { PublicTemporalSingleRangeFilterDTO } from './publicTemporalSingleRangeFilterDTO';
import { PublicTrendAnalyticsDisplayPropertyOptions } from './publicTrendAnalyticsDisplayPropertyOptions';
import { PublicTrendAnalyticsHistogramPropertyDTO } from './publicTrendAnalyticsHistogramPropertyDTO';
import { PublicTrendAnalyticsPageState } from './publicTrendAnalyticsPageState';
import { PublicTrendAnalyticsWidgetProperties } from './publicTrendAnalyticsWidgetProperties';
import { PublicTrendDwellTimeAnalysisDTO } from './publicTrendDwellTimeAnalysisDTO';
import { PublicVisualAnalyticsAdditiveColorMapDTO } from './publicVisualAnalyticsAdditiveColorMapDTO';
import { PublicVisualAnalyticsColorPaletteDTO } from './publicVisualAnalyticsColorPaletteDTO';
import { PublicVisualAnalyticsDataSetProperties } from './publicVisualAnalyticsDataSetProperties';
import { PublicVisualAnalyticsDistributionPropertyDTO } from './publicVisualAnalyticsDistributionPropertyDTO';
import { PublicVisualAnalyticsDistributionWidgetProperties } from './publicVisualAnalyticsDistributionWidgetProperties';
import { PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO } from './publicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO';
import { PublicVisualAnalyticsGradientColorMapDTO } from './publicVisualAnalyticsGradientColorMapDTO';
import { PublicVisualAnalyticsGriddedDisplayOptions } from './publicVisualAnalyticsGriddedDisplayOptions';
import { PublicVisualAnalyticsGriddedPerComputedPropertyStylingDTO } from './publicVisualAnalyticsGriddedPerComputedPropertyStylingDTO';
import { PublicVisualAnalyticsGriddedSpatialMapPropertyOptions } from './publicVisualAnalyticsGriddedSpatialMapPropertyOptions';
import { PublicVisualAnalyticsIconStyle } from './publicVisualAnalyticsIconStyle';
import { PublicVisualAnalyticsIntervalColorMapDTO } from './publicVisualAnalyticsIntervalColorMapDTO';
import { PublicVisualAnalyticsMapDataLayerStyleDTO } from './publicVisualAnalyticsMapDataLayerStyleDTO';
import { PublicVisualAnalyticsNamedHeatmapDTO } from './publicVisualAnalyticsNamedHeatmapDTO';
import { PublicVisualAnalyticsPageState } from './publicVisualAnalyticsPageState';
import { PublicVisualAnalyticsPerPropertyStylingDTO } from './publicVisualAnalyticsPerPropertyStylingDTO';
import { PublicVisualAnalyticsRealtimeDisplayOptions } from './publicVisualAnalyticsRealtimeDisplayOptions';
import { PublicVisualAnalyticsRealtimePerComputedPropertyStylingDTO } from './publicVisualAnalyticsRealtimePerComputedPropertyStylingDTO';
import { PublicVisualAnalyticsRealtimeSpatialMapPropertyOptions } from './publicVisualAnalyticsRealtimeSpatialMapPropertyOptions';
import { PublicVisualAnalyticsSingleMapState } from './publicVisualAnalyticsSingleMapState';
import { PublicVisualAnalyticsSingleTimelineDefaultUISettings } from './publicVisualAnalyticsSingleTimelineDefaultUISettings';
import { PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings } from './publicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings';
import { PublicVisualAnalyticsSingleTimelineProperty } from './publicVisualAnalyticsSingleTimelineProperty';
import { PublicVisualAnalyticsSpatialMapPropertiesDTO } from './publicVisualAnalyticsSpatialMapPropertiesDTO';
import { PublicVisualAnalyticsSpatialMapPropertyDTO } from './publicVisualAnalyticsSpatialMapPropertyDTO';
import { PublicVisualAnalyticsTableColumnSortInfo } from './publicVisualAnalyticsTableColumnSortInfo';
import { PublicVisualAnalyticsTableProperties } from './publicVisualAnalyticsTableProperties';
import { PublicVisualAnalyticsTableViewColumnDTO } from './publicVisualAnalyticsTableViewColumnDTO';
import { PublicVisualAnalyticsTableViewWidgetProperties } from './publicVisualAnalyticsTableViewWidgetProperties';
import { PublicVisualAnalyticsTimeLineDisplayPropertyOptions } from './publicVisualAnalyticsTimeLineDisplayPropertyOptions';
import { PublicVisualAnalyticsTimeLinePropertiesDTO } from './publicVisualAnalyticsTimeLinePropertiesDTO';
import { PublicVisualAnalyticsTimeLinePropertyDTO } from './publicVisualAnalyticsTimeLinePropertyDTO';
import { PublicVisualAnalyticsTrajectoriesDisplayOptions } from './publicVisualAnalyticsTrajectoriesDisplayOptions';
import { PublicVisualAnalyticsTrajectoriesIconLayerSettings } from './publicVisualAnalyticsTrajectoriesIconLayerSettings';
import { PublicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO } from './publicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO';
import { PublicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions } from './publicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions';
import { PublicVisualAnalyticsWidgetProperties } from './publicVisualAnalyticsWidgetProperties';
import { PublicWidgetDTO } from './publicWidgetDTO';
import { PublicWidgetGroupDTO } from './publicWidgetGroupDTO';
import { StringDistributionValue } from './stringDistributionValue';
import { UngroupedValue } from './ungroupedValue';
import { UploadGeoJSONImagesRequest } from './uploadGeoJSONImagesRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CreatePublicBookmarkLinkRequest.PageEnum": CreatePublicBookmarkLinkRequest.PageEnum,
        "CreatePublicBookmarkLinkRequest.ThemeEnum": CreatePublicBookmarkLinkRequest.ThemeEnum,
        "CreatePublicDataSetRequest.TypeEnum": CreatePublicDataSetRequest.TypeEnum,
        "CreatePublicGeoJSONMapDataRequest.TypeEnum": CreatePublicGeoJSONMapDataRequest.TypeEnum,
        "CreatePublicMapboxMapDataRequest.TypeEnum": CreatePublicMapboxMapDataRequest.TypeEnum,
        "GroupedByDayValue.DayEnum": GroupedByDayValue.DayEnum,
        "PublicAreaFilterDTO.FilteringModeEnum": PublicAreaFilterDTO.FilteringModeEnum,
        "PublicAreaIdentifierDTO.SourceEnum": PublicAreaIdentifierDTO.SourceEnum,
        "PublicDataSetDTO.VisualizationModesEnum": PublicDataSetDTO.VisualizationModesEnum,
        "PublicDataSetDTO.StateEnum": PublicDataSetDTO.StateEnum,
        "PublicDataSetDTO.TypeEnum": PublicDataSetDTO.TypeEnum,
        "PublicDistributionAnalyticsWidgetProperties.WidgetTypeEnum": PublicDistributionAnalyticsWidgetProperties.WidgetTypeEnum,
        "PublicDownloadDistributionDTO.DistributionTypeEnum": PublicDownloadDistributionDTO.DistributionTypeEnum,
        "PublicDownloadDwellTimeDTO.TypeEnum": PublicDownloadDwellTimeDTO.TypeEnum,
        "PublicDownloadDwellTimeDataProperties.TypeEnum": PublicDownloadDwellTimeDataProperties.TypeEnum,
        "PublicDownloadOriginDestinationDTO.ModeEnum": PublicDownloadOriginDestinationDTO.ModeEnum,
        "PublicDownloadOriginDestinationDataProperties.ModeEnum": PublicDownloadOriginDestinationDataProperties.ModeEnum,
        "PublicDownloadTrendDTO.GroupingModeEnum": PublicDownloadTrendDTO.GroupingModeEnum,
        "PublicDownloadTrendDataProperties.ModeEnum": PublicDownloadTrendDataProperties.ModeEnum,
        "PublicDownloadTrendDataProperties.GroupingModeEnum": PublicDownloadTrendDataProperties.GroupingModeEnum,
        "PublicDwellTimePageState.TypeEnum": PublicDwellTimePageState.TypeEnum,
        "PublicDwellTimeWidgetProperties.WidgetTypeEnum": PublicDwellTimeWidgetProperties.WidgetTypeEnum,
        "PublicIndividualDwellTimeTableColumnSortInfo.ColumnIdEnum": PublicIndividualDwellTimeTableColumnSortInfo.ColumnIdEnum,
        "PublicIndividualDwellTimeTableColumnSortInfo.SortOrderEnum": PublicIndividualDwellTimeTableColumnSortInfo.SortOrderEnum,
        "PublicMapDataDTO.SourceEnum": PublicMapDataDTO.SourceEnum,
        "PublicMapDataDTO.TypeEnum": PublicMapDataDTO.TypeEnum,
        "PublicOriginDestinationPageState.ModeEnum": PublicOriginDestinationPageState.ModeEnum,
        "PublicOriginDestinationWidgetProperties.WidgetTypeEnum": PublicOriginDestinationWidgetProperties.WidgetTypeEnum,
        "PublicTemporalFilterDTO.DaysOfWeekEnum": PublicTemporalFilterDTO.DaysOfWeekEnum,
        "PublicTemporalFilterDTO.MonthsOfYearEnum": PublicTemporalFilterDTO.MonthsOfYearEnum,
        "PublicTemporalRangeFilterDTO.StartTimeTypeEnum": PublicTemporalRangeFilterDTO.StartTimeTypeEnum,
        "PublicTemporalRangeFilterDTO.EndTimeTypeEnum": PublicTemporalRangeFilterDTO.EndTimeTypeEnum,
        "PublicTemporalSingleRangeFilterDTO.StartTimeTypeEnum": PublicTemporalSingleRangeFilterDTO.StartTimeTypeEnum,
        "PublicTemporalSingleRangeFilterDTO.EndTimeTypeEnum": PublicTemporalSingleRangeFilterDTO.EndTimeTypeEnum,
        "PublicTrendAnalyticsDisplayPropertyOptions.AggregationModeEnum": PublicTrendAnalyticsDisplayPropertyOptions.AggregationModeEnum,
        "PublicTrendAnalyticsHistogramPropertyDTO.AggregationModesEnum": PublicTrendAnalyticsHistogramPropertyDTO.AggregationModesEnum,
        "PublicTrendAnalyticsPageState.ModeEnum": PublicTrendAnalyticsPageState.ModeEnum,
        "PublicTrendAnalyticsPageState.ChartTypeEnum": PublicTrendAnalyticsPageState.ChartTypeEnum,
        "PublicTrendAnalyticsPageState.GroupingModeEnum": PublicTrendAnalyticsPageState.GroupingModeEnum,
        "PublicTrendAnalyticsWidgetProperties.WidgetTypeEnum": PublicTrendAnalyticsWidgetProperties.WidgetTypeEnum,
        "PublicVisualAnalyticsDataSetProperties.VisualizationModeEnum": PublicVisualAnalyticsDataSetProperties.VisualizationModeEnum,
        "PublicVisualAnalyticsDistributionWidgetProperties.DistributionWidgetModeEnum": PublicVisualAnalyticsDistributionWidgetProperties.DistributionWidgetModeEnum,
        "PublicVisualAnalyticsGriddedDisplayOptions.ModeEnum": PublicVisualAnalyticsGriddedDisplayOptions.ModeEnum,
        "PublicVisualAnalyticsGriddedSpatialMapPropertyOptions.AggregationModeEnum": PublicVisualAnalyticsGriddedSpatialMapPropertyOptions.AggregationModeEnum,
        "PublicVisualAnalyticsIconStyle.StandardIconEnum": PublicVisualAnalyticsIconStyle.StandardIconEnum,
        "PublicVisualAnalyticsNamedHeatmapDTO.NameEnum": PublicVisualAnalyticsNamedHeatmapDTO.NameEnum,
        "PublicVisualAnalyticsRealtimeDisplayOptions.ModeEnum": PublicVisualAnalyticsRealtimeDisplayOptions.ModeEnum,
        "PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings.ChartTypeEnum": PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings.ChartTypeEnum,
        "PublicVisualAnalyticsSingleTimelineProperty.ModeEnum": PublicVisualAnalyticsSingleTimelineProperty.ModeEnum,
        "PublicVisualAnalyticsSpatialMapPropertyDTO.GriddedAggregationModesEnum": PublicVisualAnalyticsSpatialMapPropertyDTO.GriddedAggregationModesEnum,
        "PublicVisualAnalyticsTableColumnSortInfo.SortOrderEnum": PublicVisualAnalyticsTableColumnSortInfo.SortOrderEnum,
        "PublicVisualAnalyticsTimeLineDisplayPropertyOptions.AggregationModeEnum": PublicVisualAnalyticsTimeLineDisplayPropertyOptions.AggregationModeEnum,
        "PublicVisualAnalyticsTimeLinePropertyDTO.AggregationModesEnum": PublicVisualAnalyticsTimeLinePropertyDTO.AggregationModesEnum,
        "PublicVisualAnalyticsTrajectoriesDisplayOptions.ModeEnum": PublicVisualAnalyticsTrajectoriesDisplayOptions.ModeEnum,
        "PublicVisualAnalyticsWidgetProperties.WidgetTypeEnum": PublicVisualAnalyticsWidgetProperties.WidgetTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "CreateGeoJSONLayerRequest": CreateGeoJSONLayerRequest,
    "CreatePublicBookmarkLinkRequest": CreatePublicBookmarkLinkRequest,
    "CreatePublicBookmarkRequest": CreatePublicBookmarkRequest,
    "CreatePublicDataSetRequest": CreatePublicDataSetRequest,
    "CreatePublicDistributionAnalyticsWidgetRequest": CreatePublicDistributionAnalyticsWidgetRequest,
    "CreatePublicDocumentationWidgetRequest": CreatePublicDocumentationWidgetRequest,
    "CreatePublicDwellTimeWidgetRequest": CreatePublicDwellTimeWidgetRequest,
    "CreatePublicGeoJSONMapDataRequest": CreatePublicGeoJSONMapDataRequest,
    "CreatePublicMapboxMapDataRequest": CreatePublicMapboxMapDataRequest,
    "CreatePublicMovementDataSetRequestProcessingSettings": CreatePublicMovementDataSetRequestProcessingSettings,
    "CreatePublicOriginDestinationWidgetRequest": CreatePublicOriginDestinationWidgetRequest,
    "CreatePublicProjectRequest": CreatePublicProjectRequest,
    "CreatePublicTrendAnalyticsWidgetRequest": CreatePublicTrendAnalyticsWidgetRequest,
    "CreatePublicVisualAnalyticsWidgetRequest": CreatePublicVisualAnalyticsWidgetRequest,
    "CreatePublicWMSMapDataRequest": CreatePublicWMSMapDataRequest,
    "CreatePublicWidgetGroupRequest": CreatePublicWidgetGroupRequest,
    "GroupedByDayValue": GroupedByDayValue,
    "GroupedByHourValue": GroupedByHourValue,
    "JWTTokenDTO": JWTTokenDTO,
    "LoginRequest": LoginRequest,
    "NumericIntervalDistributionValue": NumericIntervalDistributionValue,
    "PublicAddDataSetToProjectRequest": PublicAddDataSetToProjectRequest,
    "PublicAddMapDataToProjectRequest": PublicAddMapDataToProjectRequest,
    "PublicAnalyticsFilterDTO": PublicAnalyticsFilterDTO,
    "PublicAreaFilterDTO": PublicAreaFilterDTO,
    "PublicAreaIdentifierDTO": PublicAreaIdentifierDTO,
    "PublicBookmarkDTO": PublicBookmarkDTO,
    "PublicBookmarkLinkDTO": PublicBookmarkLinkDTO,
    "PublicBookmarkLinkDashboardProperties": PublicBookmarkLinkDashboardProperties,
    "PublicCommonAnalyticsLocalAreaPropertiesDTO": PublicCommonAnalyticsLocalAreaPropertiesDTO,
    "PublicDataSetDTO": PublicDataSetDTO,
    "PublicDataSetSpatialBoundsDTO": PublicDataSetSpatialBoundsDTO,
    "PublicDistributionAnalyticsDisplayPropertyOptions": PublicDistributionAnalyticsDisplayPropertyOptions,
    "PublicDistributionAnalyticsDistributionPropertyDTO": PublicDistributionAnalyticsDistributionPropertyDTO,
    "PublicDistributionAnalyticsPageState": PublicDistributionAnalyticsPageState,
    "PublicDistributionAnalyticsWidgetProperties": PublicDistributionAnalyticsWidgetProperties,
    "PublicDocumentationWidgetProperties": PublicDocumentationWidgetProperties,
    "PublicDownloadAssetIdsDTO": PublicDownloadAssetIdsDTO,
    "PublicDownloadAssetIdsDataRequest": PublicDownloadAssetIdsDataRequest,
    "PublicDownloadDataFilter": PublicDownloadDataFilter,
    "PublicDownloadDistributionDTO": PublicDownloadDistributionDTO,
    "PublicDownloadDistributionDataProperties": PublicDownloadDistributionDataProperties,
    "PublicDownloadDistributionDataRequest": PublicDownloadDistributionDataRequest,
    "PublicDownloadDwellTimeDTO": PublicDownloadDwellTimeDTO,
    "PublicDownloadDwellTimeDataProperties": PublicDownloadDwellTimeDataProperties,
    "PublicDownloadDwellTimeDataRequest": PublicDownloadDwellTimeDataRequest,
    "PublicDownloadNumericIntervalDistributionDTO": PublicDownloadNumericIntervalDistributionDTO,
    "PublicDownloadOriginDestinationDTO": PublicDownloadOriginDestinationDTO,
    "PublicDownloadOriginDestinationDataProperties": PublicDownloadOriginDestinationDataProperties,
    "PublicDownloadOriginDestinationDataRequest": PublicDownloadOriginDestinationDataRequest,
    "PublicDownloadStringDistributionDTO": PublicDownloadStringDistributionDTO,
    "PublicDownloadTableDTO": PublicDownloadTableDTO,
    "PublicDownloadTableDataProperties": PublicDownloadTableDataProperties,
    "PublicDownloadTableDataRequest": PublicDownloadTableDataRequest,
    "PublicDownloadTrendDTO": PublicDownloadTrendDTO,
    "PublicDownloadTrendDataProperties": PublicDownloadTrendDataProperties,
    "PublicDownloadTrendDataRequest": PublicDownloadTrendDataRequest,
    "PublicDwellTimeAreaPropertiesDTO": PublicDwellTimeAreaPropertiesDTO,
    "PublicDwellTimePageState": PublicDwellTimePageState,
    "PublicDwellTimeWidgetProperties": PublicDwellTimeWidgetProperties,
    "PublicIndividualDwellTimeSequenceDiagramPropertiesDTO": PublicIndividualDwellTimeSequenceDiagramPropertiesDTO,
    "PublicIndividualDwellTimeTableColumnSortInfo": PublicIndividualDwellTimeTableColumnSortInfo,
    "PublicIndividualDwellTimeTablePropertiesDTO": PublicIndividualDwellTimeTablePropertiesDTO,
    "PublicMapDataDTO": PublicMapDataDTO,
    "PublicNumericPropertyFilterDTO": PublicNumericPropertyFilterDTO,
    "PublicOriginDestinationAreaPropertiesDTO": PublicOriginDestinationAreaPropertiesDTO,
    "PublicOriginDestinationPageState": PublicOriginDestinationPageState,
    "PublicOriginDestinationWidgetProperties": PublicOriginDestinationWidgetProperties,
    "PublicProjectDTO": PublicProjectDTO,
    "PublicPropertyIdentifierDTO": PublicPropertyIdentifierDTO,
    "PublicSingleAreaDwellTimeAnalysisSummaryDTO": PublicSingleAreaDwellTimeAnalysisSummaryDTO,
    "PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO": PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO,
    "PublicSingleIndividualAreaVisitDTO": PublicSingleIndividualAreaVisitDTO,
    "PublicSpatialBounds": PublicSpatialBounds,
    "PublicStringEnumPropertyFilterDTO": PublicStringEnumPropertyFilterDTO,
    "PublicTemporalFilterDTO": PublicTemporalFilterDTO,
    "PublicTemporalRangeFilterDTO": PublicTemporalRangeFilterDTO,
    "PublicTemporalSingleRangeFilterDTO": PublicTemporalSingleRangeFilterDTO,
    "PublicTrendAnalyticsDisplayPropertyOptions": PublicTrendAnalyticsDisplayPropertyOptions,
    "PublicTrendAnalyticsHistogramPropertyDTO": PublicTrendAnalyticsHistogramPropertyDTO,
    "PublicTrendAnalyticsPageState": PublicTrendAnalyticsPageState,
    "PublicTrendAnalyticsWidgetProperties": PublicTrendAnalyticsWidgetProperties,
    "PublicTrendDwellTimeAnalysisDTO": PublicTrendDwellTimeAnalysisDTO,
    "PublicVisualAnalyticsAdditiveColorMapDTO": PublicVisualAnalyticsAdditiveColorMapDTO,
    "PublicVisualAnalyticsColorPaletteDTO": PublicVisualAnalyticsColorPaletteDTO,
    "PublicVisualAnalyticsDataSetProperties": PublicVisualAnalyticsDataSetProperties,
    "PublicVisualAnalyticsDistributionPropertyDTO": PublicVisualAnalyticsDistributionPropertyDTO,
    "PublicVisualAnalyticsDistributionWidgetProperties": PublicVisualAnalyticsDistributionWidgetProperties,
    "PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO": PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO,
    "PublicVisualAnalyticsGradientColorMapDTO": PublicVisualAnalyticsGradientColorMapDTO,
    "PublicVisualAnalyticsGriddedDisplayOptions": PublicVisualAnalyticsGriddedDisplayOptions,
    "PublicVisualAnalyticsGriddedPerComputedPropertyStylingDTO": PublicVisualAnalyticsGriddedPerComputedPropertyStylingDTO,
    "PublicVisualAnalyticsGriddedSpatialMapPropertyOptions": PublicVisualAnalyticsGriddedSpatialMapPropertyOptions,
    "PublicVisualAnalyticsIconStyle": PublicVisualAnalyticsIconStyle,
    "PublicVisualAnalyticsIntervalColorMapDTO": PublicVisualAnalyticsIntervalColorMapDTO,
    "PublicVisualAnalyticsMapDataLayerStyleDTO": PublicVisualAnalyticsMapDataLayerStyleDTO,
    "PublicVisualAnalyticsNamedHeatmapDTO": PublicVisualAnalyticsNamedHeatmapDTO,
    "PublicVisualAnalyticsPageState": PublicVisualAnalyticsPageState,
    "PublicVisualAnalyticsPerPropertyStylingDTO": PublicVisualAnalyticsPerPropertyStylingDTO,
    "PublicVisualAnalyticsRealtimeDisplayOptions": PublicVisualAnalyticsRealtimeDisplayOptions,
    "PublicVisualAnalyticsRealtimePerComputedPropertyStylingDTO": PublicVisualAnalyticsRealtimePerComputedPropertyStylingDTO,
    "PublicVisualAnalyticsRealtimeSpatialMapPropertyOptions": PublicVisualAnalyticsRealtimeSpatialMapPropertyOptions,
    "PublicVisualAnalyticsSingleMapState": PublicVisualAnalyticsSingleMapState,
    "PublicVisualAnalyticsSingleTimelineDefaultUISettings": PublicVisualAnalyticsSingleTimelineDefaultUISettings,
    "PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings": PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings,
    "PublicVisualAnalyticsSingleTimelineProperty": PublicVisualAnalyticsSingleTimelineProperty,
    "PublicVisualAnalyticsSpatialMapPropertiesDTO": PublicVisualAnalyticsSpatialMapPropertiesDTO,
    "PublicVisualAnalyticsSpatialMapPropertyDTO": PublicVisualAnalyticsSpatialMapPropertyDTO,
    "PublicVisualAnalyticsTableColumnSortInfo": PublicVisualAnalyticsTableColumnSortInfo,
    "PublicVisualAnalyticsTableProperties": PublicVisualAnalyticsTableProperties,
    "PublicVisualAnalyticsTableViewColumnDTO": PublicVisualAnalyticsTableViewColumnDTO,
    "PublicVisualAnalyticsTableViewWidgetProperties": PublicVisualAnalyticsTableViewWidgetProperties,
    "PublicVisualAnalyticsTimeLineDisplayPropertyOptions": PublicVisualAnalyticsTimeLineDisplayPropertyOptions,
    "PublicVisualAnalyticsTimeLinePropertiesDTO": PublicVisualAnalyticsTimeLinePropertiesDTO,
    "PublicVisualAnalyticsTimeLinePropertyDTO": PublicVisualAnalyticsTimeLinePropertyDTO,
    "PublicVisualAnalyticsTrajectoriesDisplayOptions": PublicVisualAnalyticsTrajectoriesDisplayOptions,
    "PublicVisualAnalyticsTrajectoriesIconLayerSettings": PublicVisualAnalyticsTrajectoriesIconLayerSettings,
    "PublicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO": PublicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO,
    "PublicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions": PublicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions,
    "PublicVisualAnalyticsWidgetProperties": PublicVisualAnalyticsWidgetProperties,
    "PublicWidgetDTO": PublicWidgetDTO,
    "PublicWidgetGroupDTO": PublicWidgetGroupDTO,
    "StringDistributionValue": StringDistributionValue,
    "UngroupedValue": UngroupedValue,
    "UploadGeoJSONImagesRequest": UploadGeoJSONImagesRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
