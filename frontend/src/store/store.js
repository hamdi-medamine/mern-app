import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers";
import thunk from "redux-thunk";
export const store= createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
