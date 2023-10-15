import {Document,ObjectId} from 'mongoose';
import {ClientDocument} from "../client";
import {ProductDocument} from "../product";
import {Status} from "../../../types/common";

export interface ICredit {
    _id: ObjectId| string;
    client_deposit:string;
    deposit_amount:string;
    period:number;
    percent:number;
    status:Status;
    due_date:Date;
    client_id:ClientDocument;
    product_id:ProductDocument;
}
export type CreditDocument = Document & ICredit;