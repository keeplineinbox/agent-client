import { Organization } from "./organization";
import { Person } from "./person";

export interface ApplicantBase {
    person?: Person;
    organization?: Organization;
}