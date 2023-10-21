import { Request, Response } from 'express'
import { ExpenseModel } from '../database/models/expense'
//Method GET
//get all expenses
export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const data = await ExpenseModel.find()
    res.status(200).json({ status: '200ok', data })
  } catch (error) {
    res.status(400).send(error)
  }
}
//Method GET
//get one expense
export const getOneExpense = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const data = await ExpenseModel.findById({ _id:id})
    res.status(200).json({ status: '200ok', data })
  } catch (error) {
    res.status(400).send(error)
  }
}
//Method POST
//Add a new expense
export const addNewExpense = async (req: Request, res: Response) => {
  const {
    amount,
    description
  } = req.body
  try {
    const newExpense = new ExpenseModel({
      amount,
      description
    })
    await newExpense.save()
    res.status(201).json({ status: '201 ok', data: newExpense })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}
export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deleteExpense = await ExpenseModel.findByIdAndDelete({_id:id})
    res.status(200).json({ status: '200ok', msg: "Expense deleted successfully" })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}
export const updateExpense = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount, description } = req.body;
  try {
    const updateExpense = await ExpenseModel.findOneAndUpdate({_id:id}, {
      amount: amount,
      description: description
    })
    res.status(200).json({ status: "200ok", msg: "Expense updated successfully" })
  } catch (error) {
    res.status(400).json({ msg: error })
  }
}