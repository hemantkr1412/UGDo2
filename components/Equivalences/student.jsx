"use client";
import React, { useEffect, useState } from 'react';
import API from '../scripts/apicall';
import "./form.css"
const Student = () => {
  const api = API();
  const [universityList, setUniversityList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);
  const [formDetails, setFormDetails] = useState({})
  const [data, setData] = useState("");

  const fetchAllUniversities = async () => {
    const res = await api.crud("GET", "equivalences/universities-list")
    try {
      if (res.status === 200) {
        // console.log(res)
        setUniversityList(res);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const fetchCourses = async (universityId) => {
    console.log(`fetchCourses runs ${universityId}`)
    const res = await api.crud("GET", `equivalences/equivalences/${universityId}`)
    console.log(res)
    try {
      if (res.status === 200) {
        console.log(res)
        setCoursesList(res);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllUniversities()
  }, []);

  useEffect(() => {
    fetchCourses(formDetails.universityId)
  }, [formDetails]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  }

  const handleGetData = async () => {
    await api
      .crud("POST", `equivalences/get_destination_courses`, {
        origin_university: formDetails.universityId,
        origin_course_name: formDetails.courseName,
        destination_university: 1,
      })
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          alert('Form submitted')
          setFormDetails({
            universityId: '', courseName: ''
          })
          setData({
            "approved_courses": res.destination_name.approved_destination_name,
            "programs": res.destination_name.programs
          });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='mainContainer'>
      <div className='innerContainer'>
        <div className='formContainer'>
          <select
            id="University"
            name="universityId"
            value={formDetails.universityId}
            onChange={handleInputs}
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

          <select
            name="courseName"
            value={formDetails.courseName}
            onChange={handleInputs}
          >
            <option value="" disabled selected hidden>Please Select Courses</option>
            {
              coursesList.map((course) => <option value={course.name} key={course.id}>{course.origin_course_name}</option>)
            }
          </select>

          <button className='formBtn' onClick={handleGetData}>Get</button>

        </div>

        {data &&
          <>
            <p style={{
              color: "black",
              fontSize: "1.5rem",
              marginTop: "3rem"
            }}>Approved Courses By UGD</p>
            {
              data.approved_courses.map((course) => {
                return (
                  <p style={{
                    color: "#6B6C6C",
                    fontSize: "1rem",
                    marginTop: "1rem"
                  }}>-{course}</p>
                )
              })
            }
            <p style={{
              color: "black",
              fontSize: "1.5rem",
              marginTop: "3rem"
            }}>Pending Courses</p>
            {
              data.programs.map((program) => {
                return (
                  <>
                    <p style={{
                      color: "black",
                      fontSize: "1rem",
                      marginTop: "1rem"
                    }}>{program.name}</p>
                    {
                      program.study_Plan.map((course) => {
                        return (
                          <>
                            {course.name !== data.approved_courses[0] && <p style={{
                              color: "#6B6C6C",
                              fontSize: "1rem",
                              marginTop: "1rem"
                            }}>-{course.name}</p>}
                          </>
                        )
                      })
                    }
                  </>

                )
              })
            }

          </>

        }



      </div>
    </div>
  )
}

export default Student;