/** @format */

import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user/userSlice";
import { userApi } from "../services/userApi";

export const store = configureStore({
    reducer: {
        user,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});
