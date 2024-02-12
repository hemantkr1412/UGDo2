"use client";
import React, { useState } from 'react';
import StudentForm from './studentForm';
import QueryForm from './queryForm';
import { Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "./equivalences.css";
import '../About/about.css';

const Student = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [isStudentFormSubmitted, setIsStudentFormSubmitted] = useState(false);
  const [isQueryFormSubmitted, setIsQueryFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studentId, setStudentId] = useState("");

  const [data, setData] = useState("");
  const [approved_courses, setApproved_courses] = useState([]);

  return (
    <>
      {
        !isStudentFormSubmitted &&
        <div className='equivalencesContainer'>
          <StudentForm
            setStudentId={setStudentId}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setIsStudentFormSubmitted={setIsStudentFormSubmitted}
          />
        </div >
      }

      {
        (isStudentFormSubmitted && !isQueryFormSubmitted) &&
        <div className='equivalencesContainer'>
          <QueryForm
            studentId={studentId}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setIsQueryFormSubmitted={setIsQueryFormSubmitted}
            approved_courses={approved_courses}
            setApproved_courses={setApproved_courses}
            setData={setData}
          />
        </div >
      }

      {
        (isQueryFormSubmitted && data) &&
        <>
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