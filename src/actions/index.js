import axios from "axios";
export const signIn = id => {
  return {
    type: "SIGN_IN",
    payload: id,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const createStream = stream => async dispatch => {
  const response = await axios.post("http://localhost:3001/streams", stream);
  dispatch({ type: "CREATE_STREAM", payload: response.data });
};

export const editStream = stream => async dispatch => {
  const response = await axios.put(
    `http://localhost:3001/streams/${stream.id}`,
    stream
  );
  dispatch({ type: "EDIT_STREAM", payload: response.data });
};

export const deleteStream = id => async dispatch => {
  axios.delete(`http://localhost:3001/streams/${id}`);
  dispatch({ type: "DELETE_STREAM", payload: id });
};

export const fetchStreams = () => async dispatch => {
  const response = await axios.get("http://localhost:3001/streams");
  dispatch({ type: "FETCH_STREAMS", payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await axios.get(`http://localhost:3001/streams/${id}`);
  dispatch({ type: "FETCH_STREAM", payload: response.data });
};
