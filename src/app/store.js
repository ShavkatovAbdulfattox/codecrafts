/** @format */

import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user/userSlice";
import { problemsApi } from "../services/questionApi";

export const store = configureStore({
    reducer: {
        user,
        [problemsApi.reducerPath]: problemsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(problemsApi.middleware),
});
