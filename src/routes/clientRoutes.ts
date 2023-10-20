import { Router } from 'express';
import { Client } from '../controllers';
import {validate,validateIdParam} from "../middlewares/validate";
import {
    createClientValidationSchema,
    updateClientValidationSchema
} from "../validations/schemas/client";

const clientRouter = Router();

clientRouter.get('/clients', Client.getAllClients);
clientRouter.get('/clients/:id', validateIdParam,Client.getOneClient);
clientRouter.post('/clients',validate(createClientValidationSchema), Client.addNewClient);
clientRouter.delete('/clients/:id',validateIdParam, Client.deleteOneClient);
clientRouter.put('/clients/:id',validateIdParam, validate(updateClientValidationSchema), Client.updateOneClient);

export { clientRouter };