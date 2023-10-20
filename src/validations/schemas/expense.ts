import * as yup from "yup";

export const createExpenseValidationSchema = yup.object({
    amount:yup.number().required(),
    description:yup.string()
});

export const updateExpenseValidationSchema = yup.object({
    amount:yup.number().required(),
    description:yup.string()
});