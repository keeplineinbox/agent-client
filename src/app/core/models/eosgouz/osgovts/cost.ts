import { CostBase } from "./costBase";

export interface Cost extends CostBase{
    foreignVehicleId: number | null;
    insurancePremiumPaidToInsurer: number;
    addedInsurancePremium?: number | null;
    refundAmount?: number | null;
}