import { Router } from 'express'
import { Product } from '../controllers'

const productRouter = Router()

productRouter.get('/products', Product.getAllProducts)
productRouter.get('/products/:id', Product.getOneProduct)
productRouter.post('/products',Product.addProduct)
productRouter.put('/products/:id', Product.updateProduct) 
productRouter.delete('/products/:id', Product.deleteProduct) 

export { productRouter }
    