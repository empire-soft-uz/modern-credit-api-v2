import { Router } from 'express'
import { Credit } from '../controllers'

const creditRouter = Router()

creditRouter.get('/credits', Credit.getAllCredits)
creditRouter.get('/credits/:id', Credit.getOneCredit)
creditRouter.post('/credits', Credit.addNewCredit)
creditRouter.delete('/credits/:id', Credit.deleteOneCredit)
creditRouter.put('/credits/:id', Credit.updateOneCredit)

export { creditRouter }