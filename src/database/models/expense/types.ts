import {Document, ObjectId} from 'mongoose';

export interface IExpense {
    amount:number;
    description:string;
    due_date:Date;
}

export type ExpenseDocument = Document & IExpense;