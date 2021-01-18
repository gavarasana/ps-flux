import { handleResponse, handleError, handleOnlyOneResult } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

export function getCourses() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function getCoursesBySlug(slug) {
    return fetch(baseUrl + "?slug=" + slug)
        .then(handleOnlyOneResult)
        .catch(handleError);
}

export function saveCourse(course) {
    return fetch(baseUrl + (course.id || ""), {
        method: course.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            ...course,
            authorId: parseInt(course.authorId, 10)
        })
    })
        .then(handleResponse)
        .error(handleError);
}

export function deleteCourse(courseId) {
    return fetch(baseUrl + courseId, {
        method: "DELETE"
    })
        .then(handleResponse)
        .catch(handleError)
}