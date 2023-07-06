/** @format */

import { configureStore } from "@reduxjs/toolkit";
import user from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        user,
    },
});
