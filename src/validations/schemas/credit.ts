import * as yup from "yup";

export const createCreditValidationSchema = yup.object({
    product_id:yup.string().required(),
    client_id:yup.string().required(),
    client_deposit:yup.string().required(),
    deposit_amount:yup.string().required(),
    period:yup.number().required(),
    percent:yup.number().required(),
    // due_date:yup.date().required(),
    // status:yup.string().required()
});

export const updateCreditValidationSchema = yup.object({
    product_id:yup.string().required(),
    client_id:yup.string().required(),
    client_deposit:yup.string().required(),
    deposit_amount:yup.string().required(),
    period:yup.number().required(),
    percent:yup.number().required(),
});