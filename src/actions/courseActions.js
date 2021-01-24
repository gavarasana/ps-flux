import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export async function saveCourse(course){
    const savedCourse = await courseApi.saveCourse(course);
    dispatcher.dispatch({
        action_type:  course.id ? actionTypes.UPDATE_COURSE :  actionTypes.CREATE_COURSE,
        course: savedCourse
    });
}

export async function loadCourses(){
    const _courses = await courseApi.getCourses();
    dispatcher.dispatch({
        action_type: actionTypes.LOAD_COURSES,
        courses: _courses
    });
}

export async function deleteCourse(courseId){
    await courseApi.deleteCourse(courseId);
    dispatcher.dispatch({
        action_type: actionTypes.DELETE_COURSE,
        courseId: courseId
    });
}