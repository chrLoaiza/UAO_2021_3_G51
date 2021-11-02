import { combineReducers } from "redux";
import courses from "./courseReducer"; // Due to default export we could name the value whatever we want in the import.
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
