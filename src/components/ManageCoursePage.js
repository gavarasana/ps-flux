import React from "react";
import { Prompt } from "react-router-dom";

const ManageCoursePage = props => {
    return (

        <>
            <h1>Manage Course</h1>
            <Prompt when={true} message="Are you sure you wnat to leave?" />
            {props.match.params.slug}
        </>
    );
}

export default ManageCoursePage;