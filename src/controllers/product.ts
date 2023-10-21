import { Request, Response } from 'express'
import { ProductModel } from '../database/models/product'
//Method GET
//get all products
export const getAllProducts = async (req: Request, res: Response) => {
  const data = await ProductModel.find() 
  console.log(data);
  
  res.status(200).json({ status: '200ok', data })
}
//Method GET
//get one product
export const getOneProduct = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await ProductModel.findById({ _id: id })
  res.status(200).json({ status: '200ok', data })
}
//Method POST
//Add new product
export const addProduct = async (req: Request, res: Response) => {
  const {
    name,
   price,
   imageUrl,
   imei,
    iCloudLogin,
    iCloudPassword,
    description
  } = req.body
try{
  const newProduct = new ProductModel({
    name,
   price,
   imageUrl,
   imei,
    iCloudLogin,
    iCloudPassword,
    description
  })
  await newProduct.save()
  res.status(201).json({ status: '201 ok', data: newProduct})
}
catch(error){
  res.json({msg:error});
}
}
//Method PUT
//get one product
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
      name,
      price,
      imageUrl,
      imei,
       iCloudLogin,
       iCloudPassword,
       description} = req.body;
      try{
    const data = await ProductModel.findOneAndUpdate({ _id: id },{
      name,
      price,
      imageUrl,
      imei,
       iCloudLogin,
       iCloudPassword,
       description
    });
    res.status(200).json({ status: '200ok', msg:"Product updated successfully" });
  }
  catch(error){
    res.json({msg:error});
  }}
//Method DELETE
//delete product
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    try{
    const data = await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ status: '200ok', data });
    }catch(error){
      res.json({msg:error});
    }
  };