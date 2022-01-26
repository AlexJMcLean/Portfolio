import { AUTH } from "../constants/constants";
import * as api from "../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //log in the user
    history.push("/admin");
  } catch (error) {
    console.log(error);
  }
};
