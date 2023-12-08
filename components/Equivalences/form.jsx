"use client";

import React, { useEffect, useState } from 'react';
import API from '../scripts/apicall';
import "./equivalences.css"

const Form = () => {
  const api = API();
  const [universities, setUniversities] = useState([]);
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
  const [isUpdate, setIsUpdate] = useState(false)

  const [mappingFormDetails, setMappingFormDetails] = useState({})

  const poppulateUniversties = async () => {
    await api
      .crud("GET", "equivalences/universities")
      .then((res) => {
        if (res.status === 200) {
          // console.log(res)
          setUniversities(res);
          // setUniversities(res.slice(0, -1));
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
  }, [isOpen])

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
    } else {
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

    } else {
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


  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#DEE4EA",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        marginTop: "8rem",
        width: "70%",
        height: "100vh",
        backgroundColor: "white",
        padding: "1rem",

      }}>
        <div style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "auto",
          height: "50px",
          backgroundColor: "white",
          boxShadow: " 0 8px 8px 0 rgba(0,0,0,0.2)",
        }}>
          <div style={{
            fontSize: "1rem",
            color: "black",
            textDecoration: tab === "view" ? "underline" : "none",
            cursor: "pointer",
          }}
            onClick={() => setTab("view")}
          >
            View Details
          </div>
          <div style={{
            fontSize: "1rem",
            color: "black",
            textDecoration: tab === "add" ? "underline" : "none",
            cursor: "pointer"
          }}
            onClick={() => setTab("add")}
          >
            Add Details
          </div>
          <div style={{
            fontSize: "1rem",
            color: "black",
            textDecoration: tab === "mapping" ? "underline" : "none",
            cursor: "pointer"
          }}
            onClick={() => setTab("mapping")}
          >
            Mapping Details
          </div>
          <div style={{
            fontSize: "1rem",
            color: "black",
            textDecoration: tab === "view_mapping" ? "underline" : "none",
            cursor: "pointer"
          }}
            onClick={() => setTab("view_mapping")}
          >
            View Mapping
          </div>
        </div>
        {
          tab === "view" &&
          <div style={{
            width: "100%",
            height: "auto",
          }}>

            <div style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "3rem",
              marginTop: "2rem",
              padding: "2rem",

            }}>
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

            <table style={{
              marginTop: "2rem",
              marginLeft: "11%"
            }}>
              <tbody>
                <tr>
                  <th>Code</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>

                {/* <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td><button>Edit</button></td>
                </tr> */}
                {
                  courses.map((course) => {
                    return (
                      <tr>
                        <td>{course.code}</td>
                        <td>{course.name}</td>
                        <td >
                          <div style={{
                            display: "flex",
                            gap: "1rem",
                          }}>
                            <button style={{
                              width: "50%",
                              backgroundColor: "black",
                              color: "white",
                              padding: "5px",
                              borderRadius: "5px",
                              border: "none",
                            }} onClick={
                              () => {
                                deleteCourse(course.id)
                              }
                            }>Delete </button>
                            <button style={{
                              width: "50%",
                              backgroundColor: "black",
                              color: "white",
                              padding: "5px",
                              borderRadius: "5px",
                              border: "none"
                            }} onClick={() => handleUpdate(course.id)}>Update </button>
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
          <div style={{
            marginTop: "5rem",
            marginLeft: "25%",
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            backgroundColor: "white",
            boxShadow: " 0 8px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            color: "white",
          }}>
            <p style={{
              marginTop: "-3.5rem",
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: "500",
              color: "black"
            }}>Data Entry</p>

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


            <input type="text" placeholder="Course" style={{
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


            <input type="text" placeholder="Course Code" style={{
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
              onClick={handleSubmit}
            >Submit</button>
          </div>
        }
        {
          tab === 'mapping' &&
          <div style={{
            marginTop: "5rem",
            marginLeft: "25%",
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            backgroundColor: "white",
            boxShadow: " 0 8px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            color: "white",
          }}>
            <p style={{
              marginTop: "-3.5rem",
              textAlign: "center",
              fontSize: "3rem",
              fontWeight: "500",
              color: "black"
            }}>Data Entry</p>

            <select
              name="origin_university"
              id="University"
              value={mappingFormDetails.origin_university}
              onChange={inputMappingDetails}
            >
              <option value="" disabled selected hidden>Origin University</option>
              <option value={universities[0].id}>{universities[0].name}</option>
            </select>

            <select
              name="destination_university"
              id="University"
              // value={mappingFormDetails.destination_university}
              onChange={(e) => inputMappingDetails(e, e.target.value)}
            >
              <option value="" disabled selected hidden>Destination University</option>
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
              name="origin_program"
              id="University"
              // value={mappingFormDetails.origin_program}
              onChange={inputMappingDetails}
            >
              <option value="" disabled selected hidden>Origin Programs</option>
              {
                universities[0].programs.map((program, index) => <option value={program.id}>{program.name}</option>)
              }
            </select>

            <select
              name="origin_course_name"
              id="University"
              value={mappingFormDetails.origin_course_name}
              onChange={inputMappingDetails}
            >
              <option value="" disabled selected hidden>Origin Course Name</option>
              {universities[0].programs.map((program) => {
                if (mappingFormDetails.origin_program == program.id) {
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
                Origin Course Code
              </option>
              {universities[0].programs.map((program) => {
                if (mappingFormDetails.origin_program == program.id) {
                  return program.study_Plan.map((plan) => {
                    if (mappingFormDetails.origin_course_name === plan.name) {
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
            </select>;

            <input
              type="text"
              placeholder="Destinaton Course Name"
              name="destination_course_name"
              value={mappingFormDetails.destination_course_name}
              style={{
                width: "100%",
                height: "50px",
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "5px",
                marginTop: "20px",
                marginBottom: "20px",
                color: "#1C3564",
              }}
              onChange={inputMappingDetails}
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
              onClick={handleMappingFormSubmit}
            >Submit</button>
          </div>
        }

        {
          tab === "view_mapping" &&
          <div style={{
            width: "100%",
            height: "auto",
          }}>

            <div style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "3rem",
              marginTop: "2rem",
              padding: "2rem",

            }}>
              <select name="University" id="University"
                value={uniId}
                onChange={handleUNIselect}
              >
                <option value="" disabled selected hidden>Please Select Origin University</option>
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
                <option value="" disabled selected hidden>Please Select Destination University</option>
                {
                  programs.map((program) => {
                    return (
                      <option value={program.id}>{program.name}</option>
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

            <table style={{
              marginTop: "2rem",
              marginLeft: "11%"
            }}>
              <tbody>
                <tr>
                  <th>Source code</th>
                  <th>Source course</th>
                  <th>Destination course</th>
                  <th>Action</th>
                </tr>
                {
                  courses.map((course) => {
                    return (
                      <tr>
                        <td>{course.code}</td>
                        <td>{course.name}</td>
                        <td >
                          <div style={{
                            display: "flex",
                            gap: "1rem",
                          }}>
                            <button style={{
                              width: "50%",
                              backgroundColor: "black",
                              color: "white",
                              padding: "5px",
                              borderRadius: "5px",
                              border: "none",
                            }} onClick={
                              () => {
                                deleteCourse(course.id)
                              }
                            }>Delete </button>
                            <button style={{
                              width: "50%",
                              backgroundColor: "black",
                              color: "white",
                              padding: "5px",
                              borderRadius: "5px",
                              border: "none"
                            }} onClick={() => handleUpdate(course.id)}>Update </button>
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

        {isOpen && (
          <div
            style={{
              width: '400px',
              height: '250px',
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
              <h1 style={{ textAlign: 'center' }}>Add {modelSection}</h1>
              <input type="text" placeholder={modelSection} style={{
                width: "100%",
                height: "50px",
                padding: "10px",
                border: "1px solid grey",
                borderRadius: "5px",
                marginTop: "20px",
                marginBottom: "20px",
                color: "#1C3564",
              }}
                onChange={(e) => setUniversity(e.target.value)}
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
                onClick={handleAddUniSubmit}
              >Submit</button>

              <p style={{
                textAlign: 'center',
                color: "red",
                cursor: 'pointer',
              }} onClick={closePopup}>Close</p>
            </div>

          </div>
        )}
      </div>
    </div>
  )

}


export default Form;