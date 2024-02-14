import { studentFormSchema } from './validationSchema';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';

const API_URL = "https://virtual.ugd.edu.ar/api/V1";

const formDetails = [
    { name: 'firstName', placeholder: 'Nombre de pila' },
    { name: 'lastName', placeholder: 'Apellido' },
    { name: 'phone', placeholder: 'Teléfono' },
    { name: 'email', placeholder: 'Correo electrónico' },
];

const TextInput = ({ name, placeholder, formik }) => (
    <TextField
        type="text"
        placeholder={placeholder}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
    />
);

const StudentForm = ({
    setIsStudentFormSubmitted,
    setStudentId,
    isLoading,
    setIsLoading
}) => {
    const handleStudentFormSubmit = async (values) => {
        try {
            setIsLoading(true);
            const res = await fetch(`${API_URL}/equivalences/students/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.firstName,
                    last_name: values.lastName,
                    phone: values.phone,
                    email: values.email,
                }),
            });
            const data = await res.json();

            if (res.status === 201) {
                setIsStudentFormSubmitted(true);
                setStudentId(data.id);
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        },
        validationSchema: studentFormSchema,
        onSubmit: handleStudentFormSubmit
    });

    return (
        <div className='formContainer'>
            <h3 className="queryFormHeading"> Ingresá tus datos para poder hacer la consulta online de las materias que te serán reconocidas en nuestras carreras</h3>
            {
                formDetails.map((input, index) =>
                    <TextInput
                        key={index}
                        name={input.name}
                        placeholder={input.placeholder}
                        formik={formik}
                    />
                )
            }
            <button type="button" className='formBtn' onClick={formik.handleSubmit}>
                {
                    isLoading ? 'Enviando...' : 'Enviar'
                }
            </button>
        </div>
    )
}

export default StudentForm;