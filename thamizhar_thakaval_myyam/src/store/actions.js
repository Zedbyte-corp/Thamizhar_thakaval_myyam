export const SET_USER_TOKEN = "SET_USER_TOKEN";
export const SET_USER_ID = "SET_USER_ID";
export const SET_VIEW_POPUP = "SET_VIEW_POPUP";


export const setToken = (token) => (dispatch) => {
  dispatch({
    type: SET_USER_TOKEN,
    payload: token,
  });
};

export const setUserId = (setUserId) => (dispatch) => {
  dispatch({
    type: SET_USER_ID,
    payload: setUserId,
  });
};

export const setViewPopup = (setViewPopup) => (dispatch) => {
    dispatch({
      type: SET_VIEW_POPUP,
      payload: setViewPopup,
    });
  };

