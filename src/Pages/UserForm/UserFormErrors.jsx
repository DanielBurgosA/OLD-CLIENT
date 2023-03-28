import * as yup from "yup";

export const usersFormSchema = yup.object({
    name: yup.string().matches(/^[^0-9()]+$/, { message: "not numbers allowed", excludeEmptyString: true }).required("enter the user name"),
    password: yup.string().required("enter your password")
})