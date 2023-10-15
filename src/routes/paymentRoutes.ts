import { Router } from 'express'
import { Payment } from '../controllers'

const paymentRouter = Router()

paymentRouter.get('/payments', Payment.getAllPayments)
paymentRouter.get('/payments/:id',Payment.getOnePayment)
paymentRouter.post('/payments', Payment.addNewPayment)
paymentRouter.put('/payments/:id', Payment.updateOnePayment)
paymentRouter.delete('/payments/:id', Payment.deleteOnePayment)

export {paymentRouter }