"use client";
import React, { useEffect, useState } from 'react';
import StudentForm from './studentForm';
import {
  Grid,
  Box,
  Typography,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  Chip
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "./equivalences.css"
import '../About/about.css';

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

const API_URL = "https://virtual.ugd.edu.ar/api/V1";

const Student = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [universityList, setUniversityList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);

  const [isStudentFormSubmitted, setIsStudentFormSubmitted] = useState(false)
  const [isQueryFormSubmitted, setIsQueryFormSubmitted] = useState(false)
  const [studentDetails, setStudentDetails] = useState({})
  const [studentId, setStudentId] = useState("")
  const [coursesQueryFormDetails, setCoursesQueryFormDetails] = useState({
    universityId: '',
    courseNames: []
  });
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [approved_courses, setApproved_courses] = useState([]);

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

  const handleStudentFormInputs = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prev) => ({ ...prev, [name]: value }));
  }

  const handleQueryFormInputs = (event) => {
    const { name, value } = event.target;
    setCoursesQueryFormDetails((prev) => ({ ...prev, [name]: value }));
  }

  // STUDENT FORM SUBMIT

  const handleStudentFormSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/equivalences/students/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: studentDetails.firstName,
          last_name: studentDetails.lastName,
          email: studentDetails.email,
          phone: studentDetails.phone
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        // alert('Your form has been submitted');
        setIsStudentFormSubmitted(true);
        setStudentId(data.id);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // COURSE QUERY FORM SUBMIT

  const handleQueryFormSubmit = async () => {
    try {
      setIsLoading(true);
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
    <>
      {
        !isStudentFormSubmitted &&
        <div className='equivalencesContainer'>
          <StudentForm
            studentDetails={studentDetails}
            handleStudentFormInputs={handleStudentFormInputs}
            handleStudentFormSubmit={handleStudentFormSubmit}
            isLoading={isLoading}
          />
        </div>
      }

      {
        (isStudentFormSubmitted && !isQueryFormSubmitted) &&
        <div className='equivalencesContainer'>
          <div className='formContainer'>
            <select
              id="University"
              name="universityId"
              value={coursesQueryFormDetails.universityId}
              onChange={handleQueryFormInputs}
            >
              <option value="" disabled selected hidden>Selecciona tu universidad de origen</option>
              {
                universityList.map((university, index) => {
                  if (university.id !== 1) {
                    return (
                      <option value={university.id} key={index}>{university.name}</option>
                    )
                  }
                })
              }
            </select>

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
                        coursesList.map((course, index) => <Chip key={course.id} label={course.origin_course_name} />)
                        :
                        selected.map((value) => <Chip key={value} label={value} />)
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

            <button className='formBtn' onClick={handleQueryFormSubmit}>{
              isLoading ? 'Consultando...' : 'Consultar'
            }</button>
          </div>
        </div >
      }

      {
        (isQueryFormSubmitted && data) &&
        <>
          <br /><br />
          <section className="section">
            <Typography
              variant={isSmallScreen ? 'h5' : 'h4'}
              className='heading'>
              Asignaturas que te serán reconocidas en UGD para la Carrera
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={1}
                sx={{ display: { xs: 'none', lg: 'block' } }}>
              </Grid>
              <Grid item xs={12} lg={10} sx={{ background: 'var(--green)' }}>
                {data.approved_courses.length === 0 &&
                  <p>No hay asignaturas pendientes</p>
                }
                {
                  approved_courses.map((program, index) => {
                    return (
                      <div className="programDiv" key={index}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 'bold', mb: 2 }}>
                          {program.program}
                        </Typography>
                        <ul>
                          {
                            program.courses.map((course) => (
                              <li key={course.id}>{`${course.courseName}`}</li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </Grid>
              <Grid item xs={1}
                sx={{ display: { xs: 'none', lg: 'block' } }}>
              </Grid>
            </Grid>
          </section>

          <br /><br /><br />

          <section className="section">
            <Typography
              variant={isSmallScreen ? 'h5' : 'h4'}
              className='heading'>
              Asignaturas que te quedan pendientes para la Carrera
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={1}
                sx={{ display: { xs: 'none', lg: 'block' } }}>
              </Grid>
              <Grid item xs={12} lg={10} sx={{ background: 'var(--green)', px: { xs: 2, lg: 0 } }}>
                {
                  data.programs.map((program, index) => {
                    return (
                      <div className="programDiv" key={index}>
                        <Typography variant='h6' sx=
                          {{ fontWeight: 'bold', mb: 2 }}>{program.name}</Typography>
                        <ul>
                          {
                            program.study_Plan.map((course) => (
                              course.name !== data.approved_courses[0] &&
                              <li key={course.id}>{`${course.name}`}</li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  })
                }
              </Grid>
              <Grid item xs={1}
                sx={{ display: { xs: 'none', lg: 'block' } }}>
              </Grid>
            </Grid>
          </section>

          <div className="downloadBtnDiv">
            <button
              className='downloadBtn'
              onClick={() => {
                window.open(data.pdf_url, '_blank', 'noopener noreferrer');
              }}
            >
              Descargar tu consulta
            </button>
          </div>

        </>
      }
    </>
  )
}

export default Student;