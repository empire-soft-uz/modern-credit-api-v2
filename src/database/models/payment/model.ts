import {model,Schema, SchemaTypes } from 'mongoose';
import { IPayment } from './types';

const paymentSchema = new Schema<Partial<IPayment>>(
    {
        paid_amount:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            default:Date.now,
            required:true,
        },
        credit_id:{
            type:[SchemaTypes.ObjectId],
            ref:"Credit"
        },
    }
)

export const PaymentModel = model("Payment",paymentSchema);