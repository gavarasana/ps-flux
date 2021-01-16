import { courses } from "../../tools/mockData";

export async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok");
}

export function handleError(error) {
    console.error("API call failed. " + error)
    throw new Error(error);
}

export function handleOnlyOneResult(response) {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json().then(courses => {
        if (courses.length !== 1) throw new Error("Course not found.");
        return courses[0];
    });
}