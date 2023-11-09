import { FullName } from "./fullName";
import { PassportData } from "./passportData";

export interface DriverBase {
    passportData: PassportData;
    fullName: FullName;
    licenseNumber: string;
    licenseSeria: string;
    licenseIssueDate?: Date;
    birthDate: Date;
    relative: number;
    residentOfUzb: number;
}