import {model, Schema, SchemaTypes} from 'mongoose';
import { IProduct } from './types';

const productSchema = new Schema<Partial<IProduct>>(
    {
        name:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        imageUrl:{
            type:String,
            required:false,
        },
        imei:{
            type:String,
            required:false,
        },
        iCloudLogin:{
            type:String,
            required:false,
        },
        iCloudPassword:{
            type:String,
            required:false,
        },
        description:{
            type:String,
            required:false
        }
    }
)

export const ProductModel = model("Product", productSchema);