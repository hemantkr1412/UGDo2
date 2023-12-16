"use client";
import React, { useEffect, useState } from 'react';
import API from '../scripts/apicall';
import "./equivalences.css"
import "./form.css"

const tabs = [
  { name: 'View Details', key: 'view' },
  { name: 'Add Details', key: 'add' },
  { name: 'Mapping Details', key: 'mapping' },
  { name: 'View Mapping', key: 'view_mapping' },
];

const Form = () => {
  const api = API();
  const [universities, setUniversities] = useState([]);
  const [mappingDetails, setMappingDetails] = useState([]);
  const [mappingData, setMappingData] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [uniId, setUniId] = useState("");
  const [programId, setProgramId] = useState("");
  const [courses, setCourses] = useState([]);
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [section, setSection] = useState("");
  const [course, setCourse] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [token, setToken] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const [modelSection, setModelSection] = useState("")
  const [tab, setTab] = useState("view")
  const [courseId, setCourseId] = useState("")
  const [isUpdate, setIsUpdate] = useState(false);
  const [originUniId, setOriginUniId] = useState("");

  const [mappingFormDetails, setMappingFormDetails] = useState({})

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

  const poppulateMappingDetails = async () => {
    await api
      .crud("GET", `equivalences/equivalence-data`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          setMappingData(res)
        }
      })
      .catch((err) => console.log(err));
  };

  const poppulateCourses = () => {
    setCourses(
      programs.filter((program) => program.id == programId)[0].study_Plan
    )
  }
  useEffect(() => {
    poppulateUniversties();
    poppulateMappingDetails();
  }, []);

 

  const openPopup = () => setIsOpen(true);

  const closePopup = () => setIsOpen(false);

  const inputMappingDetails = (e, id) => {
    const { name, value } = e.target;
    setMappingFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUNIselect = (e) => {
    if (e.target.value == "add University") {
      openPopup();
      setModelSection("University")
    }
    else {
      setUniId(e.target.value)
      setPrograms(
        universities.filter((uni) => uni.id == e.target.value)[0].programs
      )
    }
  }

  const handleProgramSelect = (e) => {
    console.log(e.target.value)
    if (e.target.value == "add Program") {
      openPopup();
      setModelSection("Program")
    } else {
      setProgramId(e.target.value)
      console.log(e.target.value)
      setCourses(
        programs.filter((program) => program.id == e.target.value)[0].study_Plan
      )
    }
  }

  const handleMappingFormSubmit = async () => {
    await api
      .crud("POST", "equivalences/equivalence-data", mappingFormDetails, false)
      .then((res) => {
        console.log(res);
        alert("Form Submitted Successfully")
        setCourse("")
        setCourseCode("")
        if (res.status === 200) {
          alert("Course Added Successfully")
          console.log(res)
        }
      })
      .catch((err) => console.log(err));
  }

  const handleSubmit = async () => {
    await api
      .crud("POST", "equivalences/study-plan", {
        program: programId,
        name: course,
        code: courseCode
      }, false)
      .then((res) => {
        console.log(res);
        alert("Course Added Successfully")
        setCourse("")
        setCourseCode("")
        if (res.status === 200) {
          alert("Course Added Successfully")
          console.log(res)
        }
      })
      .catch((err) => console.log(err));
  }

  const handleAddUniSubmit = async () => {
    if (modelSection === "University") {
      await api
        .crud("POST", "equivalences/universities", {
          name: university
        }, false)
        .then((res) => {
          console.log(res);
          alert("University Added Successfully")
          setUniversity("")
          closePopup()
          if (res.status === 200) {
            alert("University Added Successfully")
            console.log(res)
          }
        })
        .catch((err) => console.log(err));
    }
    else {
      await api
        .crud("POST", "equivalences/programs", {
          name: university,
          university: uniId
        }, false)
        .then((res) => {
          console.log(res);
          alert("Program Added Successfully")
          setProgram("")
          closePopup()
          if (res.status === 200) {
            alert("Program Added Successfully")
            console.log(res)
          }
        })
        .catch((err) => console.log(err));
    }
  }

  const deleteCourse = async (courseId) => {
    await api.crud("DELETE", `equivalences/study-plan/${courseId}`)
      .then((res) => {
        console.log(res);
        alert("Course Deleted Successfully")
        poppulateUniversties()
        if (res.status === 200) {
          alert("Course Deleted Successfully")
          console.log(res)
        }
      })
  }

  const updateCourse = async () => {
    await api.crud("PUT", `equivalences/study-plan/${courseId}`, {
      program: programId,
      name: course,
      code: courseCode
    })
      .then((res) => {
        console.log(res);
        alert("Course Updated Successfully")
        poppulateUniversties()
        setPrograms(
          universities.filter((uni) => uni.id == uniId)[0].programs
        )
        setCourses(
          programs.filter((program) => program.id == programId)[0].study_Plan
        )
        setIsUpdate(false)
        if (res.status === 200) {
          // alert("Course Updated Successfully")
          console.log(res)
        }
      })
  }

  const handleUpdate = (courseId) => {
    setIsUpdate(true)
    setCourseId(courseId)
  }

  const handleOriginSelected = (e) => {
    setOriginUniId(e.target.value)
  }
  const handleMappingProgramSelect = (e) => {
    console.log(e.target.value)
    setProgramId(e.target.value)
    setMappingDetails(
      mappingData.filter((mapping) => mapping.destination_program == e.target.value) &&
      mappingData.filter((mapping) => mapping.origin_university == originUniId)
    )
  }

  return (
    <div className='mainContainer'>
      <div className='innerContainer'>
        <div className='equivalenciesNavigation'>
          {tabs.map((tabInfo) => (
            <div
              key={tabInfo.key}
              onClick={() => setTab(tabInfo.key)}
              className={`${tab === tabInfo.key ? 'equivalenciesNavigationLink active' : 'equivalenciesNavigationLink'
                }`}
            >
              {tabInfo.name}
            </div>
          ))}
        </div>

        {
          tab === "view" &&
          <div className='tableMainContainer'>
            <div className='tableFilterDiv'>
              <select name="University" id="University"
                value={uniId}
                onChange={handleUNIselect}
              >
                <option value="" disabled selected hidden>Please Select University</option>
                {
                  universities.map((university) => {
                    return (
                      <option value={university.id}>{university.name}</option>
                    )
                  })
                }
              </select>

              <select name="University" id="University"
                value={programId}
                onChange={handleProgramSelect}
              >
                <option value="" disabled selected hidden>Please Select Program</option>
                {
                  programs.map((program) => {
                    return (
                      <option value={program.id}>{program.name}</option>
                    )
                  })
                }
              </select>
            </div>

            <table className='table'>
              <tbody>
                <tr>
                  <th>Code</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
                {
                  courses.map((course) => {
                    return (
                      <tr>
                        <td>{course.code}</td>
                        <td>{course.name}</td>
                        <td>
                          <div style={{
                            display: "flex",
                            gap: "1rem",
                          }}>
                            <button
                              className='actionBtn'
                              onClick={() => deleteCourse(course.id)}
                            >
                              Delete
                            </button>
                            <button
                              className='actionBtn'
                              onClick={() => handleUpdate(course.id)}
                            >
                              Update
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            {isUpdate && <div
              style={{
                width: '400px',
                height: '350px',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)',
                zIndex: '999',
              }}
            >
              <div>
                <h1 style={{ textAlign: 'center' }}>Update Course</h1>
                <input type="text" placeholder={"Course"} style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#1C3564",
                }}
                  onChange={(e) => {
                    setCourse(e.target.value)
                  }}
                />
                <input type="text" placeholder={"Course Code"} style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#1C3564",
                }}
                  onChange={(e) => {
                    setCourseCode(e.target.value)
                  }}
                />

                <button style={{
                  alignItems: "center",
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "white",
                  backgroundColor: "black"

                }}
                  onClick={updateCourse}
                >Submit</button>

                <p style={{
                  textAlign: 'center',
                  color: "red",
                  cursor: 'pointer',
                }} onClick={() => setIsUpdate(false)}>Close</p>
              </div>
            </div>}
          </div>
        }

        {
          tab === 'add' &&
          <div className="formContainer">
            <p className="formHead">Data Entry</p>

            <select name="University" id="University"
              value={uniId}
              onChange={handleUNIselect}
            >
              <option value="" disabled selected hidden>Please Select University</option>
              {
                universities.map((university) => {
                  return (
                    <option value={university.id}>{university.name}</option>
                  )
                })
              }
              <option style={{
                color: "black",
                fontWeight: "bold",
                padding: "10px"
              }} value="add University" >Add University</option>
            </select>
            <select name="University" id="University"
              value={programId}
              onChange={handleProgramSelect}
            >
              <option value="" disabled selected hidden>Please Select Program</option>
              {
                programs.map((program) => {
                  return (
                    <option value={program.id}>{program.name}</option>
                  )
                })
              }
              {uniId &&
                <option style={{
                  color: "black",
                  fontWeight: "bold",
                  padding: "10px"
                }} value="add Program">Add Program</option>}

            </select>

            <input
              type="text"
              placeholder="Course"
              onChange={(e) => setCourse(e.target.value)}
            />

            <input
              type="text"
              placeholder="Course Code"
              onChange={(e) => setCourseCode(e.target.value)}
            />

            <button className='formBtn' onClick={handleSubmit}>Submit</button>
          </div>
        }
        {
          tab === 'mapping' &&
          <div className='formContainer'>
            <p className='formHead'>Data Entry</p>

            <select
              name="destination_university"
              id="University"
              value={mappingFormDetails.destination_university}
              onChange={inputMappingDetails}
            >
              <option value="" disabled selected hidden>Destination University</option>
              <option value={universities[0].id}>{universities[0].name}</option>
            </select>

            <select
              name="origin_university"
              id="University"
              // value={mappingFormDetails.destination_university}
              onChange={(e) => inputMappingDetails(e, e.target.value)}
            >
              <option value="" disabled selected hidden>Origin University</option>
              {
                universities.map((university, index) => {
                  return index > 0 && (
                    <option key={university.id} value={university.id}>
                      {university.name}
                    </option>
                  );
                })
              }
              {
                <option style={{
                  color: "black",
                  fontWeight: "bold",
                  padding: "10px"
                }} value="add University">Add University</option>}
            </select>

            <select
              name="destination_program"
              id="University"
              // value={mappingFormDetails.origin_program}
              onChange={inputMappingDetails}
            >
              <option value="" disabled selected hidden>Destination Programs</option>
              {
                universities[0].programs.map((program, index) => <option value={program.id}>{program.name}</option>)
              }
            </select>

            <select
              name="destination_name"
              id="University"
              value={mappingFormDetails.destination_name}
              onChange={inputMappingDetails}
            >
              <option value="" disabled selected hidden>Destination Course Name</option>
              {universities[0].programs.map((program) => {
                if (mappingFormDetails.destination_program == program.id) {
                  return program.study_Plan.map((plan) => (
                    <option key={plan.id} value={plan.name}>
                      {plan.name}
                    </option>
                  ));
                }
                return null;
              })}
            </select>

            <select
              name="destination_course_code"
              id="University"
              value={mappingFormDetails.destination_course_code}
              onChange={inputMappingDetails}
            >
              <option value="" disabled selected hidden>
                Destination Course Code
              </option>
              {universities[0].programs.map((program) => {
                if (mappingFormDetails.destination_program == program.id) {
                  return program.study_Plan.map((plan) => {
                    if (mappingFormDetails.destination_name === plan.name) {
                      return (
                        <option key={plan.id} value={plan.code}>
                          {plan.code}
                        </option>
                      );
                    }
                    return null;
                  });
                }
                return null;
              })}
            </select>

            <input
              type="text"
              placeholder="Origin Course Name"
              name="origin_course_name"
              value={mappingFormDetails.destination_course_name}
              onChange={inputMappingDetails}
            />

            <button className='formBtn' onClick={handleMappingFormSubmit}>Submit</button>
          </div>
        }

        {
          tab === "view_mapping" &&
          <div className='tableMainContainer'>
            <div className='tableFilterDiv'>
              <select name="University" id="University"
                value={uniId}
                onChange={handleUNIselect}
              >
                <option value="" disabled selected hidden>Please Select Destination University</option>
                {
                  universities.map((university) => {
                  
                    if(university.id === 1){
                      return (
                        <option value={university.id} >{university.name}</option>
                      )
                    }
                  })
                }
              </select>
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
              <select name="University" id="University"
                value={programId}
                onChange={handleMappingProgramSelect}
              >
                <option value="" disabled selected hidden>Please Select Program</option>
                {
                  programs.map((program) => {
                    return (
                      <option value={program.id}>{program.name}</option>
                    )
                  })
                }
              </select>
            </div>
            <table className='table'>
              <tbody>
                <tr>
                  <th> code</th>
                  <th>Destination course</th>
                  <th>Origin course</th>
                  {/* <th>Action</th> */}
                </tr>
                {
                  mappingDetails.map((course) => {
                    return (
                      <tr>
                        <td>{course.destination_course_code}</td>
                        <td>{course.destination_name}</td>
                        <td>{course.origin_course_name}</td>
                        {/* <td>
                          <div style={{
                            display: "flex",
                            gap: "1rem",
                          }}>
                            <button
                              className='actionBtn'
                              onClick={() => deleteCourse(course.id)}
                            >
                              Delete
                            </button>
                            <button
                              className='actionBtn'
                              onClick={() => handleUpdate(course.id)}
                            >
                              Update
                            </button>
                          </div>
                        </td> */}
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            {isUpdate && <div
              style={{
                width: '400px',
                height: '350px',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)',
                zIndex: '999',
              }}
            >
              <div>
                <h1 style={{ textAlign: 'center' }}>Update Course</h1>
                <input type="text" placeholder={"Course"} style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#1C3564",
                }}
                  onChange={(e) => {
                    setCourse(e.target.value)
                  }}
                />
                <input type="text" placeholder={"Course Code"} style={{
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#1C3564",
                }}
                  onChange={(e) => {
                    setCourseCode(e.target.value)
                  }}
                />

                <button style={{
                  alignItems: "center",
                  width: "100%",
                  height: "50px",
                  padding: "10px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "white",
                  backgroundColor: "black"

                }}
                  onClick={updateCourse}
                >Submit</button>

                <p style={{
                  textAlign: 'center',
                  color: "red",
                  cursor: 'pointer',
                }} onClick={() => setIsUpdate(false)}>Close</p>
              </div>
            </div>}
          </div>
        }

        {isOpen && (
          <div className='modalContainer'>
            <div>
              <h1 style={{ textAlign: 'center' }}>Add {modelSection}</h1>
              <input
                type="text"
                placeholder={modelSection}
                className="modalInput"
                onChange={(e) => setUniversity(e.target.value)}
              />
              <button className='modalBtn' onClick={handleAddUniSubmit}>Submit</button>
              <p className='modalCloseBtn' onClick={closePopup}>Close</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )

}


export default Form;