import { OrganizationBase } from "./organizationBase";

export interface Organization extends OrganizationBase{
    regCertificate: string;
    regCertificateIssueDate?: Date;
    bankMfo: string;
    checkingAccount: string;
}