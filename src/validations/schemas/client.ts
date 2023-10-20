import * as yup from "yup";

export const createClientValidationSchema = yup.object({
    name:yup.string().required(),
    phone:yup.string().required(),
    address:yup.string().required()
});

export const updateClientValidationSchema = yup.object({
    name:yup.string().required(),
    phone:yup.string().required(),
    address:yup.string().required()
});
