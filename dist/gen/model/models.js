"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./createGeoJSONLayerRequest"), exports);
__exportStar(require("./createPublicBookmarkLinkRequest"), exports);
__exportStar(require("./createPublicBookmarkRequest"), exports);
__exportStar(require("./createPublicDataSetRequest"), exports);
__exportStar(require("./createPublicDistributionAnalyticsWidgetRequest"), exports);
__exportStar(require("./createPublicDocumentationWidgetRequest"), exports);
__exportStar(require("./createPublicDwellTimeWidgetRequest"), exports);
__exportStar(require("./createPublicGeoJSONMapDataRequest"), exports);
__exportStar(require("./createPublicMapboxMapDataRequest"), exports);
__exportStar(require("./createPublicMovementDataSetRequestProcessingSettings"), exports);
__exportStar(require("./createPublicOriginDestinationWidgetRequest"), exports);
__exportStar(require("./createPublicProjectRequest"), exports);
__exportStar(require("./createPublicTrendAnalyticsWidgetRequest"), exports);
__exportStar(require("./createPublicVisualAnalyticsWidgetRequest"), exports);
__exportStar(require("./createPublicWMSMapDataRequest"), exports);
__exportStar(require("./createPublicWidgetGroupRequest"), exports);
__exportStar(require("./groupedByDayValue"), exports);
__exportStar(require("./groupedByHourValue"), exports);
__exportStar(require("./jWTTokenDTO"), exports);
__exportStar(require("./loginRequest"), exports);
__exportStar(require("./numericIntervalDistributionValue"), exports);
__exportStar(require("./publicAddDataSetToProjectRequest"), exports);
__exportStar(require("./publicAddMapDataToProjectRequest"), exports);
__exportStar(require("./publicAnalyticsFilterDTO"), exports);
__exportStar(require("./publicAreaFilterDTO"), exports);
__exportStar(require("./publicAreaIdentifierDTO"), exports);
__exportStar(require("./publicBookmarkDTO"), exports);
__exportStar(require("./publicBookmarkLinkDTO"), exports);
__exportStar(require("./publicBookmarkLinkDashboardProperties"), exports);
__exportStar(require("./publicCommonAnalyticsLocalAreaPropertiesDTO"), exports);
__exportStar(require("./publicDataSetDTO"), exports);
__exportStar(require("./publicDataSetSpatialBoundsDTO"), exports);
__exportStar(require("./publicDistributionAnalyticsDisplayPropertyOptions"), exports);
__exportStar(require("./publicDistributionAnalyticsDistributionPropertyDTO"), exports);
__exportStar(require("./publicDistributionAnalyticsPageState"), exports);
__exportStar(require("./publicDistributionAnalyticsWidgetProperties"), exports);
__exportStar(require("./publicDocumentationWidgetProperties"), exports);
__exportStar(require("./publicDownloadAssetIdsDTO"), exports);
__exportStar(require("./publicDownloadAssetIdsDataRequest"), exports);
__exportStar(require("./publicDownloadDataFilter"), exports);
__exportStar(require("./publicDownloadDistributionDTO"), exports);
__exportStar(require("./publicDownloadDistributionDataProperties"), exports);
__exportStar(require("./publicDownloadDistributionDataRequest"), exports);
__exportStar(require("./publicDownloadDwellTimeDTO"), exports);
__exportStar(require("./publicDownloadDwellTimeDataProperties"), exports);
__exportStar(require("./publicDownloadDwellTimeDataRequest"), exports);
__exportStar(require("./publicDownloadNumericIntervalDistributionDTO"), exports);
__exportStar(require("./publicDownloadOriginDestinationDTO"), exports);
__exportStar(require("./publicDownloadOriginDestinationDataProperties"), exports);
__exportStar(require("./publicDownloadOriginDestinationDataRequest"), exports);
__exportStar(require("./publicDownloadStringDistributionDTO"), exports);
__exportStar(require("./publicDownloadTableDTO"), exports);
__exportStar(require("./publicDownloadTableDataProperties"), exports);
__exportStar(require("./publicDownloadTableDataRequest"), exports);
__exportStar(require("./publicDownloadTrendDTO"), exports);
__exportStar(require("./publicDownloadTrendDataProperties"), exports);
__exportStar(require("./publicDownloadTrendDataRequest"), exports);
__exportStar(require("./publicDwellTimeAreaPropertiesDTO"), exports);
__exportStar(require("./publicDwellTimePageState"), exports);
__exportStar(require("./publicDwellTimeWidgetProperties"), exports);
__exportStar(require("./publicIndividualDwellTimeSequenceDiagramPropertiesDTO"), exports);
__exportStar(require("./publicIndividualDwellTimeTableColumnSortInfo"), exports);
__exportStar(require("./publicIndividualDwellTimeTablePropertiesDTO"), exports);
__exportStar(require("./publicMapDataDTO"), exports);
__exportStar(require("./publicNumericPropertyFilterDTO"), exports);
__exportStar(require("./publicOriginDestinationAreaPropertiesDTO"), exports);
__exportStar(require("./publicOriginDestinationPageState"), exports);
__exportStar(require("./publicOriginDestinationWidgetProperties"), exports);
__exportStar(require("./publicProjectDTO"), exports);
__exportStar(require("./publicPropertyIdentifierDTO"), exports);
__exportStar(require("./publicSingleAreaDwellTimeAnalysisSummaryDTO"), exports);
__exportStar(require("./publicSingleAssetSingleAreaDwellTimeAnalysisResultDTO"), exports);
__exportStar(require("./publicSingleIndividualAreaVisitDTO"), exports);
__exportStar(require("./publicSpatialBounds"), exports);
__exportStar(require("./publicStringEnumPropertyFilterDTO"), exports);
__exportStar(require("./publicTemporalFilterDTO"), exports);
__exportStar(require("./publicTemporalRangeFilterDTO"), exports);
__exportStar(require("./publicTemporalSingleRangeFilterDTO"), exports);
__exportStar(require("./publicTrendAnalyticsDisplayPropertyOptions"), exports);
__exportStar(require("./publicTrendAnalyticsHistogramPropertyDTO"), exports);
__exportStar(require("./publicTrendAnalyticsPageState"), exports);
__exportStar(require("./publicTrendAnalyticsWidgetProperties"), exports);
__exportStar(require("./publicTrendDwellTimeAnalysisDTO"), exports);
__exportStar(require("./publicVisualAnalyticsAdditiveColorMapDTO"), exports);
__exportStar(require("./publicVisualAnalyticsColorPaletteDTO"), exports);
__exportStar(require("./publicVisualAnalyticsDataSetProperties"), exports);
__exportStar(require("./publicVisualAnalyticsDistributionPropertyDTO"), exports);
__exportStar(require("./publicVisualAnalyticsDistributionWidgetProperties"), exports);
__exportStar(require("./publicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO"), exports);
__exportStar(require("./publicVisualAnalyticsGradientColorMapDTO"), exports);
__exportStar(require("./publicVisualAnalyticsGriddedDisplayOptions"), exports);
__exportStar(require("./publicVisualAnalyticsGriddedPerComputedPropertyStylingDTO"), exports);
__exportStar(require("./publicVisualAnalyticsGriddedSpatialMapPropertyOptions"), exports);
__exportStar(require("./publicVisualAnalyticsIconStyle"), exports);
__exportStar(require("./publicVisualAnalyticsIntervalColorMapDTO"), exports);
__exportStar(require("./publicVisualAnalyticsMapDataLayerStyleDTO"), exports);
__exportStar(require("./publicVisualAnalyticsNamedHeatmapDTO"), exports);
__exportStar(require("./publicVisualAnalyticsPageState"), exports);
__exportStar(require("./publicVisualAnalyticsPerPropertyStylingDTO"), exports);
__exportStar(require("./publicVisualAnalyticsRealtimeDisplayOptions"), exports);
__exportStar(require("./publicVisualAnalyticsRealtimePerComputedPropertyStylingDTO"), exports);
__exportStar(require("./publicVisualAnalyticsRealtimeSpatialMapPropertyOptions"), exports);
__exportStar(require("./publicVisualAnalyticsSingleMapState"), exports);
__exportStar(require("./publicVisualAnalyticsSingleTimelineDefaultUISettings"), exports);
__exportStar(require("./publicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings"), exports);
__exportStar(require("./publicVisualAnalyticsSingleTimelineProperty"), exports);
__exportStar(require("./publicVisualAnalyticsSpatialMapPropertiesDTO"), exports);
__exportStar(require("./publicVisualAnalyticsSpatialMapPropertyDTO"), exports);
__exportStar(require("./publicVisualAnalyticsTableColumnSortInfo"), exports);
__exportStar(require("./publicVisualAnalyticsTableProperties"), exports);
__exportStar(require("./publicVisualAnalyticsTableViewColumnDTO"), exports);
__exportStar(require("./publicVisualAnalyticsTableViewWidgetProperties"), exports);
__exportStar(require("./publicVisualAnalyticsTimeLineDisplayPropertyOptions"), exports);
__exportStar(require("./publicVisualAnalyticsTimeLinePropertiesDTO"), exports);
__exportStar(require("./publicVisualAnalyticsTimeLinePropertyDTO"), exports);
__exportStar(require("./publicVisualAnalyticsTrajectoriesDisplayOptions"), exports);
__exportStar(require("./publicVisualAnalyticsTrajectoriesIconLayerSettings"), exports);
__exportStar(require("./publicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO"), exports);
__exportStar(require("./publicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions"), exports);
__exportStar(require("./publicVisualAnalyticsWidgetProperties"), exports);
__exportStar(require("./publicWidgetDTO"), exports);
__exportStar(require("./publicWidgetGroupDTO"), exports);
__exportStar(require("./stringDistributionValue"), exports);
__exportStar(require("./ungroupedValue"), exports);
__exportStar(require("./uploadGeoJSONImagesRequest"), exports);
const createGeoJSONLayerRequest_1 = require("./createGeoJSONLayerRequest");
const createPublicBookmarkLinkRequest_1 = require("./createPublicBookmarkLinkRequest");
const createPublicBookmarkRequest_1 = require("./createPublicBookmarkRequest");
const createPublicDataSetRequest_1 = require("./createPublicDataSetRequest");
const createPublicDistributionAnalyticsWidgetRequest_1 = require("./createPublicDistributionAnalyticsWidgetRequest");
const createPublicDocumentationWidgetRequest_1 = require("./createPublicDocumentationWidgetRequest");
const createPublicDwellTimeWidgetRequest_1 = require("./createPublicDwellTimeWidgetRequest");
const createPublicGeoJSONMapDataRequest_1 = require("./createPublicGeoJSONMapDataRequest");
const createPublicMapboxMapDataRequest_1 = require("./createPublicMapboxMapDataRequest");
const createPublicMovementDataSetRequestProcessingSettings_1 = require("./createPublicMovementDataSetRequestProcessingSettings");
const createPublicOriginDestinationWidgetRequest_1 = require("./createPublicOriginDestinationWidgetRequest");
const createPublicProjectRequest_1 = require("./createPublicProjectRequest");
const createPublicTrendAnalyticsWidgetRequest_1 = require("./createPublicTrendAnalyticsWidgetRequest");
const createPublicVisualAnalyticsWidgetRequest_1 = require("./createPublicVisualAnalyticsWidgetRequest");
const createPublicWMSMapDataRequest_1 = require("./createPublicWMSMapDataRequest");
const createPublicWidgetGroupRequest_1 = require("./createPublicWidgetGroupRequest");
const groupedByDayValue_1 = require("./groupedByDayValue");
const groupedByHourValue_1 = require("./groupedByHourValue");
const jWTTokenDTO_1 = require("./jWTTokenDTO");
const loginRequest_1 = require("./loginRequest");
const numericIntervalDistributionValue_1 = require("./numericIntervalDistributionValue");
const publicAddDataSetToProjectRequest_1 = require("./publicAddDataSetToProjectRequest");
const publicAddMapDataToProjectRequest_1 = require("./publicAddMapDataToProjectRequest");
const publicAnalyticsFilterDTO_1 = require("./publicAnalyticsFilterDTO");
const publicAreaFilterDTO_1 = require("./publicAreaFilterDTO");
const publicAreaIdentifierDTO_1 = require("./publicAreaIdentifierDTO");
const publicBookmarkDTO_1 = require("./publicBookmarkDTO");
const publicBookmarkLinkDTO_1 = require("./publicBookmarkLinkDTO");
const publicBookmarkLinkDashboardProperties_1 = require("./publicBookmarkLinkDashboardProperties");
const publicCommonAnalyticsLocalAreaPropertiesDTO_1 = require("./publicCommonAnalyticsLocalAreaPropertiesDTO");
const publicDataSetDTO_1 = require("./publicDataSetDTO");
const publicDataSetSpatialBoundsDTO_1 = require("./publicDataSetSpatialBoundsDTO");
const publicDistributionAnalyticsDisplayPropertyOptions_1 = require("./publicDistributionAnalyticsDisplayPropertyOptions");
const publicDistributionAnalyticsDistributionPropertyDTO_1 = require("./publicDistributionAnalyticsDistributionPropertyDTO");
const publicDistributionAnalyticsPageState_1 = require("./publicDistributionAnalyticsPageState");
const publicDistributionAnalyticsWidgetProperties_1 = require("./publicDistributionAnalyticsWidgetProperties");
const publicDocumentationWidgetProperties_1 = require("./publicDocumentationWidgetProperties");
const publicDownloadAssetIdsDTO_1 = require("./publicDownloadAssetIdsDTO");
const publicDownloadAssetIdsDataRequest_1 = require("./publicDownloadAssetIdsDataRequest");
const publicDownloadDataFilter_1 = require("./publicDownloadDataFilter");
const publicDownloadDistributionDTO_1 = require("./publicDownloadDistributionDTO");
const publicDownloadDistributionDataProperties_1 = require("./publicDownloadDistributionDataProperties");
const publicDownloadDistributionDataRequest_1 = require("./publicDownloadDistributionDataRequest");
const publicDownloadDwellTimeDTO_1 = require("./publicDownloadDwellTimeDTO");
const publicDownloadDwellTimeDataProperties_1 = require("./publicDownloadDwellTimeDataProperties");
const publicDownloadDwellTimeDataRequest_1 = require("./publicDownloadDwellTimeDataRequest");
const publicDownloadNumericIntervalDistributionDTO_1 = require("./publicDownloadNumericIntervalDistributionDTO");
const publicDownloadOriginDestinationDTO_1 = require("./publicDownloadOriginDestinationDTO");
const publicDownloadOriginDestinationDataProperties_1 = require("./publicDownloadOriginDestinationDataProperties");
const publicDownloadOriginDestinationDataRequest_1 = require("./publicDownloadOriginDestinationDataRequest");
const publicDownloadStringDistributionDTO_1 = require("./publicDownloadStringDistributionDTO");
const publicDownloadTableDTO_1 = require("./publicDownloadTableDTO");
const publicDownloadTableDataProperties_1 = require("./publicDownloadTableDataProperties");
const publicDownloadTableDataRequest_1 = require("./publicDownloadTableDataRequest");
const publicDownloadTrendDTO_1 = require("./publicDownloadTrendDTO");
const publicDownloadTrendDataProperties_1 = require("./publicDownloadTrendDataProperties");
const publicDownloadTrendDataRequest_1 = require("./publicDownloadTrendDataRequest");
const publicDwellTimeAreaPropertiesDTO_1 = require("./publicDwellTimeAreaPropertiesDTO");
const publicDwellTimePageState_1 = require("./publicDwellTimePageState");
const publicDwellTimeWidgetProperties_1 = require("./publicDwellTimeWidgetProperties");
const publicIndividualDwellTimeSequenceDiagramPropertiesDTO_1 = require("./publicIndividualDwellTimeSequenceDiagramPropertiesDTO");
const publicIndividualDwellTimeTableColumnSortInfo_1 = require("./publicIndividualDwellTimeTableColumnSortInfo");
const publicIndividualDwellTimeTablePropertiesDTO_1 = require("./publicIndividualDwellTimeTablePropertiesDTO");
const publicMapDataDTO_1 = require("./publicMapDataDTO");
const publicNumericPropertyFilterDTO_1 = require("./publicNumericPropertyFilterDTO");
const publicOriginDestinationAreaPropertiesDTO_1 = require("./publicOriginDestinationAreaPropertiesDTO");
const publicOriginDestinationPageState_1 = require("./publicOriginDestinationPageState");
const publicOriginDestinationWidgetProperties_1 = require("./publicOriginDestinationWidgetProperties");
const publicProjectDTO_1 = require("./publicProjectDTO");
const publicPropertyIdentifierDTO_1 = require("./publicPropertyIdentifierDTO");
const publicSingleAreaDwellTimeAnalysisSummaryDTO_1 = require("./publicSingleAreaDwellTimeAnalysisSummaryDTO");
const publicSingleAssetSingleAreaDwellTimeAnalysisResultDTO_1 = require("./publicSingleAssetSingleAreaDwellTimeAnalysisResultDTO");
const publicSingleIndividualAreaVisitDTO_1 = require("./publicSingleIndividualAreaVisitDTO");
const publicSpatialBounds_1 = require("./publicSpatialBounds");
const publicStringEnumPropertyFilterDTO_1 = require("./publicStringEnumPropertyFilterDTO");
const publicTemporalFilterDTO_1 = require("./publicTemporalFilterDTO");
const publicTemporalRangeFilterDTO_1 = require("./publicTemporalRangeFilterDTO");
const publicTemporalSingleRangeFilterDTO_1 = require("./publicTemporalSingleRangeFilterDTO");
const publicTrendAnalyticsDisplayPropertyOptions_1 = require("./publicTrendAnalyticsDisplayPropertyOptions");
const publicTrendAnalyticsHistogramPropertyDTO_1 = require("./publicTrendAnalyticsHistogramPropertyDTO");
const publicTrendAnalyticsPageState_1 = require("./publicTrendAnalyticsPageState");
const publicTrendAnalyticsWidgetProperties_1 = require("./publicTrendAnalyticsWidgetProperties");
const publicTrendDwellTimeAnalysisDTO_1 = require("./publicTrendDwellTimeAnalysisDTO");
const publicVisualAnalyticsAdditiveColorMapDTO_1 = require("./publicVisualAnalyticsAdditiveColorMapDTO");
const publicVisualAnalyticsColorPaletteDTO_1 = require("./publicVisualAnalyticsColorPaletteDTO");
const publicVisualAnalyticsDataSetProperties_1 = require("./publicVisualAnalyticsDataSetProperties");
const publicVisualAnalyticsDistributionPropertyDTO_1 = require("./publicVisualAnalyticsDistributionPropertyDTO");
const publicVisualAnalyticsDistributionWidgetProperties_1 = require("./publicVisualAnalyticsDistributionWidgetProperties");
const publicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO_1 = require("./publicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO");
const publicVisualAnalyticsGradientColorMapDTO_1 = require("./publicVisualAnalyticsGradientColorMapDTO");
const publicVisualAnalyticsGriddedDisplayOptions_1 = require("./publicVisualAnalyticsGriddedDisplayOptions");
const publicVisualAnalyticsGriddedPerComputedPropertyStylingDTO_1 = require("./publicVisualAnalyticsGriddedPerComputedPropertyStylingDTO");
const publicVisualAnalyticsGriddedSpatialMapPropertyOptions_1 = require("./publicVisualAnalyticsGriddedSpatialMapPropertyOptions");
const publicVisualAnalyticsIconStyle_1 = require("./publicVisualAnalyticsIconStyle");
const publicVisualAnalyticsIntervalColorMapDTO_1 = require("./publicVisualAnalyticsIntervalColorMapDTO");
const publicVisualAnalyticsMapDataLayerStyleDTO_1 = require("./publicVisualAnalyticsMapDataLayerStyleDTO");
const publicVisualAnalyticsNamedHeatmapDTO_1 = require("./publicVisualAnalyticsNamedHeatmapDTO");
const publicVisualAnalyticsPageState_1 = require("./publicVisualAnalyticsPageState");
const publicVisualAnalyticsPerPropertyStylingDTO_1 = require("./publicVisualAnalyticsPerPropertyStylingDTO");
const publicVisualAnalyticsRealtimeDisplayOptions_1 = require("./publicVisualAnalyticsRealtimeDisplayOptions");
const publicVisualAnalyticsRealtimePerComputedPropertyStylingDTO_1 = require("./publicVisualAnalyticsRealtimePerComputedPropertyStylingDTO");
const publicVisualAnalyticsRealtimeSpatialMapPropertyOptions_1 = require("./publicVisualAnalyticsRealtimeSpatialMapPropertyOptions");
const publicVisualAnalyticsSingleMapState_1 = require("./publicVisualAnalyticsSingleMapState");
const publicVisualAnalyticsSingleTimelineDefaultUISettings_1 = require("./publicVisualAnalyticsSingleTimelineDefaultUISettings");
const publicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings_1 = require("./publicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings");
const publicVisualAnalyticsSingleTimelineProperty_1 = require("./publicVisualAnalyticsSingleTimelineProperty");
const publicVisualAnalyticsSpatialMapPropertiesDTO_1 = require("./publicVisualAnalyticsSpatialMapPropertiesDTO");
const publicVisualAnalyticsSpatialMapPropertyDTO_1 = require("./publicVisualAnalyticsSpatialMapPropertyDTO");
const publicVisualAnalyticsTableColumnSortInfo_1 = require("./publicVisualAnalyticsTableColumnSortInfo");
const publicVisualAnalyticsTableProperties_1 = require("./publicVisualAnalyticsTableProperties");
const publicVisualAnalyticsTableViewColumnDTO_1 = require("./publicVisualAnalyticsTableViewColumnDTO");
const publicVisualAnalyticsTableViewWidgetProperties_1 = require("./publicVisualAnalyticsTableViewWidgetProperties");
const publicVisualAnalyticsTimeLineDisplayPropertyOptions_1 = require("./publicVisualAnalyticsTimeLineDisplayPropertyOptions");
const publicVisualAnalyticsTimeLinePropertiesDTO_1 = require("./publicVisualAnalyticsTimeLinePropertiesDTO");
const publicVisualAnalyticsTimeLinePropertyDTO_1 = require("./publicVisualAnalyticsTimeLinePropertyDTO");
const publicVisualAnalyticsTrajectoriesDisplayOptions_1 = require("./publicVisualAnalyticsTrajectoriesDisplayOptions");
const publicVisualAnalyticsTrajectoriesIconLayerSettings_1 = require("./publicVisualAnalyticsTrajectoriesIconLayerSettings");
const publicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO_1 = require("./publicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO");
const publicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions_1 = require("./publicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions");
const publicVisualAnalyticsWidgetProperties_1 = require("./publicVisualAnalyticsWidgetProperties");
const publicWidgetDTO_1 = require("./publicWidgetDTO");
const publicWidgetGroupDTO_1 = require("./publicWidgetGroupDTO");
const stringDistributionValue_1 = require("./stringDistributionValue");
const ungroupedValue_1 = require("./ungroupedValue");
const uploadGeoJSONImagesRequest_1 = require("./uploadGeoJSONImagesRequest");
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
let enumsMap = {
    "CreatePublicBookmarkLinkRequest.PageEnum": createPublicBookmarkLinkRequest_1.CreatePublicBookmarkLinkRequest.PageEnum,
    "CreatePublicBookmarkLinkRequest.ThemeEnum": createPublicBookmarkLinkRequest_1.CreatePublicBookmarkLinkRequest.ThemeEnum,
    "CreatePublicDataSetRequest.TypeEnum": createPublicDataSetRequest_1.CreatePublicDataSetRequest.TypeEnum,
    "CreatePublicGeoJSONMapDataRequest.TypeEnum": createPublicGeoJSONMapDataRequest_1.CreatePublicGeoJSONMapDataRequest.TypeEnum,
    "CreatePublicMapboxMapDataRequest.TypeEnum": createPublicMapboxMapDataRequest_1.CreatePublicMapboxMapDataRequest.TypeEnum,
    "GroupedByDayValue.DayEnum": groupedByDayValue_1.GroupedByDayValue.DayEnum,
    "PublicAreaFilterDTO.FilteringModeEnum": publicAreaFilterDTO_1.PublicAreaFilterDTO.FilteringModeEnum,
    "PublicAreaIdentifierDTO.SourceEnum": publicAreaIdentifierDTO_1.PublicAreaIdentifierDTO.SourceEnum,
    "PublicDataSetDTO.VisualizationModesEnum": publicDataSetDTO_1.PublicDataSetDTO.VisualizationModesEnum,
    "PublicDataSetDTO.StateEnum": publicDataSetDTO_1.PublicDataSetDTO.StateEnum,
    "PublicDataSetDTO.TypeEnum": publicDataSetDTO_1.PublicDataSetDTO.TypeEnum,
    "PublicDistributionAnalyticsWidgetProperties.WidgetTypeEnum": publicDistributionAnalyticsWidgetProperties_1.PublicDistributionAnalyticsWidgetProperties.WidgetTypeEnum,
    "PublicDownloadDistributionDTO.DistributionTypeEnum": publicDownloadDistributionDTO_1.PublicDownloadDistributionDTO.DistributionTypeEnum,
    "PublicDownloadDwellTimeDTO.TypeEnum": publicDownloadDwellTimeDTO_1.PublicDownloadDwellTimeDTO.TypeEnum,
    "PublicDownloadDwellTimeDataProperties.TypeEnum": publicDownloadDwellTimeDataProperties_1.PublicDownloadDwellTimeDataProperties.TypeEnum,
    "PublicDownloadOriginDestinationDTO.ModeEnum": publicDownloadOriginDestinationDTO_1.PublicDownloadOriginDestinationDTO.ModeEnum,
    "PublicDownloadOriginDestinationDataProperties.ModeEnum": publicDownloadOriginDestinationDataProperties_1.PublicDownloadOriginDestinationDataProperties.ModeEnum,
    "PublicDownloadTrendDTO.GroupingModeEnum": publicDownloadTrendDTO_1.PublicDownloadTrendDTO.GroupingModeEnum,
    "PublicDownloadTrendDataProperties.ModeEnum": publicDownloadTrendDataProperties_1.PublicDownloadTrendDataProperties.ModeEnum,
    "PublicDownloadTrendDataProperties.GroupingModeEnum": publicDownloadTrendDataProperties_1.PublicDownloadTrendDataProperties.GroupingModeEnum,
    "PublicDwellTimePageState.TypeEnum": publicDwellTimePageState_1.PublicDwellTimePageState.TypeEnum,
    "PublicDwellTimeWidgetProperties.WidgetTypeEnum": publicDwellTimeWidgetProperties_1.PublicDwellTimeWidgetProperties.WidgetTypeEnum,
    "PublicIndividualDwellTimeTableColumnSortInfo.ColumnIdEnum": publicIndividualDwellTimeTableColumnSortInfo_1.PublicIndividualDwellTimeTableColumnSortInfo.ColumnIdEnum,
    "PublicIndividualDwellTimeTableColumnSortInfo.SortOrderEnum": publicIndividualDwellTimeTableColumnSortInfo_1.PublicIndividualDwellTimeTableColumnSortInfo.SortOrderEnum,
    "PublicMapDataDTO.SourceEnum": publicMapDataDTO_1.PublicMapDataDTO.SourceEnum,
    "PublicMapDataDTO.TypeEnum": publicMapDataDTO_1.PublicMapDataDTO.TypeEnum,
    "PublicOriginDestinationPageState.ModeEnum": publicOriginDestinationPageState_1.PublicOriginDestinationPageState.ModeEnum,
    "PublicOriginDestinationWidgetProperties.WidgetTypeEnum": publicOriginDestinationWidgetProperties_1.PublicOriginDestinationWidgetProperties.WidgetTypeEnum,
    "PublicTemporalFilterDTO.DaysOfWeekEnum": publicTemporalFilterDTO_1.PublicTemporalFilterDTO.DaysOfWeekEnum,
    "PublicTemporalFilterDTO.MonthsOfYearEnum": publicTemporalFilterDTO_1.PublicTemporalFilterDTO.MonthsOfYearEnum,
    "PublicTemporalRangeFilterDTO.StartTimeTypeEnum": publicTemporalRangeFilterDTO_1.PublicTemporalRangeFilterDTO.StartTimeTypeEnum,
    "PublicTemporalRangeFilterDTO.EndTimeTypeEnum": publicTemporalRangeFilterDTO_1.PublicTemporalRangeFilterDTO.EndTimeTypeEnum,
    "PublicTemporalSingleRangeFilterDTO.StartTimeTypeEnum": publicTemporalSingleRangeFilterDTO_1.PublicTemporalSingleRangeFilterDTO.StartTimeTypeEnum,
    "PublicTemporalSingleRangeFilterDTO.EndTimeTypeEnum": publicTemporalSingleRangeFilterDTO_1.PublicTemporalSingleRangeFilterDTO.EndTimeTypeEnum,
    "PublicTrendAnalyticsDisplayPropertyOptions.AggregationModeEnum": publicTrendAnalyticsDisplayPropertyOptions_1.PublicTrendAnalyticsDisplayPropertyOptions.AggregationModeEnum,
    "PublicTrendAnalyticsHistogramPropertyDTO.AggregationModesEnum": publicTrendAnalyticsHistogramPropertyDTO_1.PublicTrendAnalyticsHistogramPropertyDTO.AggregationModesEnum,
    "PublicTrendAnalyticsPageState.ModeEnum": publicTrendAnalyticsPageState_1.PublicTrendAnalyticsPageState.ModeEnum,
    "PublicTrendAnalyticsPageState.ChartTypeEnum": publicTrendAnalyticsPageState_1.PublicTrendAnalyticsPageState.ChartTypeEnum,
    "PublicTrendAnalyticsPageState.GroupingModeEnum": publicTrendAnalyticsPageState_1.PublicTrendAnalyticsPageState.GroupingModeEnum,
    "PublicTrendAnalyticsWidgetProperties.WidgetTypeEnum": publicTrendAnalyticsWidgetProperties_1.PublicTrendAnalyticsWidgetProperties.WidgetTypeEnum,
    "PublicVisualAnalyticsDataSetProperties.VisualizationModeEnum": publicVisualAnalyticsDataSetProperties_1.PublicVisualAnalyticsDataSetProperties.VisualizationModeEnum,
    "PublicVisualAnalyticsDistributionWidgetProperties.DistributionWidgetModeEnum": publicVisualAnalyticsDistributionWidgetProperties_1.PublicVisualAnalyticsDistributionWidgetProperties.DistributionWidgetModeEnum,
    "PublicVisualAnalyticsGriddedDisplayOptions.ModeEnum": publicVisualAnalyticsGriddedDisplayOptions_1.PublicVisualAnalyticsGriddedDisplayOptions.ModeEnum,
    "PublicVisualAnalyticsGriddedSpatialMapPropertyOptions.AggregationModeEnum": publicVisualAnalyticsGriddedSpatialMapPropertyOptions_1.PublicVisualAnalyticsGriddedSpatialMapPropertyOptions.AggregationModeEnum,
    "PublicVisualAnalyticsIconStyle.StandardIconEnum": publicVisualAnalyticsIconStyle_1.PublicVisualAnalyticsIconStyle.StandardIconEnum,
    "PublicVisualAnalyticsNamedHeatmapDTO.NameEnum": publicVisualAnalyticsNamedHeatmapDTO_1.PublicVisualAnalyticsNamedHeatmapDTO.NameEnum,
    "PublicVisualAnalyticsRealtimeDisplayOptions.ModeEnum": publicVisualAnalyticsRealtimeDisplayOptions_1.PublicVisualAnalyticsRealtimeDisplayOptions.ModeEnum,
    "PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings.ChartTypeEnum": publicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings_1.PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings.ChartTypeEnum,
    "PublicVisualAnalyticsSingleTimelineProperty.ModeEnum": publicVisualAnalyticsSingleTimelineProperty_1.PublicVisualAnalyticsSingleTimelineProperty.ModeEnum,
    "PublicVisualAnalyticsSpatialMapPropertyDTO.GriddedAggregationModesEnum": publicVisualAnalyticsSpatialMapPropertyDTO_1.PublicVisualAnalyticsSpatialMapPropertyDTO.GriddedAggregationModesEnum,
    "PublicVisualAnalyticsTableColumnSortInfo.SortOrderEnum": publicVisualAnalyticsTableColumnSortInfo_1.PublicVisualAnalyticsTableColumnSortInfo.SortOrderEnum,
    "PublicVisualAnalyticsTimeLineDisplayPropertyOptions.AggregationModeEnum": publicVisualAnalyticsTimeLineDisplayPropertyOptions_1.PublicVisualAnalyticsTimeLineDisplayPropertyOptions.AggregationModeEnum,
    "PublicVisualAnalyticsTimeLinePropertyDTO.AggregationModesEnum": publicVisualAnalyticsTimeLinePropertyDTO_1.PublicVisualAnalyticsTimeLinePropertyDTO.AggregationModesEnum,
    "PublicVisualAnalyticsTrajectoriesDisplayOptions.ModeEnum": publicVisualAnalyticsTrajectoriesDisplayOptions_1.PublicVisualAnalyticsTrajectoriesDisplayOptions.ModeEnum,
    "PublicVisualAnalyticsWidgetProperties.WidgetTypeEnum": publicVisualAnalyticsWidgetProperties_1.PublicVisualAnalyticsWidgetProperties.WidgetTypeEnum,
};
let typeMap = {
    "CreateGeoJSONLayerRequest": createGeoJSONLayerRequest_1.CreateGeoJSONLayerRequest,
    "CreatePublicBookmarkLinkRequest": createPublicBookmarkLinkRequest_1.CreatePublicBookmarkLinkRequest,
    "CreatePublicBookmarkRequest": createPublicBookmarkRequest_1.CreatePublicBookmarkRequest,
    "CreatePublicDataSetRequest": createPublicDataSetRequest_1.CreatePublicDataSetRequest,
    "CreatePublicDistributionAnalyticsWidgetRequest": createPublicDistributionAnalyticsWidgetRequest_1.CreatePublicDistributionAnalyticsWidgetRequest,
    "CreatePublicDocumentationWidgetRequest": createPublicDocumentationWidgetRequest_1.CreatePublicDocumentationWidgetRequest,
    "CreatePublicDwellTimeWidgetRequest": createPublicDwellTimeWidgetRequest_1.CreatePublicDwellTimeWidgetRequest,
    "CreatePublicGeoJSONMapDataRequest": createPublicGeoJSONMapDataRequest_1.CreatePublicGeoJSONMapDataRequest,
    "CreatePublicMapboxMapDataRequest": createPublicMapboxMapDataRequest_1.CreatePublicMapboxMapDataRequest,
    "CreatePublicMovementDataSetRequestProcessingSettings": createPublicMovementDataSetRequestProcessingSettings_1.CreatePublicMovementDataSetRequestProcessingSettings,
    "CreatePublicOriginDestinationWidgetRequest": createPublicOriginDestinationWidgetRequest_1.CreatePublicOriginDestinationWidgetRequest,
    "CreatePublicProjectRequest": createPublicProjectRequest_1.CreatePublicProjectRequest,
    "CreatePublicTrendAnalyticsWidgetRequest": createPublicTrendAnalyticsWidgetRequest_1.CreatePublicTrendAnalyticsWidgetRequest,
    "CreatePublicVisualAnalyticsWidgetRequest": createPublicVisualAnalyticsWidgetRequest_1.CreatePublicVisualAnalyticsWidgetRequest,
    "CreatePublicWMSMapDataRequest": createPublicWMSMapDataRequest_1.CreatePublicWMSMapDataRequest,
    "CreatePublicWidgetGroupRequest": createPublicWidgetGroupRequest_1.CreatePublicWidgetGroupRequest,
    "GroupedByDayValue": groupedByDayValue_1.GroupedByDayValue,
    "GroupedByHourValue": groupedByHourValue_1.GroupedByHourValue,
    "JWTTokenDTO": jWTTokenDTO_1.JWTTokenDTO,
    "LoginRequest": loginRequest_1.LoginRequest,
    "NumericIntervalDistributionValue": numericIntervalDistributionValue_1.NumericIntervalDistributionValue,
    "PublicAddDataSetToProjectRequest": publicAddDataSetToProjectRequest_1.PublicAddDataSetToProjectRequest,
    "PublicAddMapDataToProjectRequest": publicAddMapDataToProjectRequest_1.PublicAddMapDataToProjectRequest,
    "PublicAnalyticsFilterDTO": publicAnalyticsFilterDTO_1.PublicAnalyticsFilterDTO,
    "PublicAreaFilterDTO": publicAreaFilterDTO_1.PublicAreaFilterDTO,
    "PublicAreaIdentifierDTO": publicAreaIdentifierDTO_1.PublicAreaIdentifierDTO,
    "PublicBookmarkDTO": publicBookmarkDTO_1.PublicBookmarkDTO,
    "PublicBookmarkLinkDTO": publicBookmarkLinkDTO_1.PublicBookmarkLinkDTO,
    "PublicBookmarkLinkDashboardProperties": publicBookmarkLinkDashboardProperties_1.PublicBookmarkLinkDashboardProperties,
    "PublicCommonAnalyticsLocalAreaPropertiesDTO": publicCommonAnalyticsLocalAreaPropertiesDTO_1.PublicCommonAnalyticsLocalAreaPropertiesDTO,
    "PublicDataSetDTO": publicDataSetDTO_1.PublicDataSetDTO,
    "PublicDataSetSpatialBoundsDTO": publicDataSetSpatialBoundsDTO_1.PublicDataSetSpatialBoundsDTO,
    "PublicDistributionAnalyticsDisplayPropertyOptions": publicDistributionAnalyticsDisplayPropertyOptions_1.PublicDistributionAnalyticsDisplayPropertyOptions,
    "PublicDistributionAnalyticsDistributionPropertyDTO": publicDistributionAnalyticsDistributionPropertyDTO_1.PublicDistributionAnalyticsDistributionPropertyDTO,
    "PublicDistributionAnalyticsPageState": publicDistributionAnalyticsPageState_1.PublicDistributionAnalyticsPageState,
    "PublicDistributionAnalyticsWidgetProperties": publicDistributionAnalyticsWidgetProperties_1.PublicDistributionAnalyticsWidgetProperties,
    "PublicDocumentationWidgetProperties": publicDocumentationWidgetProperties_1.PublicDocumentationWidgetProperties,
    "PublicDownloadAssetIdsDTO": publicDownloadAssetIdsDTO_1.PublicDownloadAssetIdsDTO,
    "PublicDownloadAssetIdsDataRequest": publicDownloadAssetIdsDataRequest_1.PublicDownloadAssetIdsDataRequest,
    "PublicDownloadDataFilter": publicDownloadDataFilter_1.PublicDownloadDataFilter,
    "PublicDownloadDistributionDTO": publicDownloadDistributionDTO_1.PublicDownloadDistributionDTO,
    "PublicDownloadDistributionDataProperties": publicDownloadDistributionDataProperties_1.PublicDownloadDistributionDataProperties,
    "PublicDownloadDistributionDataRequest": publicDownloadDistributionDataRequest_1.PublicDownloadDistributionDataRequest,
    "PublicDownloadDwellTimeDTO": publicDownloadDwellTimeDTO_1.PublicDownloadDwellTimeDTO,
    "PublicDownloadDwellTimeDataProperties": publicDownloadDwellTimeDataProperties_1.PublicDownloadDwellTimeDataProperties,
    "PublicDownloadDwellTimeDataRequest": publicDownloadDwellTimeDataRequest_1.PublicDownloadDwellTimeDataRequest,
    "PublicDownloadNumericIntervalDistributionDTO": publicDownloadNumericIntervalDistributionDTO_1.PublicDownloadNumericIntervalDistributionDTO,
    "PublicDownloadOriginDestinationDTO": publicDownloadOriginDestinationDTO_1.PublicDownloadOriginDestinationDTO,
    "PublicDownloadOriginDestinationDataProperties": publicDownloadOriginDestinationDataProperties_1.PublicDownloadOriginDestinationDataProperties,
    "PublicDownloadOriginDestinationDataRequest": publicDownloadOriginDestinationDataRequest_1.PublicDownloadOriginDestinationDataRequest,
    "PublicDownloadStringDistributionDTO": publicDownloadStringDistributionDTO_1.PublicDownloadStringDistributionDTO,
    "PublicDownloadTableDTO": publicDownloadTableDTO_1.PublicDownloadTableDTO,
    "PublicDownloadTableDataProperties": publicDownloadTableDataProperties_1.PublicDownloadTableDataProperties,
    "PublicDownloadTableDataRequest": publicDownloadTableDataRequest_1.PublicDownloadTableDataRequest,
    "PublicDownloadTrendDTO": publicDownloadTrendDTO_1.PublicDownloadTrendDTO,
    "PublicDownloadTrendDataProperties": publicDownloadTrendDataProperties_1.PublicDownloadTrendDataProperties,
    "PublicDownloadTrendDataRequest": publicDownloadTrendDataRequest_1.PublicDownloadTrendDataRequest,
    "PublicDwellTimeAreaPropertiesDTO": publicDwellTimeAreaPropertiesDTO_1.PublicDwellTimeAreaPropertiesDTO,
    "PublicDwellTimePageState": publicDwellTimePageState_1.PublicDwellTimePageState,
    "PublicDwellTimeWidgetProperties": publicDwellTimeWidgetProperties_1.PublicDwellTimeWidgetProperties,
    "PublicIndividualDwellTimeSequenceDiagramPropertiesDTO": publicIndividualDwellTimeSequenceDiagramPropertiesDTO_1.PublicIndividualDwellTimeSequenceDiagramPropertiesDTO,
    "PublicIndividualDwellTimeTableColumnSortInfo": publicIndividualDwellTimeTableColumnSortInfo_1.PublicIndividualDwellTimeTableColumnSortInfo,
    "PublicIndividualDwellTimeTablePropertiesDTO": publicIndividualDwellTimeTablePropertiesDTO_1.PublicIndividualDwellTimeTablePropertiesDTO,
    "PublicMapDataDTO": publicMapDataDTO_1.PublicMapDataDTO,
    "PublicNumericPropertyFilterDTO": publicNumericPropertyFilterDTO_1.PublicNumericPropertyFilterDTO,
    "PublicOriginDestinationAreaPropertiesDTO": publicOriginDestinationAreaPropertiesDTO_1.PublicOriginDestinationAreaPropertiesDTO,
    "PublicOriginDestinationPageState": publicOriginDestinationPageState_1.PublicOriginDestinationPageState,
    "PublicOriginDestinationWidgetProperties": publicOriginDestinationWidgetProperties_1.PublicOriginDestinationWidgetProperties,
    "PublicProjectDTO": publicProjectDTO_1.PublicProjectDTO,
    "PublicPropertyIdentifierDTO": publicPropertyIdentifierDTO_1.PublicPropertyIdentifierDTO,
    "PublicSingleAreaDwellTimeAnalysisSummaryDTO": publicSingleAreaDwellTimeAnalysisSummaryDTO_1.PublicSingleAreaDwellTimeAnalysisSummaryDTO,
    "PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO": publicSingleAssetSingleAreaDwellTimeAnalysisResultDTO_1.PublicSingleAssetSingleAreaDwellTimeAnalysisResultDTO,
    "PublicSingleIndividualAreaVisitDTO": publicSingleIndividualAreaVisitDTO_1.PublicSingleIndividualAreaVisitDTO,
    "PublicSpatialBounds": publicSpatialBounds_1.PublicSpatialBounds,
    "PublicStringEnumPropertyFilterDTO": publicStringEnumPropertyFilterDTO_1.PublicStringEnumPropertyFilterDTO,
    "PublicTemporalFilterDTO": publicTemporalFilterDTO_1.PublicTemporalFilterDTO,
    "PublicTemporalRangeFilterDTO": publicTemporalRangeFilterDTO_1.PublicTemporalRangeFilterDTO,
    "PublicTemporalSingleRangeFilterDTO": publicTemporalSingleRangeFilterDTO_1.PublicTemporalSingleRangeFilterDTO,
    "PublicTrendAnalyticsDisplayPropertyOptions": publicTrendAnalyticsDisplayPropertyOptions_1.PublicTrendAnalyticsDisplayPropertyOptions,
    "PublicTrendAnalyticsHistogramPropertyDTO": publicTrendAnalyticsHistogramPropertyDTO_1.PublicTrendAnalyticsHistogramPropertyDTO,
    "PublicTrendAnalyticsPageState": publicTrendAnalyticsPageState_1.PublicTrendAnalyticsPageState,
    "PublicTrendAnalyticsWidgetProperties": publicTrendAnalyticsWidgetProperties_1.PublicTrendAnalyticsWidgetProperties,
    "PublicTrendDwellTimeAnalysisDTO": publicTrendDwellTimeAnalysisDTO_1.PublicTrendDwellTimeAnalysisDTO,
    "PublicVisualAnalyticsAdditiveColorMapDTO": publicVisualAnalyticsAdditiveColorMapDTO_1.PublicVisualAnalyticsAdditiveColorMapDTO,
    "PublicVisualAnalyticsColorPaletteDTO": publicVisualAnalyticsColorPaletteDTO_1.PublicVisualAnalyticsColorPaletteDTO,
    "PublicVisualAnalyticsDataSetProperties": publicVisualAnalyticsDataSetProperties_1.PublicVisualAnalyticsDataSetProperties,
    "PublicVisualAnalyticsDistributionPropertyDTO": publicVisualAnalyticsDistributionPropertyDTO_1.PublicVisualAnalyticsDistributionPropertyDTO,
    "PublicVisualAnalyticsDistributionWidgetProperties": publicVisualAnalyticsDistributionWidgetProperties_1.PublicVisualAnalyticsDistributionWidgetProperties,
    "PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO": publicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO_1.PublicVisualAnalyticsFrontendAdditiveBlendingColorMapDTO,
    "PublicVisualAnalyticsGradientColorMapDTO": publicVisualAnalyticsGradientColorMapDTO_1.PublicVisualAnalyticsGradientColorMapDTO,
    "PublicVisualAnalyticsGriddedDisplayOptions": publicVisualAnalyticsGriddedDisplayOptions_1.PublicVisualAnalyticsGriddedDisplayOptions,
    "PublicVisualAnalyticsGriddedPerComputedPropertyStylingDTO": publicVisualAnalyticsGriddedPerComputedPropertyStylingDTO_1.PublicVisualAnalyticsGriddedPerComputedPropertyStylingDTO,
    "PublicVisualAnalyticsGriddedSpatialMapPropertyOptions": publicVisualAnalyticsGriddedSpatialMapPropertyOptions_1.PublicVisualAnalyticsGriddedSpatialMapPropertyOptions,
    "PublicVisualAnalyticsIconStyle": publicVisualAnalyticsIconStyle_1.PublicVisualAnalyticsIconStyle,
    "PublicVisualAnalyticsIntervalColorMapDTO": publicVisualAnalyticsIntervalColorMapDTO_1.PublicVisualAnalyticsIntervalColorMapDTO,
    "PublicVisualAnalyticsMapDataLayerStyleDTO": publicVisualAnalyticsMapDataLayerStyleDTO_1.PublicVisualAnalyticsMapDataLayerStyleDTO,
    "PublicVisualAnalyticsNamedHeatmapDTO": publicVisualAnalyticsNamedHeatmapDTO_1.PublicVisualAnalyticsNamedHeatmapDTO,
    "PublicVisualAnalyticsPageState": publicVisualAnalyticsPageState_1.PublicVisualAnalyticsPageState,
    "PublicVisualAnalyticsPerPropertyStylingDTO": publicVisualAnalyticsPerPropertyStylingDTO_1.PublicVisualAnalyticsPerPropertyStylingDTO,
    "PublicVisualAnalyticsRealtimeDisplayOptions": publicVisualAnalyticsRealtimeDisplayOptions_1.PublicVisualAnalyticsRealtimeDisplayOptions,
    "PublicVisualAnalyticsRealtimePerComputedPropertyStylingDTO": publicVisualAnalyticsRealtimePerComputedPropertyStylingDTO_1.PublicVisualAnalyticsRealtimePerComputedPropertyStylingDTO,
    "PublicVisualAnalyticsRealtimeSpatialMapPropertyOptions": publicVisualAnalyticsRealtimeSpatialMapPropertyOptions_1.PublicVisualAnalyticsRealtimeSpatialMapPropertyOptions,
    "PublicVisualAnalyticsSingleMapState": publicVisualAnalyticsSingleMapState_1.PublicVisualAnalyticsSingleMapState,
    "PublicVisualAnalyticsSingleTimelineDefaultUISettings": publicVisualAnalyticsSingleTimelineDefaultUISettings_1.PublicVisualAnalyticsSingleTimelineDefaultUISettings,
    "PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings": publicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings_1.PublicVisualAnalyticsSingleTimelinePerPropertyDefaultUISettings,
    "PublicVisualAnalyticsSingleTimelineProperty": publicVisualAnalyticsSingleTimelineProperty_1.PublicVisualAnalyticsSingleTimelineProperty,
    "PublicVisualAnalyticsSpatialMapPropertiesDTO": publicVisualAnalyticsSpatialMapPropertiesDTO_1.PublicVisualAnalyticsSpatialMapPropertiesDTO,
    "PublicVisualAnalyticsSpatialMapPropertyDTO": publicVisualAnalyticsSpatialMapPropertyDTO_1.PublicVisualAnalyticsSpatialMapPropertyDTO,
    "PublicVisualAnalyticsTableColumnSortInfo": publicVisualAnalyticsTableColumnSortInfo_1.PublicVisualAnalyticsTableColumnSortInfo,
    "PublicVisualAnalyticsTableProperties": publicVisualAnalyticsTableProperties_1.PublicVisualAnalyticsTableProperties,
    "PublicVisualAnalyticsTableViewColumnDTO": publicVisualAnalyticsTableViewColumnDTO_1.PublicVisualAnalyticsTableViewColumnDTO,
    "PublicVisualAnalyticsTableViewWidgetProperties": publicVisualAnalyticsTableViewWidgetProperties_1.PublicVisualAnalyticsTableViewWidgetProperties,
    "PublicVisualAnalyticsTimeLineDisplayPropertyOptions": publicVisualAnalyticsTimeLineDisplayPropertyOptions_1.PublicVisualAnalyticsTimeLineDisplayPropertyOptions,
    "PublicVisualAnalyticsTimeLinePropertiesDTO": publicVisualAnalyticsTimeLinePropertiesDTO_1.PublicVisualAnalyticsTimeLinePropertiesDTO,
    "PublicVisualAnalyticsTimeLinePropertyDTO": publicVisualAnalyticsTimeLinePropertyDTO_1.PublicVisualAnalyticsTimeLinePropertyDTO,
    "PublicVisualAnalyticsTrajectoriesDisplayOptions": publicVisualAnalyticsTrajectoriesDisplayOptions_1.PublicVisualAnalyticsTrajectoriesDisplayOptions,
    "PublicVisualAnalyticsTrajectoriesIconLayerSettings": publicVisualAnalyticsTrajectoriesIconLayerSettings_1.PublicVisualAnalyticsTrajectoriesIconLayerSettings,
    "PublicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO": publicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO_1.PublicVisualAnalyticsTrajectoriesPerComputedPropertyStylingDTO,
    "PublicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions": publicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions_1.PublicVisualAnalyticsTrajectoriesSpatialMapPropertyOptions,
    "PublicVisualAnalyticsWidgetProperties": publicVisualAnalyticsWidgetProperties_1.PublicVisualAnalyticsWidgetProperties,
    "PublicWidgetDTO": publicWidgetDTO_1.PublicWidgetDTO,
    "PublicWidgetGroupDTO": publicWidgetGroupDTO_1.PublicWidgetGroupDTO,
    "StringDistributionValue": stringDistributionValue_1.StringDistributionValue,
    "UngroupedValue": ungroupedValue_1.UngroupedValue,
    "UploadGeoJSONImagesRequest": uploadGeoJSONImagesRequest_1.UploadGeoJSONImagesRequest,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
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
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
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
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
