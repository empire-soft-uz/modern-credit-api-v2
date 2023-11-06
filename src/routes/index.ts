import { Router } from 'express'
import { authRouter } from './authRoutes'
import { creditRouter } from './creditRoutes'
import { paymentRouter } from './paymentRoutes'
import {expenseRouter} from './expenseRoutes'

const router = Router();
//api for Auth
router.use('/api', authRouter);
//api for clients
router.use('/api', creditRouter);
//api for payments
router.use('/api', paymentRouter);
//api for expenses
router.use('/api', expenseRouter);


export { router }
