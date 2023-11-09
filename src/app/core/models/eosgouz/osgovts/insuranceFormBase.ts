import { Owner } from "./owner";
import { Applicant } from "./applicant";
import { Details } from "./details";
import { Cost } from "./cost";
import { Vehicle } from "./vehicle";
import { Driver } from "./driver";

export interface InsuranceFormBase {
    applicant: Applicant;
    owner: Owner;
    details: Details;
    cost: Cost;
    vehicle: Vehicle;
    drivers: Driver[];
}