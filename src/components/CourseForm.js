import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="title"
                name="title"
                label="Title"
                value={props.course.title}
                error={props.errors.title}
                onChange={props.onChange}
            />

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        value={props.course.authorId || ""}
                        onChange={props.onChange}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
                {props.errors.authorId && <div className="alert alert-danger">{props.errors.authorId}</div>}
            </div>

            <TextInput
                id="category"
                name="category"
                label="Category"
                onChange={props.onChange}
                error={props.errors.category}
                value={props.course.category}
            />

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,

};

export default CourseForm;
