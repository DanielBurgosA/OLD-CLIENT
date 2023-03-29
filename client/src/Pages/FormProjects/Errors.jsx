import * as yup from 'yup'

export const projectSchema = yup.object({
    name: yup.string().matches(/^[^0-9()]+$/, { message: "not numbers allowed", excludeEmptyString: true }).required(),    
    location: yup.string().required(),
    // user: yup.number().required("select a user"),
    description: yup.string().matches(/[\S\s]{2,}/, "debe ingresar una descripcion de mas de 50 caracteres")
});