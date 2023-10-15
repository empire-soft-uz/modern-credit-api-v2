import { Document, ObjectId } from "mongoose";

export interface IClient {
    _id:ObjectId | string;
    name:string;
    phone:string;
    address:string;
}

export type ClientDocument = Document & IClient;