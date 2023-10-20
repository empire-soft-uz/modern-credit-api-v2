import { Expense } from '../controllers';
import { Router } from 'express';
import { validate,validateIdParam } from '../middlewares/validate';
import {createExpenseValidationSchema,updateExpenseValidationSchema} from "../validations/schemas/expense";
 
const expenseRouter = Router();

expenseRouter.get("/expenses", Expense.getAllExpenses);
expenseRouter.get("/expenses/:id",validateIdParam, Expense.getOneExpense);
expenseRouter.post("/expenses",validate(createExpenseValidationSchema), Expense.addNewExpense);
expenseRouter.delete("/expenses/:id",validateIdParam, Expense.deleteExpense);
expenseRouter.put("/expenses/:id",validateIdParam,validate(updateExpenseValidationSchema), Expense.updateExpense);

export { expenseRouter };