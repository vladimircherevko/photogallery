import { bootstrap } from "../bootstrap";
import { SET_ERROR, GET_IMAGE_INFO } from "./types";

export const getImageInfo = () => async dispatch => {
  try {
    const data = await bootstrap();
    if (!data.length) throw new Error("Empty list");

    dispatch({
      type: GET_IMAGE_INFO,
      payload: data
    });
  } catch (err) {
    dispatch(setError(err.message));
    console.log(err);
  }
};

export const setError = err => ({
  type: SET_ERROR,
  payload: err || "Unknown error"
});
