// import { Guid } from "guid-typescript";
import { InsuranceFormBase } from "./insuranceFormBase";

export interface InsuranceForm extends InsuranceFormBase {
    uuid?: string;
    status?: number;
    isElectronic?: boolean;
}