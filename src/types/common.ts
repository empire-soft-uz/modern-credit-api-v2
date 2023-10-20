import { NextFunction } from "express";

export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending'
}

export type Handler = (
    request:Request,
    response:Response,
    next:NextFunction
) => Promise<void>;