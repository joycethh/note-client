import * as api from "../api/index.js";

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = api.fetchNotes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
