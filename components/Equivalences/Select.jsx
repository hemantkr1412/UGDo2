const adderStyle = {
    fontWeight: 'bold'
}

const Select = ({ name, value, options, type, onChange, placeholder, activeTab }) => (
    <>
        {/* {console.log(name, value, options)} */}
        <select
            name={name}
            value={value}
            onChange={onChange}>
            <option value="" disabled selected hidden>{placeholder}</option>
            {Array.isArray(options) ? (
                options.map((option) => (
                    type === 'name'
                        ?
                        <option key={option.id} value={option.name}>
                            {option.name}
                        </option>
                        :
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                ))
            ) : (
                <>
                    {name === 'destination_university' &&
                        <option key={options?.id} value={options?.id}>
                            {options?.name}
                        </option>
                    }
                    {name === 'destination_course_code' &&
                        <option key={options?.id} value={options?.code}>
                            {options?.code}
                        </option>
                    }

                </>
            )}
            {(name === 'universityId' && activeTab != 'view') &&
                <option name="universityId" style={adderStyle}>Add University</option>
            }
            {(name === 'programId' && activeTab != 'view') &&
                <option name="programId" style={adderStyle}>Add Program</option>
            }
        </select>

    </>
);

export default Select;
