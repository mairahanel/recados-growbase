import { combineReducers } from "@reduxjs/toolkit";
import user from "./user/UserSlice";
import login from "./login/LoginSlice";

export default combineReducers({
    user,
    login,
});