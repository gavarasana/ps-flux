import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
//import { getCourses } from "../api/courseApi";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function CoursesPage() {

    const [courses, setCourses] = useState(courseStore.getCourses());

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) {
            courseActions.loadCourses();
        }
        return () =>  courseStore.removeChangeListener(onChange);
    }, []);

    function onChange(){
        setCourses(courseStore.getCourses());
    }

    function deleteCourse(courseId) {
        courseActions.deleteCourse(courseId);
        toast.success("Course deleted");
    }

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="courses/add-new">Add New Course</Link>
            <CourseList courses={courses} deleteCourse={deleteCourse}></CourseList>
        </>
    );

}

export default CoursesPage;