import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      // state.push(action.course); //DON'T DO THIS because mutate state, state sould be inmutable
      return [...state, { ...action.course }]; //Whatever is returned fro the reducer becomes the new state
    case types.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);
    default:
      return state; // In case reducers action is not in the reducers it will return the unchanged state
  }
}
