import { FullName } from "./fullName";
import { PassportData } from "./passportData";

export interface Person {
    passportData: PassportData;
    fullName: FullName;
    gender: string;
    birthDate?: Date;
    regionId?: number;
    DistrictId?: number;
    phoneNumber: string;
}