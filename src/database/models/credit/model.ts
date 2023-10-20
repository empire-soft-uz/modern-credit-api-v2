import {model, Schema, SchemaTypes} from 'mongoose';
import { ICredit } from './types';
import {Status} from "../../../types/common";
const creditSchema = new Schema<Partial<ICredit>>(
    {
        client_deposit:{
            type:String,
            required:true,
        },
        deposit_amount:{
            type:String,
            required:true,
        },
        period:{
            type:Number,
            required:true,
        },
        percent:{
            type:Number,
            required:true,
        },
        status:{
            type:String,
            enum:[Status.ACTIVE,Status.INACTIVE, Status.PENDING],
            default:Status.PENDING,
        },
        due_date:{
            type:Date,
            default:Date.now,
            required:true,
        },
        client_id:{
            type:[SchemaTypes.ObjectId],
            ref:"Client",
        },
        product_id:{
            type:[SchemaTypes.ObjectId],
            ref:"Product"
        }
    }
)

export const CreditModel = model("Credit", creditSchema);