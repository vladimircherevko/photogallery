import { SET_ERROR, GET_IMAGE_INFO } from "./types";

export const imageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_IMAGE_INFO:
      return action.payload;
    default:
      return state;
  }
};

export const loadReducer = (state = true, action) => {
  switch (action.type) {
    case GET_IMAGE_INFO:
    case SET_ERROR:
      return false;
    default:
      return state;
  }
};
export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};
