import {Document, ObjectId} from 'mongoose';

export interface IExpense {
    _id: ObjectId | string;
    amount:number;
    description:string;
    due_date:Date;
}

export type ExpenseDocument = Document & IExpense;