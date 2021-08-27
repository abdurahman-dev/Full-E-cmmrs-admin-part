import axios from "../../helper/aixos";
import { authConstants } from "./constants";

export const logIn = (user) => {
  return async (dispatch, getState) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });
    const res = await axios.post("/admin/signin", {
      ...user,
    });
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILED,
        payload: {
          err: res,
        },
      });
    }
  };
};

export const isLoggedIn = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILED,
        payload: {
          err: "need to logIn",
        },
      });
    }
  };
};

export const singout = () => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGOUT_REQUEST,
    });
    const res = await axios.post("/admin/signout");
    console.log(res);
    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
        payload: {
          error: "logout error",
        },
      });
    }
  };
};
