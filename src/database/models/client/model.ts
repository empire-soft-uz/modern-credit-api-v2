import {model, Schema, SchemaTypes } from 'mongoose';
import { IClient } from './types';

const clientSchema = new Schema<Partial<IClient>>(
    {
        name:{
            type:String,
            required:true,
        },
        phone:{
            type:String,
            required:true,
            unique:true,
        },
        address:{
            type:String,
            required:true
        }
    }
)

export const ClientModel = model('Client', clientSchema);