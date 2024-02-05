import React from 'react'

const StudentForm = ({
    studentDetails,
    handleStudentFormInputs,
    handleStudentFormSubmit,
    isLoading
}) => {
    return (
        <div className='formContainer'>
            <h3 className="queryFormHeading"> Ingresá tus datos para poder hacer la consulta online de las materias que te serán reconocidas en nuestras carreras</h3>
            <input
                type="text"
                placeholder="Nombre de pila"
                name="firstName"
                value={studentDetails.firstName}
                onChange={handleStudentFormInputs}
            />
            <input
                type="text"
                placeholder="Apellido"
                name="lastName"
                value={studentDetails.lastName}
                onChange={handleStudentFormInputs}
            />
            <input
                type="text"
                placeholder="Teléfono"
                name="phone"
                value={studentDetails.phone}
                onChange={handleStudentFormInputs}
            />
            <input
                type="text"
                placeholder="Correo electrónico"
                name="email"
                value={studentDetails.email}
                onChange={handleStudentFormInputs}
            />
            <button className='formBtn' onClick={handleStudentFormSubmit}>
                {
                    isLoading ? 'Enviando...' : 'Enviar'
                }
            </button>
        </div>
    )
}

export default StudentForm;