import { Request, Response } from 'express'
import { CreditModel } from '../database/models/credit'
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
    product_id,
      client_id,
      client_deposit,
      deposit_amount,
      period,
      percent,
  } = req.body
  try {
    const newCredit = new CreditModel({
      product_id,
      client_id,
      client_deposit,
      deposit_amount,
      period,
      percent,
    })
    await newCredit.save()
    res.status(201).json({ status: '201 ok', data: newCredit })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}
//Method DELETE
//Delete a credit
export const deleteOneCredit = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deleteCredit = CreditModel.findOneAndDelete({_id:id})
    res.status(200).json({ status: '200ok', msg: "Credit deleted succesfully" })
  } catch (error) {
    res.status(400).json({ msg: error });
  }
}
//Method PUT
//Update a credit
export const updateOneCredit = async (req: Request, res: Response) => {
  const { id } = req.params
  const { product_id,
    client_id,
    client_deposit,
    deposit_amount,
    period,
    percent
 } = req.body
  try {
    const updatedCredit = CreditModel.findOneAndUpdate({_id:id}, {
        product_id,
        client_id,
        client_deposit,
        deposit_amount,
        period,
        percent,
    })
    res.status(201).json({ status: '200 ok', msg: "Credit updates successfully" })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}