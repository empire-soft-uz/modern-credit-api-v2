import * as yup from "yup";

export const createCreditValidationSchema = yup.object({
    product:yup.object().required(),
    client:yup.object().required(),
    client_deposit:yup.string().required(),
    deposit_amount:yup.string().required(),
    period:yup.number().required(),
    percent:yup.number().required(),
    due_date:yup.date(),
    status:yup.string(),
});

export const updateCreditValidationSchema = yup.object({
    product:yup.object(),
    client:yup.object(),
    client_deposit:yup.string(),
    deposit_amount:yup.string(),
    period:yup.number(),
    percent:yup.number(),
    due_date:yup.date(),
    status:yup.string(),
});