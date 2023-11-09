import { TechPassport } from "./techPassport";

export interface VehicleBase {
    techPassport?: TechPassport;
    modelCustomName: number;
    typeId: number;
    issueYear: string;
    govNumber: string;
    bodyNumber: string;
    engineNumber: string;
    regionId: number;
}