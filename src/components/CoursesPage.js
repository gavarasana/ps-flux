import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";

function CoursesPage() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then(_courses => setCourses(_courses));
    }, []);

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="courses/add-new">Add New Course</Link>
            <CourseList courses={courses}></CourseList>
        </>
    );

}

export default CoursesPage;