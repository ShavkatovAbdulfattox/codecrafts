/** @format */

import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user/userSlice";
import { problemsApi } from "../services/questionApi";
import { authApi } from "../services/authApi.js";
import leftSide from "./features/rightSide/leftSideSlice";

export const store = configureStore({
  reducer: {
    user,
    leftSide,
    [problemsApi.reducerPath]: problemsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([problemsApi.middleware, authApi.middleware]),
});
