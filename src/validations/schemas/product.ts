import * as yup from "yup";

export const addProductValidationSchema = yup.object({
    name:yup.string().required(),
   price:yup.number().required(),
   imageUrl:yup.string(),
   imei:yup.string(),
    iCloudLogin:yup.string(),
    iCloudPassword:yup.string(),
    description:yup.string()
});

export const updateProductValidationSchema = yup.object({
    name:yup.string().required(),
    price:yup.number().required(),
    imageUrl:yup.string(),
    imei:yup.string(),
    iCloudLogin:yup.string(),
    iCloudPassword:yup.string(),
    description:yup.string()
})