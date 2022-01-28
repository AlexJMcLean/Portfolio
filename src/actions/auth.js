import { AUTH } from "../constants/constants";
import * as api from "../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    //log in the user`
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });

    navigate("/admin");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    //log in the user`
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });

    navigate("/admin");
  } catch (error) {
    console.log(error);
  }
};

export const demo = (navigate) => async (dispatch) => {
  try {
    const { data } = await api.demo();
    dispatch({ type: AUTH, data });
    navigate("/admin");
  } catch (error) {
    console.log(error);
  }
};
