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
  const [courses, setCourses] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [addOption, setAddOption] = useState({ type: '' });

  const [tab, setTab] = useState("view")
  const [isUpdate, setIsUpdate] = useState(false);
  const [originUniId, setOriginUniId] = useState("");

  const [addDetailsFormData, setAddDetailsFormData] = useState({});
  const [updateCourseDetails, setUpdateCourseDetails] = useState({});

  const [mappingFormDetails, setMappingFormDetails] = useState({})

  const populateUniversities = async () => {
    try {
      const res = await api.crud("GET", "equivalences/universities");
      console.log(res)

      res.status === 200 && setUniversities(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const populateMappingDetails = async () => {
    const res = await api.crud("GET", `equivalences/equivalence-data`)
    console.log(res)
    try {
      res.status === 200 && setMappingData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateUniversities();
    populateMappingDetails();
  }, []);

  const openPopup = () => setIsOpen(true);

  const closePopup = () => setIsOpen(false);

  const inputMappingDetails = (e, id) => {
    const { name, value } = e.target;
    if (value === "Add University") {
      openPopup();
      setAddOption((prev) => ({ ...prev, type: 'University' }));
    }
    else
      setMappingFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleUNIselect = (e) => {
    if (e.target.value === "Add University") {
      openPopup();
      setAddOption((prev) => ({ ...prev, type: 'University' }));
    }
    else {
      setAddDetailsFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
      setPrograms(
        universities.filter((uni) => uni.id == e.target.value)[0].programs
      )
    }
  }

  const handleProgramSelectView = (programId) => {
    setCourses(programs.filter(
      (program) => program.id == programId)[0].study_Plan
    )
    populateMappingDetails();
  }

  const handleProgramSelectAdd = (e) => {
    if (e.target.value == "Add Program") {
      openPopup();
      setAddOption((prev) => ({ ...prev, type: 'Program' }));
    }
    else
      setAddDetailsFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  }

  const handleMappingFormSubmit = async () => {
    const res = await api.crud("POST", "equivalences/equivalence-data", mappingFormDetails, false)
    console.log(res);
    try {
      if (res.status === 201) {
        populateMappingDetails()
        alert("Course Added Successfully")
        setMappingFormDetails({
          destination_university: '',
          origin_university: '',
          destination_program: '',
          destination_name: '',
          destination_course_code: '',
          origin_course_name: ''
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddDetailsFormSubmit = async () => {
    const res = await api.crud("POST", "equivalences/study-plan", {
      program: addDetailsFormData.programId,
      name: addDetailsFormData.course,
      code: addDetailsFormData.courseCode
    }, false)
    try {
      console.log(res);
      populateUniversities();
      // if (res.status == 200) {
        alert("Course Added Successfully")
        setAddDetailsFormData({
          universityId: "",
          programId: "",
          course: "",
          courseCode: ""
        });
      // }
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddUniSubmit = async () => {
    if (addOption.type === "University") {
      const res = await api.crud("POST", "equivalences/universities", {
        name: addOption.new_university
      }, false)
      try {
        console.log(res);
        closePopup()
        setAddOption({ type: '', new_university: '' })
        populateUniversities();

        res.status === 200 && alert("University Added Successfully")
      } catch (error) {
        console.error(error);
      }
    }
    else {
      try {
        const res = await api.crud("POST", "equivalences/programs", {
          name: addOption.new_program,
          university: addDetailsFormData.universityId
        }, false);

        console.log(res);
        closePopup();

        if (res.status === 201) {
          alert("Program Added Successfully")
          const updatedData = await populateUniversities();
          setPrograms(updatedData.filter(
            (uni) => uni.id == addDetailsFormData.universityId)[0].programs
          )
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  const deleteCourse = async (courseId) => {
    try {
      const res = await api.crud("DELETE", `equivalences/study-plan/${courseId}`)
      console.log(res)
      populateUniversities();

      setCourses(courses.filter((course) => course.id != courseId));
      res.status == 200 && alert("Course Deleted Successfully")
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  }

  const updateCourse = async () => {
    try {
      await api.crud("PUT", `equivalences/study-plan/${updateCourseDetails.id}`, {
        program: updateCourseDetails.program,
        name: updateCourseDetails.name,
        code: updateCourseDetails.code,
      });

      alert("Course Updated Successfully");
      const updatedData = await populateUniversities();
      setIsUpdate(false);

      setPrograms(
        updatedData.filter((uni) => uni.id == addDetailsFormData.universityId)[0].programs
      )

      const uniVer = updatedData.filter((uni) => uni.id == addDetailsFormData.universityId)[0].programs
      const program = uniVer.filter((program) => program.id == updateCourseDetails.program)

      setCourses(program[0].study_Plan);

    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleUpdate = (course) => {
    setIsUpdate(true)
    setUpdateCourseDetails({ ...course })
  }

  const handleOriginSelected = (e) => {
    setOriginUniId(e.target.value)
  }

  const handleMappingProgramSelect = (e) => {
    console.log(mappingData)
    setMappingDetails(
      mappingData.filter((mapping) => mapping.destination_program == e.target.value && mapping.origin_university == originUniId)
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
              <select
                id="University"
                name="universityId"
                value={addDetailsFormData.universityId}
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

              <select
                id="University"
                onChange={(e) => handleProgramSelectView(e.target.value)}
              >
                <option value="" disabled selected hidden>Please Select Program</option>
                {
                  programs.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))
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
                              onClick={() => handleUpdate(course)}
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
            {isUpdate &&
              <div className='modalContainer'>
                <div>
                  <h1 style={{ textAlign: 'center' }}>Update Course</h1>
                  <input
                    type="text"
                    placeholder={"Course"}
                    name="name"
                    value={updateCourseDetails.name}
                    className="modalInput"
                    onChange={(e) => setUpdateCourseDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                  />
                  <input
                    type="text"
                    placeholder={"Course Code"}
                    name="code"
                    value={updateCourseDetails.code}
                    className="modalInput"
                    onChange={(e) => setUpdateCourseDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                  />
                  <button className='modalBtn' onClick={updateCourse}>Submit</button>
                  <p className='modalCloseBtn' onClick={() => setIsUpdate(false)}>Close</p>
                </div>
              </div>}
          </div>
        }

        {
          tab === 'add' &&
          <div className="formContainer">
            <p className="formHead">Data Entry</p>

            <select
              name="universityId"
              value={addDetailsFormData.universityId}
              id="University"
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
              <option
                style={{
                  color: "black",
                  fontWeight: "bold",
                  padding: "10px"
                }}
                name="university"
              >
                Add University
              </option>
            </select>

            <select
              name="programId"
              value={addDetailsFormData.programId}
              id="University"
              onChange={handleProgramSelectAdd}
            >
              <option value="" disabled selected hidden>Please Select Program</option>
              {
                programs.map((program) => {
                  return (
                    <option value={program.id}>{program.name}</option>
                  )
                })
              }

              <option
                style={{
                  color: "black",
                  fontWeight: "bold",
                  padding: "10px"
                }}
                name="program"
              >
                Add Program
              </option>

            </select>

            <input
              type="text"
              placeholder="Course"
              name="course"
              value={addDetailsFormData.course}
              onChange={(e) => setAddDetailsFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            />

            <input
              type="text"
              placeholder="Course Code"
              name="courseCode"
              value={addDetailsFormData.courseCode}
              onChange={(e) => setAddDetailsFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
            />

            <button className='formBtn' onClick={handleAddDetailsFormSubmit}>Submit</button>
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
              id="University"
              name="origin_university"
              value={mappingFormDetails.origin_university}
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
                }} name="university">Add University</option>}
            </select>

            <select
              id="University"
              name="destination_program"
              value={mappingFormDetails.destination_program}
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
              value={mappingFormDetails.origin_course_name}
              onChange={inputMappingDetails}
            />

            <button className='formBtn' onClick={handleMappingFormSubmit}>Submit</button>
          </div>
        }

        {
          tab === "view_mapping" &&
          <div className='tableMainContainer'>
            <div className='tableFilterDiv'>
              <select
                name="University"
                id="University"
                onChange={handleUNIselect}
              >
                <option value="" disabled selected hidden>Please Select Destination University</option>
                {
                  universities.map((university) => {

                    if (university.id === 1) {
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

                    if (university.id !== 1) {
                      return (
                        <option value={university.id} >{university.name}</option>
                      )
                    }
                  })
                }
              </select>

              <select
                id="University"
                name="University"
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
                  <th>Code</th>
                  <th>Destination course</th>
                  <th>Origin course</th>
                  <th>Action</th>
                </tr>
                {
                  mappingDetails.map((course) => {
                    return (
                      <tr>
                        <td>{course.destination_course_code}</td>
                        <td>{course.destination_name}</td>
                        <td>{course.origin_course_name}</td>
                        <td>
                          <div style={{
                            display: "flex",
                            gap: "1rem",
                          }}>
                            <button
                              className='actionBtn'
                            // onClick={() => deleteCourse(course.id)}
                            >
                              Delete
                            </button>
                            <button
                              className='actionBtn'
                              onClick={() => handleUpdate(course)}
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
            {isUpdate &&
              <div
                className='modalContainer'
              >
                <div>
                  <h1 style={{ textAlign: 'center' }}>Update Course</h1>
                  <input
                    type="text"
                    placeholder={"Course"}
                    name="course"
                    value={addDetailsFormData.course}
                    className="modalInput"
                    onChange={(e) => setAddDetailsFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                  />
                  <input
                    type="text"
                    placeholder={"Course Code"}
                    name="courseCode"
                    value={addDetailsFormData.courseCode}
                    className="modalInput"
                    onChange={(e) => setAddDetailsFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                  />

                  <button className='modalBtn' onClick={updateCourse}>Submit</button>

                  <p className='modalCloseBtn' onClick={() => setIsUpdate(false)}>Close</p>
                </div>
              </div>}
          </div>
        }

        {isOpen && (
          <div className='modalContainer'>
            <div>
              <h1 style={{ textAlign: 'center' }}>Add {addOption.type}</h1>
              <input
                type="text"
                placeholder={addOption.type}
                name={`${addOption.type == 'University' ? 'new_university' : 'new_program'}`}
                value={addOption.type === 'University' ? addOption.new_university : addOption.new_program}
                className="modalInput"
                onChange={(e) => setAddOption((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              />
              <button className='modalBtn' onClick={handleAddUniSubmit}>Submit</button>
              <p className='modalCloseBtn' onClick={closePopup}>Close</p>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}


export default Form;