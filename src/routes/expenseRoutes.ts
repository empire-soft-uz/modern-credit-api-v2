import { Expense } from '../controllers'
import { Router } from 'express'

const expenseRouter = Router()

expenseRouter.get("/expenses", Expense.getAllExpenses)
expenseRouter.get("/expenses/:id", Expense.getOneExpense)
expenseRouter.post("/expenses", Expense.addNewExpense)
expenseRouter.delete("/expenses/:id", Expense.deleteExpense)
expenseRouter.put("/expenses/:id", Expense.updateExpense)

export { expenseRouter }