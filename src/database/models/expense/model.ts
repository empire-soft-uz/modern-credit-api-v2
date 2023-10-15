import {model,Schema,SchemaTypes} from "mongoose";
import { IExpense } from "./types";

const expenseSchema = new Schema<Partial<IExpense>>(
    {
        amount:{
            type:Number,
            required:true,
        },
        description:{
            type:String,
            required:false,
        },
        due_date:{
            type:Date,
            default:Date.now,
            required:true,
        },
    }
)

export const ExpenseModel = model("Expense", expenseSchema);