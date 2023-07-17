/** @format */

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: JSON.parse(localStorage.getItem("userData")) || null,
    isLogged: localStorage.getItem("isLogged") === "true",
  },
  reducers: {
    logIn: (state, { payload }) => {
      state.data = payload;
      state.isLogged = true;

      localStorage.setItem("isLogged", "true");
      localStorage.setItem("userData", JSON.stringify(payload)); // Store user data in local storage
    },
    logOut: (state) => {
      state.data = null;
      state.isLogged = false;
      localStorage.removeItem("isLogged"); // Remove isLogged from local storage
      localStorage.removeItem("userData"); // Remove userData from local storage
    },
  },
});

export default userSlice.reducer;

export const { logIn, logOut } = userSlice.actions;
