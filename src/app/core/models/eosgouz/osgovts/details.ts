import { DetailsBase } from "./detailsBase";

export interface Details extends DetailsBase {
    paymentDate: Date;
    seria: string;
    number: string;
}