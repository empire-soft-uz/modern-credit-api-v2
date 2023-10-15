import { Router } from 'express'
import { Client } from '../controllers'

const clientRouter = Router()

clientRouter.get('/clients', Client.getAllClients)
clientRouter.get('/clients/:id', Client.getOneClient)
clientRouter.post('/clients', Client.addNewClient)
clientRouter.delete('/clients/:id', Client.deleteOneClient)
clientRouter.put('/clients/:id', Client.updateOneClient)

export { clientRouter }