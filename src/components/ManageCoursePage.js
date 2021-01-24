import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
//import * as courseApi from "../api/courseApi";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {

  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  const [courses, setCourses] = useState(courseStore.getCourses());

  const [errors, setErrors] = useState({});

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const _slug = props.match.params.slug;
    if (courses.length === 0){
      courseActions.loadCourses();
    } else if (_slug) {
      setCourse(courseStore.getCourseBySlug(_slug));      
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);


  function onChange(){
    setCourses(courseStore.getCourses());
  }

  function isFormValid() {

    const _errors = {};

    if (!course.title) _errors.title = "Title is required.";
    if (!course.authorId) _errors.authorId = "Author is required.";
    if (!course.category) _errors.category = "Category is required.";

    setErrors(_errors);

    return (Object.keys(_errors).length === 0);
  }


  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved");
    });

  }

  return (
    <>
      <h1>Manage Course</h1>
      <CourseForm course={course} errors={errors} onChange={handleChange} onSubmit={onSubmit} />
    </>
  );
};

export default ManageCoursePage;
