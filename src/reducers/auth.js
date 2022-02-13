import { AUTH, LOGOUT } from "../constants/constants";

const LocalStorageLogin = JSON.parse(localStorage.getItem("profile"));

const authState = LocalStorageLogin != null ? LocalStorageLogin?.result : null;

const authReducer = (state = { authData: authState }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data.result };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
