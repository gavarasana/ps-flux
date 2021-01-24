import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getCourses(){
        return _courses;
    }

    getCourseBySlug(slug){
        debugger;
        return _courses.find(course => course.slug === slug);
    }

}

const courseStore = new CourseStore();

dispatcher.register(action => {
    debugger;
    switch (action.action_type) {
        case actionTypes.CREATE_COURSE:
            _courses.push(action.course);
            courseStore.emitChange();
            break;
        case actionTypes.LOAD_COURSES:
            _courses = action.courses;
            courseStore.emitChange();
            break;
        case actionTypes.UPDATE_COURSE:
            _courses = _courses.map(course => course.id === action.course.id ? action.course : course );
            courseStore.emitChange();
            break;
        case actionTypes.DELETE_COURSE:
            _courses = _courses.filter(course => course.id !== parseInt(action.courseId, 10));
            courseStore.emitChange();
            break;
        default:
            // do nothing
    }
})


export default courseStore;
