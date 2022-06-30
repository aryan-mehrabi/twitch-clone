import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const authReducer = (state = { isSignedIn: null, userId: "" }, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: "" };
    default:
      return state;
  }
};

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "FETCH_STREAMS":
      return {
        ...state,
        ...action.payload.reduce(
          (streams, stream) => ({...streams, [stream.id]: stream}),
          {}
        ),
      };
    case "DELETE_STREAM":
      const { [action.payload]: id, ...newStreams } = state;
      return newStreams;
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});
