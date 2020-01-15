import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { imageReducer, loadReducer, errorReducer } from "./reducer";

const rootReducer = combineReducers({
  images: imageReducer,
  loading: loadReducer,
  error: errorReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
