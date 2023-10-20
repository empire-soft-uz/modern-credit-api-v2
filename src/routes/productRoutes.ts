import { Router } from 'express'
import { Product } from '../controllers'
import {validate,validateIdParam} from "../middlewares/validate";
import {addProductValidationSchema
    ,updateProductValidationSchema}
     from "../validations/schemas/product";

const productRouter = Router();

productRouter.get('/products', Product.getAllProducts);
productRouter.get('/products/:id',validateIdParam, Product.getOneProduct);
productRouter.post('/products',validate(addProductValidationSchema),Product.addProduct);
productRouter.put('/products/:id',validateIdParam,validate(updateProductValidationSchema), Product.updateProduct);
productRouter.delete('/products/:id',validateIdParam, Product.deleteProduct); 

export { productRouter };
    