"use client";
import React, { useEffect, useState } from 'react';
import API from '../scripts/apicall';
import "./form.css"
const Student = () => {
    const api = API();
    const [universities, setUniversities] = useState([]);
    const [originUniId, setOriginUniId] = useState("");
    const [originCourse, setOriginCourse] = useState("");
    const [data, setData] = useState("");
    const poppulateUniversties = async () => {
        await api
          .crud("GET", "equivalences/universities")
          .then((res) => {
            if (res.status === 200) {
              console.log(res)
              setUniversities(res);
              // setUniversities(res.slice(0, -1));
            }
          })
          .catch((err) => console.log(err));
      };

      useEffect(() => {
        poppulateUniversties();
      }, []);

      const handleOriginSelected = (e) => {
        setOriginUniId(e.target.value)
      }

      const handleGetData = async () => {
        await api
          .crud("POST", `equivalences/get_destination_courses`,{
            origin_university: originUniId,
            origin_course_name: originCourse,
            destination_university: 1,
          })
          .then((res) => {
            console.log(res)
            if (res.status === 200) {
              console.log(res.destination_name)
              setData({
                "approved_courses": res.destination_name.approved_destination_name,
                "programs": res.destination_name.programs
              });
            }
          })
          .catch((err) => console.log(err));
      }

      console.log(data.programs)
    
    return (
        <div className='mainContainer'>
            <div className='innerContainer'>
            <div className='formContainer'>
            <select name="University" id="University"
                value={originUniId}
                onChange={handleOriginSelected}
              >
                <option value="" disabled selected hidden>Please Select Origin University</option>
                {
                  universities.map((university) => {
                  
                    if(university.id !== 1){
                      return (
                        <option value={university.id} >{university.name}</option>
                      )
                    }
                  })
                }
              </select>
              <input
              type="text"
              placeholder="Origin Course Name"
              name="origin_course_name"
              onChange={(e) => setOriginCourse(e.target.value)}
             />
              <button className='formBtn' onClick={handleGetData}>Get</button>

              </div>
              
              { data &&
              <>
              <p style={{
                color:"black",
                fontSize:"1.5rem",
                marginTop:"3rem"
              }}>Approved Courses By UGD</p>
              {
                data.approved_courses.map((course) => {
                  return (
                    <p style={{
                      color:"#6B6C6C",
                      fontSize:"1rem",
                      marginTop:"1rem"
                    }}>-{course}</p>
                  )
                })
              }
              <p style={{
                color:"black",
                fontSize:"1.5rem",
                marginTop:"3rem"
              }}>Pending Courses</p>
              {
                data.programs.map((program) => {
                  return (
                    <>
                    <p style={{
                      color:"black",
                      fontSize:"1rem",
                      marginTop:"1rem"
                    }}>{program.name}</p>
                    {
                      program.study_Plan.map((course) => {
                        return (
                          <>
                          {course.name!==data.approved_courses[0]  &&<p style={{
                            color:"#6B6C6C",
                            fontSize:"1rem",
                            marginTop:"1rem"
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