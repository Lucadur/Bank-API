import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../redux/login";
import authenticationReducer from "../redux/authentication";
import updateReducer from "../redux/updateProfile";

export default configureStore({
  reducer: {
    login: loginReducer,
    authentication: authenticationReducer,
    updateProfile: updateReducer,
  },
});
