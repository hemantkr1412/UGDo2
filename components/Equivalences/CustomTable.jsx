import React from 'react';

const CustomTable = ({ courses, columns, deleteAction, updateAction }) => {
    return (
        <table className='table'>
            <tbody>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key}>{column.label}</th>
                    ))}
                    {updateAction && <th>Action</th>}
                </tr>
                {courses.map((course) => (
                    <tr key={course.id}>
                        {columns.map((column) => (
                            <td key={column.key}>{course[column.key]}</td>
                        ))}
                        <td>
                            <div className="actionBtnWrapper">
                                <button
                                    className='actionBtn'
                                    onClick={() => deleteAction(course.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className='actionBtn'
                                    onClick={() => updateAction(course)}
                                >
                                    Update
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CustomTable;
