
export interface PersonInfo {
    pinfl: string;
    document: string;
    lastNameLatin: string;
    firstNameLatin: string; 
    middleNameLatin: string; 
    lastNameEng: string; 
    firstEng: string; 
    birthDate?: Date;
    birthPlace: string; 
    birthCountry: string; 
    liveStatus: string; 
    nationality: string; 
    citizenship: string; 
    gender: string; 
    issuedBy: string; 
    startDate?: Date;
    endDate?: Date;
    regionId?: number;
    districtId?: number;
    address: string;
    isPensioner: boolean;
}