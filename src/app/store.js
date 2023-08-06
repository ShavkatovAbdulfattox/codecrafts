/** @format */

import {configureStore} from "@reduxjs/toolkit";
import user from "./features/user/userSlice";
import {problemsApi} from "../services/questionApi";
import {authApi} from "../services/authApi.js";

export const store = configureStore({
    reducer: {
        user,
        [problemsApi.reducerPath]: problemsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([problemsApi.middleware, authApi.middleware]),
});
