const Modal = ({
    activeTab,
    setIsUpdate,
    updateCourseDetails,
    setUpdateCourseDetails,
    updateCourse,
    handleUpdateMappingCourse
}) => {
    return (
        <div className='modalContainer'>
            <div>
                <h1 style={{ textAlign: 'center' }}>Update Course</h1>
                {
                    activeTab === 'view'
                        ?
                        <>
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
                        </>
                        :
                        <>
                            <input
                                type="text"
                                placeholder="Origin course"
                                name="origin_course_name"
                                value={updateCourseDetails.origin_course_name}
                                className="modalInput"
                                onChange={(e) => setUpdateCourseDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                            />
                            <button className='modalBtn' onClick={handleUpdateMappingCourse}>Submit</button>
                        </>
                }

                <p className='modalCloseBtn' onClick={() => setIsUpdate(false)}>Close</p>
            </div>
        </div>
    )
}

export default Modal;