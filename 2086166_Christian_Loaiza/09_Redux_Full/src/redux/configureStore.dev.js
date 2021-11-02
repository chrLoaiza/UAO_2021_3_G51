import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers"; //Because is index.js we don't need to call it
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialStage) {
  // Add support for Redux dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialStage,
    // Is a function so we should run witj parenthesis
    // This will warn us if we accidentally mutate a Redux state
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
