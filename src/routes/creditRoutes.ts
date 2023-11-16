import { Router } from 'express';
import { Credit } from '../controllers';
import {validate,validateIdParam} from "../middlewares/validate";
import{createCreditValidationSchema,updateCreditValidationSchema} from "../validations/schemas/credit";

const creditRouter = Router();

creditRouter.get('/credits', Credit.getAllCredits);
creditRouter.get('/credits/:id',validateIdParam, Credit.getOneCredit);
creditRouter.post('/credits',validate(createCreditValidationSchema),Credit.addNewCredit); 
creditRouter.delete('/credits/:id',validateIdParam, Credit.deleteOneCredit);
creditRouter.put('/credits/:id',validateIdParam, validate(updateCreditValidationSchema), Credit.updateOneCredit);

export { creditRouter };