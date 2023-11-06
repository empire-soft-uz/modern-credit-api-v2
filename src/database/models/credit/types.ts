import {Document,ObjectId} from 'mongoose';
import {Status} from "../../../types/common";
import { IClient } from '../client/types';
import { IProduct } from '../product/types';

export interface ICredit {
    _id: ObjectId| string;
    client: IClient;
    product: IProduct;
    client_deposit:string;
    deposit_amount:string;
    period:number;
    percent:number;
    status:Status;
    due_date:Date;
}
export type CreditDocument = Document & ICredit;