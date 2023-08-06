/** @format */

import {createSlice} from "@reduxjs/toolkit";
import {getToken, removeToken, setToken} from "../../../utils/functions.js";

const userSlice = createSlice({
    name: "user",
    initialState: {
        // data: JSON.parse(localStorage.getItem("userData")) || null,
        isLogged: !!getToken(),
    },
    reducers: {
        logIn: (state, {payload}) => {
            // state.data = payload;
            state.isLogged = true;
            setToken(payload.token)
        },
        logOut: (state) => {
            // state.data = null;
            state.isLogged = false;
            removeToken()
        },
    },
});

export default userSlice.reducer;

export const {logIn, logOut} = userSlice.actions;
