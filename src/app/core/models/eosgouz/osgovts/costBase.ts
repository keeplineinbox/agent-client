export interface CostBase {
    discountId: number;
    discountSum?: number;
    insurancePremium?: number;
    sumInsured: number;
    contractTermConclusionId: number;
    useTerritoryId?: number;
    seasonalInsuranceId?: number;
    commission: number;
}