import { SET_USER_TOKEN, SET_USER_ID, SET_USER_DETAILS, SET_VIEW_POPUP } from "./actions";

const initialState = {
  token: "",
  user_id: "",
  userDetails:"",
  setViewPopup: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_TOKEN:
      return { ...state, token: action.payload };
    case SET_USER_ID:
      return { ...state, user_id: action.payload };
    case SET_USER_DETAILS:
      return { ...state, user_id: action.payload };  
    case SET_VIEW_POPUP:
      return { ...state, setViewPopup: action.payload };
    default:
      return state;
  }
}

export default userReducer;
