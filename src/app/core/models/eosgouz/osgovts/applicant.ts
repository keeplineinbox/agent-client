import { ApplicantBase } from "./applicantBase";

export interface Applicant extends ApplicantBase {
    postCode: string;
    address: string;
    citizenshipId?: number;
    ResidentOfUzb: number;
}