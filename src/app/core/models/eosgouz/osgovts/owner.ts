import { Organization } from "./organization";
import { Person } from "./person";

export interface Owner {
    person?: Person;
    organization?: Organization;
    applicantIsOwner: boolean;
}