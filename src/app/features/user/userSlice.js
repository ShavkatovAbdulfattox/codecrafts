/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
    },
    reducers: {
        logIn: (state, { payload }) => {
            state.user = { ...payload, isLogged: true };
        },
    },
});

export default userSlice.reducer;
export const { logIn } = userSlice.actions;
