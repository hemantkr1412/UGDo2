import { useState, useEffect } from 'react';
import {
    Box,
    OutlinedInput,
    InputLabel,
    MenuItem,
    Select,
    Chip,
    FormHelperText
} from '@mui/material';

const API_URL = "https://virtual.ugd.edu.ar/api/V1";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const QueryForm = ({
    studentId,
    isLoading,
    setIsLoading,
    setIsQueryFormSubmitted,
    approved_courses,
    setApproved_courses,
    setData
}) => {
    const [universityList, setUniversityList] = useState([]);
    const [coursesList, setCoursesList] = useState([]);
    const [coursesQueryFormDetails, setCoursesQueryFormDetails] = useState({
        universityId: '',
        courseNames: []
    });
    const [universityError, setUniversityError] = useState(false);
    const [coursesError, setCoursesError] = useState(false);

    const fetchAllUniversities = async () => {
        const res = await fetch(`${API_URL}/equivalences/universities-list`)
        try {
            if (res.ok) {
                const data = await res.json();
                setUniversityList(data);
            }
            else
                console.log('Error:', res.status, res.statusText);
        } catch (error) {
            console.log(error)
        }
    };

    const fetchCourses = async (universityId) => {
        const res = await fetch(`${API_URL}/equivalences/equivalences/${universityId}`);
        try {
            if (res.ok) {
                const data = await res.json();
                setCoursesList(data);
            }
            else
                console.log('Error:', res.status, res.statusText);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllUniversities()
    }, []);

    useEffect(() => {
        fetchCourses(coursesQueryFormDetails.universityId)
    }, [coursesQueryFormDetails]);

    // HANDLING FORM INPUTS

    const handleQueryFormInputs = (event) => {
        const { name, value } = event.target;
        setCoursesQueryFormDetails((prev) => ({ ...prev, [name]: value }));
    }

    // COURSE QUERY FORM SUBMIT

    const handleQueryFormSubmit = async () => {
        try {
            setIsLoading(true);

            if (!coursesQueryFormDetails.universityId) {
                setUniversityError(true);
                setIsLoading(false);
                return;
            } else {
                setUniversityError(false);
            }

            if (coursesQueryFormDetails.courseNames.length === 0) {
                setCoursesError(true);
                setIsLoading(false);
                return;
            } else {
                setCoursesError(false);
            }

            const response = await fetch(`${API_URL}/equivalences/get_destination_courses/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    student_id: studentId,
                    origin_university: coursesQueryFormDetails.universityId,
                    origin_course_names: coursesQueryFormDetails.courseNames.includes('select_all') ? "All" : coursesQueryFormDetails.courseNames,
                    destination_university: 1,
                }),
            });

            const data = await response.json();
            setIsQueryFormSubmitted(true)

            const tempPrograms = {};

            data.destination_name.approved_destination_name.forEach((course) => {
                const programName = course.destination_program.name;

                if (programName in tempPrograms)
                    tempPrograms[programName].courses.push({ courseName: course.destination_name });
                else {
                    tempPrograms[programName] = {
                        program: programName,
                        courses: [{ courseName: course.destination_name }],
                    };
                }
            });

            // Convert tempPrograms object to an array of values
            const newApprovedCourses = Object.values(tempPrograms);

            // Set the newApprovedCourses array as the state
            setApproved_courses([...approved_courses, ...newApprovedCourses]);

            setData({
                "approved_courses": data.destination_name.approved_destination_name,
                "programs": data.destination_name.programs,
                "pdf_url": data.destination_name.pdf_url
            });
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='formContainer'>
            <Select
                id="University"
                className="courseSelectBox"
                name="universityId"
                value={coursesQueryFormDetails.universityId}
                onChange={handleQueryFormInputs}
            >
                <MenuItem value="" disabled>
                    Selecciona tu universidad de origen
                </MenuItem>
                {universityList.map((university) => {
                    if (university.id !== 1) {
                        return (
                            <MenuItem value={university.id} key={university.id}>
                                {university.name}
                            </MenuItem>
                        );
                    }
                    return null;
                })}
            </Select>
            {universityError && <FormHelperText sx={{
                color: 'rgb(211, 47, 47)',
                margin: '-8px 0 0 10px'
            }}>Please select university*</FormHelperText>}

            <InputLabel
                id="demo-multiple-chip-label"
                sx={{
                    color: 'white',
                    margin: "1rem 0 -6px"
                }}>
                Selecciona las asignaturas que tenés cursadas y aprobadas</InputLabel>
            <Select
                // labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                name="courseNames"
                value={coursesQueryFormDetails.courseNames}
                onChange={handleQueryFormInputs}
                className="courseSelectBox"
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                    <>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {
                                selected[selected.length - 1] === 'select_all'
                                    ?
                                    coursesList.map((course, index) => <Chip key={course.id} label={course.origin_course_name} className="chip" />)
                                    :
                                    selected.map((value) => <Chip key={value} label={value} className="chip"/>)
                            }
                        </Box>
                    </>
                )}
                MenuProps={MenuProps}
            >
                <MenuItem value="" disabled>Select Course</MenuItem>
                {
                    coursesList.map((name) => (
                        <MenuItem key={name.id} value={name.origin_course_name}>
                            {name.origin_course_name}
                        </MenuItem>
                    ))
                }
                <MenuItem value="select_all">
                    Select All
                </MenuItem>
            </Select>
            {coursesError && <FormHelperText sx={{
                color: 'rgb(211, 47, 47)',
                margin: '-8px 0 0 10px'
            }}>Please select at least one course*</FormHelperText>}

            <button className='formBtn' onClick={handleQueryFormSubmit}>{
                isLoading ? 'Consultando...' : 'Consultar'
            }</button>
        </div>
    )
}

export default QueryForm;