import React from "react";


function CourseForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <div className="field">
                    <input id="title" name="title"
                        type="text" className="form-control" value={props.course.title} onChange={props.onChange} />
                </div>
            </div>




                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>

            </div>

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <div className="field">
                    <input id="category" name="category"
                        type="text" onChange={props.onChange} className="form-control" value={props.course.category} />
                </div>
            </div>

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

