import {Document} from 'mongoose';
import { CreditDocument } from '../credit';

export interface IPayment {
    paid_amount:number;
    date:Date;
    credit_id:CreditDocument;
}

export type PaymentDocument = Document & IPayment;