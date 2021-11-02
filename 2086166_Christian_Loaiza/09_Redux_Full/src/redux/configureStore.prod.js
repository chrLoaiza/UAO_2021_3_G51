import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers"; //Because is index.js we don't need to call it
import thunk from "redux-thunk";

export default function configureStore(initialStage) {
  return createStore(rootReducer, initialStage, applyMiddleware(thunk));
}
