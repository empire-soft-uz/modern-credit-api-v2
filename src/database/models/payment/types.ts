import {Document, ObjectId} from 'mongoose';
import { CreditDocument } from '../credit';

export interface IPayment {
    _id: ObjectId | string;
    index: string;
    paid_amount:number;
    due_date:Date;
    credit_id:CreditDocument;
}

export type PaymentDocument = Document & IPayment;