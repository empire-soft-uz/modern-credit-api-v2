import { Request, Response } from 'express'
import { CreditModel, ICredit } from '../database/models/credit'
import { calculateMonthlyPayments } from '../logic/monthlyPayment'
import { IClient } from '../database/models/client/types'
import { IProduct } from '../database/models/product/types'
import { Status } from '../types/common'
//Method GET
//get all credits
export const getAllCredits = async (req: Request, res: Response) => {
  const data = await CreditModel.find()

  res.status(200).json({ status: '200ok', data: data })
}
//Method GET
//get one credit
export const getOneCredit = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await CreditModel.findById({ _id:id})
  res.status(200).json({ status: '200ok', data })
}
//Method POST
//Add a new credit
export const addNewCredit = async (req: Request, res: Response) => {
  const {
    client: { name, phone, address },
    product: { product, price, imageUrl, imei, iCloudLogin, iCloudPassword, description },
    client_deposit,
    deposit_amount,
    period,
    percent,
  } = req.body;

  try {
    const newClient: IClient = {
      name,
      phone,
      address,
    };

    const newProduct: IProduct = {
      product,
      price,
      imageUrl,
      imei,
      iCloudLogin,
      iCloudPassword,
      description,
    };

    const newCredit: Partial<ICredit> = { // Using Partial to allow omission of _id
      client: newClient,
      product: newProduct,
      client_deposit,
      deposit_amount,
      period,
      percent,
      // Additional fields here
      status: Status.PENDING,
      due_date: new Date(),
    };

    const createdCredit = new CreditModel(newCredit);
    await createdCredit.save();

    const monthlyPayment = calculateMonthlyPayments(newCredit as ICredit); // Ensure newCredit matches ICredit
    console.log('Monthly Payment:', monthlyPayment);

    res.status(201).json({ status: '201 ok', data: createdCredit, monthlyPayment });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};


//Method DELETE
//Delete a credit
export const deleteOneCredit = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteCredit = await CreditModel.findOneAndDelete({_id:id});
    res.status(200).json({ status: '200ok', msg: "Credit deleted succesfully" });
    deleteCredit?.save();
  } catch (error) {
    res.status(400).json({ msg: error });
  }
}
//Method PUT
//Update a credit
export const updateOneCredit = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { 
    client:{
      name,
      phone,
      address
    },
    product:{
      product,
      price,
      imageUrl,
      imei,
       iCloudLogin,
       iCloudPassword,
       description
    },
    client_deposit,
    deposit_amount,
    period,
    percent
 } = req.body
  try {
    const updatedCredit = await CreditModel.findOneAndUpdate({_id:id}, {
      client:{
        name,
        phone,
        address
      },  
      product:{
        product,
      price,
      imageUrl,
      imei,
       iCloudLogin,
       iCloudPassword,
       description
      },
      client_deposit,
      deposit_amount,
      period,
      percent
    });
    updatedCredit?.save();
    res.status(201).json({ status: '200 ok', msg: "Credit updates successfully" })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}