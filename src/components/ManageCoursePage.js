import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course);
  }

  return (
    <>
      <h1>Manage Course</h1>
      <CourseForm course={course} onChange={handleChange} onSubmit={onSubmit} />
    </>
  );
};

export default ManageCoursePage;
