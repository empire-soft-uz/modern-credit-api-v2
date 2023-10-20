import * as yup from "yup";

export const addPaymentValidationSchema = yup.object({
    credit_id:yup.string().required(),
    paid_amount:yup.number().required(),
    index:yup.number().required()
});

export const updatePaymentValidationSchema = yup.object({
    credit_id:yup.string().required(),
    paid_amount:yup.number().required(),
    index:yup.number().required()
})