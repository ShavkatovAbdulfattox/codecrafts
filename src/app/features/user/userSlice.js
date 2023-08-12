/** @format */

import { createSlice } from "@reduxjs/toolkit";
import {
    getToken,
    getUserData,
    removeToken,
    removeUserData,
    saveToken,
    saveUserData,
} from "../../../utils/functions.js";

const userSlice = createSlice({
    name: "user",
    initialState: {
        // data: JSON.parse(localStorage.getItem("userData")) || null,
        isLogged: !!getUserData()?.token,
        userData: {},   
    },
    reducers: {
        logIn: (state, { payload }) => {
            state.userData = payload;
            state.isLogged = true;
            saveUserData(payload);
        },
        logOut: (state) => {
            // state.data = null;
            state.isLogged = false;
            removeUserData();
        },
    },
});

export default userSlice.reducer;

export const { logIn, logOut } = userSlice.actions;
