"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import API from '../scripts/apicall';
import Link from 'next/link';
import "./equivalences.css"
import { LocalConvenienceStoreOutlined } from '@mui/icons-material';

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

const API_URL = "http://localhost:8000/api/V1";

const Student = () => {
  const api = API();
  const theme = useTheme();
  const [universityList, setUniversityList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);

  const [isQueryFormSubmitted, setIsQueryFormSubmitted] = useState(false)
  const [studentDetails, setStudentDetails] = useState({})
  const [studentId, setStudentId] = useState("")
  const [coursesQueryFormDetails, setCoursesQueryFormDetails] = useState({
    universityId: '',
    courseNames: []
  });
  const [data, setData] = useState("");

  const fetchAllUniversities = async () => {
    const res = await fetch(`${API_URL}/equivalences/universities-list`)
    try {
      if (res.ok) {
        const data = await res.json();
        console.log(data)
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
    console.log(res)
    try {
      if (res.ok) {
        const data = await res.json();
        console.log(data)
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

  // function getStyles(name, personName, theme) {
  //   return {
  //     fontWeight:
  //       personName.indexOf(name) === -1
  //         ? theme.typography.fontWeightRegular
  //         : theme.typography.fontWeightMedium,
  //   };
  // }

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
      console.log(data)

      if (res.status === 201) {
        alert('Your form has been submitted');
        setIsQueryFormSubmitted(true);
        setStudentId(data.id);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // COURSE QUERY FORM SUBMIT

  const handleQueryFormSubmit = async () => {
    try {
      const response = await fetch(`${API_URL}/equivalences/get_destination_courses/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id: studentId,
          origin_university: coursesQueryFormDetails.universityId,
          origin_course_name: coursesQueryFormDetails.courseNames.includes('select_all') ? "All" : coursesQueryFormDetails.courseNames,
          destination_university: 1,
        }),
      });

      const data = await response.json();
      console.log(data);

      alert('Form submitted');
      setData({
        "approved_courses": data.destination_name.approved_destination_name,
        "programs": data.destination_name.programs,
        "pdf_url": data.destination_name.pdf_url
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='mainContainer'>
      <div className='innerContainer'>
        <div className='formContainer'>
          {
            !isQueryFormSubmitted ?
              <>
                <h1 className="queryFormHeading">Student Query Form</h1>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={studentDetails.firstName}
                  onChange={handleStudentFormInputs}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={studentDetails.lastName}
                  onChange={handleStudentFormInputs}
                />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={studentDetails.phone}
                  onChange={handleStudentFormInputs}
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={studentDetails.email}
                  onChange={handleStudentFormInputs}
                />
                <button className='formBtn' onClick={handleStudentFormSubmit}>Submit</button>
              </>
              :
              <>
                <select
                  id="University"
                  name="universityId"
                  value={coursesQueryFormDetails.universityId}
                  onChange={handleQueryFormInputs}
                >
                  <option value="" disabled selected hidden>Please Select Origin University</option>
                  {
                    universityList.map((university) => {
                      if (university.id !== 1) {
                        return (
                          <option value={university.id} >{university.name}</option>
                        )
                      }
                    })
                  }
                </select>

                {/* <select
                  name="courseNames"
                  value={coursesQueryFormDetails.courseNames}
                  onChange={handleQueryFormInputs}
                // multiple
                >
                  <option value="" disabled selected hidden>Please Select Courses</option>
                  {
                    coursesList.map((course) => <option value={course.name} key={course.id}>{course.origin_course_name}</option>)
                  }
                  <option value="Select All">Select All</option>
                </select>  */}

                <InputLabel
                  id="demo-multiple-chip-label"
                  sx={{
                    margin: "1rem 0 -6px"
                  }}>
                  Select Course</InputLabel>
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
                          <>
                            {
                              selected[selected.length - 1] === 'select_all'
                                ?
                                coursesList.map((course) => <Chip key={course.id} label={course.origin_course_name} />)
                                :
                                selected.map((value) => <Chip key={value} label={value} />)
                            }
                          </>
                        }
                      </Box>
                    </>
                  )}
                  MenuProps={MenuProps}
                >
                  <MenuItem value="" disabled>
                    Select Course
                  </MenuItem>
                  {coursesList.map((name) => (
                    <MenuItem
                      key={name.id}
                      value={name.origin_course_name}
                    // style={getStyles(name, coursesQueryFormDetails.courseNames, theme)}
                    >
                      {name.origin_course_name}
                    </MenuItem>
                  ))}
                  <MenuItem value="select_all">
                    Select All
                  </MenuItem>
                </Select>

                <button className='formBtn' onClick={handleQueryFormSubmit}>Get</button>
              </>
          }
        </div>

        {data &&
          <div className='courseInfoContainer'>
            <div className='courseTypeContainer'>
              <h1 className="courseInfoHead">Approved Courses By UGD</h1>
              {
                data.approved_courses.map((course) => (
                  <p key={course}>{`- ${course}`}</p>
                ))
              }
            </div>

            <div className='courseTypeContainer'>
              <h1 className="courseInfoHead">Pending Courses</h1>
              {
                data.programs.map((program) => {
                  return (
                    <div className="programDiv">
                      <p className="studentPrograms">{program.name}</p>
                      {
                        program.study_Plan.map((course) => (
                          course.name !== data.approved_courses[0] && <p className='studentCourses'>{`- ${course.name}`}</p>
                        ))
                      }
                    </div>
                  )
                })
              }
            </div>

            <Link href={`${data.pdf_url}`} className="downloadBtn">
              Download details
            </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Student;