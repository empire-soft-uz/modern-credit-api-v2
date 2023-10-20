import { Router } from 'express';
import { Payment } from '../controllers';
import {validate,validateIdParam} from "../middlewares/validate";
import {
    addPaymentValidationSchema,
    updatePaymentValidationSchema}
    from "../validations/schemas/payment"; 

const paymentRouter = Router();

paymentRouter.get('/payments', Payment.getAllPayments);
paymentRouter.get('/payments/:id',validateIdParam,Payment.getOnePayment);
paymentRouter.post('/payments',validate(addPaymentValidationSchema), Payment.addNewPayment);
paymentRouter.put('/payments/:id',validateIdParam,validate(updatePaymentValidationSchema), Payment.updateOnePayment);
paymentRouter.delete('/payments/:id',validateIdParam, Payment.deleteOnePayment);

export {paymentRouter };