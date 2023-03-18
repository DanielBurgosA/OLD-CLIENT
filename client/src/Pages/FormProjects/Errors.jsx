import * as yup from 'yup'

export const projectSchema = yup.object({
    name: yup.string().matches(/^[^0-9()]+$/, { message: "not numbers allowed", excludeEmptyString: true }).required(),
    title: yup.string().matches(/^[A-Za-z0-9]+$/, { message: "not allowed special characters", excludeEmptyString: true }).required(),
    image: yup.string().url(),
    location: yup.string().required(),
    description: yup.string().matches(/[\S\s]{50,}/, "debe ingresar una descripcion de mas de 50 caracteres")
});
