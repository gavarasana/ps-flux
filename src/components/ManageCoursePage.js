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

  const [errors, setErrors] = useState({});

  function isFormValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required.";
    if (!course.authorId) _errors.authorId = "Author is required.";
    if (!course.category) _errors.category = "Category is required.";

    setErrors(_errors);

    return (Object.keys(errors).length === 0);
  }


  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
    courseApi.saveCourse(course);
  }

  return (
    <>
      <h1>Manage Course</h1>
      <CourseForm course={course} errors={errors} onChange={handleChange} onSubmit={onSubmit} />
    </>
  );
};

export default ManageCoursePage;
