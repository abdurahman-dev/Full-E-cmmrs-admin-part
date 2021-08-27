import { userConstants } from "./constants";
import axios from "../../helper/aixos";

export const signup = (userInfo) => {
  return async (dispatch) => {
    dispatch({
      type: userConstants.USER_SIGNUP_REQUEST,
    });
    const user = await axios.post("/admin/signup", {
      ...userInfo,
    });
    if (user.status === 200) {
      const { message } = user.data;
      dispatch({
        type: userConstants.USER_SIGNUP_SUCCESS,
        payload: message,
      });
    } else {
      dispatch({
        type: userConstants.USER_SIGNUP_FAILED,
        payload: user.data.message,
      });
    }
  };
};
