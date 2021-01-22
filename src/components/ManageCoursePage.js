import React, { useState } from "react";

import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
    const [course, setCourse] = useState({
        id: null,
        title: "",
        authorId: null,
        category: ""

    });

    function handleChange(event) {
        const updatedCourse = { ...course, [event.target.name]: event.target.value };
        setCourse(updatedCourse);
    }

    return (

        <>
            <h1>Manage Course</h1>
            <CourseForm course={course} onChange={handleChange} />
        </>
    );
}

export default ManageCoursePage;
