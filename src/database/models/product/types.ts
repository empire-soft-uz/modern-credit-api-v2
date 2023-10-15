import {Document, ObjectId} from 'mongoose';

export interface IProduct{
    _id: ObjectId | string;
    name:string;
    price:number;
    imageUrl:string;
    imei:string;
    iCloudLogin:string;
    iCloudPassword:string;
    description:string;
}

export type ProductDocument = Document & IProduct;