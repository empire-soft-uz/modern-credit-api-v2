import { Document, ObjectId } from "mongoose";

export interface IClient {
    name:string;
    phone:string;
    address:string;
}

export type ClientDocument = Document & IClient;