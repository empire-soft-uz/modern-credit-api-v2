import {model, Schema, SchemaTypes} from 'mongoose';
import { ICredit } from './types';
import {Status} from "../../../types/common";

const creditSchema = new Schema<Partial<ICredit>>({
    client: {
      name:{
        type:String,
        required:true
      },
      phone:{
        type:String,
        required:true
      },
      address:{
        type:String,
        required:true
      }
    },
    product: {
      product:{
        type:String,
        required:true
      },
      price:{
        type:Number,
        required:true
      },
      imageUrl:{
        type:String,
      },
      imei:{
        type:String
      },
      iCloudLogin:{
        type:String
      },
      iCloudPassword:{
        type:String
      },
      description:{
        type:String
      }
    },
    client_deposit: {
      type: String,
      required: true,
    },
    deposit_amount: {
      type: String,
      required: true,
    },
    period: {
      type: Number,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        Status.ACTIVE,
        Status.INACTIVE,
        Status.PENDING],
      default: Status.PENDING,
    },
    due_date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  });

export const CreditModel = model("Credit", creditSchema);