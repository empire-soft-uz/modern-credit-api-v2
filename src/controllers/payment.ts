import { Request, Response } from 'express'
import { PaymentModel } from '../database/models/payment'
//Method GET
//get all payments
export const getAllPayments = async (req: Request, res: Response) => {
  const data = await PaymentModel.find()
  res.status(200).json({ status: '200ok', data })
}
//Method GET
//get one payment
export const getOnePayment = async (req: Request, res: Response) => {
  const { id } = req.params
  const data = await PaymentModel.findById({ _id:id })
  res.status(200).json({ status: '200ok', data })
}
//Method POST
//Add a new payment
export const addNewPayment = async (req: Request, res: Response) => {
  const {
    credit_id,
    paid_amount,
  } = req.body
  try {
    const newPayment = new PaymentModel({
      credit_id,
      paid_amount
    })
    await newPayment.save()
    res.status(201).json({ status: '201 ok', data: newPayment })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}
//Method DELETE
//Delete a payment
export const deleteOnePayment = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deletePayment = await PaymentModel.findByIdAndDelete({_id:id})
    res.status(200).json({ status: '200ok', msg: "Payment deleted successfully!" })
  } catch (error) {
    res.status(400).json({ msg: error });
  }
}
//Method PUT
//Update a payment
export const updateOnePayment = async (req: Request, res: Response) => {
  const { id } = req.params
  const { credit_id, paid_amount} = req.body
  try {
    const updatedPayment = await PaymentModel.findOneAndUpdate({_id:id}, {
      credit_id,
      paid_amount
    })
    res.status(201).json({ status: '200 ok', msg: "Payment updates successfully" })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}