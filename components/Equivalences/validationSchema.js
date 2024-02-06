import * as Yup from "yup";

const studentFormSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Name must be 2 characters at minimum")
        .max(50, 'Name must be 15 characters at maximum')
        .required("Este campo es obligatorio"),
    lastName: Yup.string()
        .min(2, "Name must be 2 characters at minimum")
        .max(50, 'Name must be 15 characters at maximum')
        .required("Este campo es obligatorio"),
    phone: Yup.string()
        .matches(
            /^[0-9]{10}$/,
            "Must be 10 digits without spaces or special characters"
        )
        .required("Este campo es obligatorio"),
    email: Yup.string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address"
        )
        .required("Este campo es obligatorio."),
});

export {studentFormSchema};