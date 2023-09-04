/** @format */

import {configureStore} from "@reduxjs/toolkit";
import user from "./features/user/userSlice";
import {problemsApi} from "../services/questionApi";
import {authApi} from "../services/authApi.js";
import leftSide from "./features/rightSide/leftSideSlice";
import {leaderboardApi} from "../services/leaderboardApi";
import {userProfileAPi} from "../services/userProfileApi";
import {commentsApi} from "../services/commentsApi.js";
import mainFeaturesSlice from "./features/mainFeaturesSlice.js";

export const store = configureStore({
    reducer: {
        user,
        leftSide,
        mainFeatures: mainFeaturesSlice,
        [problemsApi.reducerPath]: problemsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [leaderboardApi.reducerPath]: leaderboardApi.reducer,
        [userProfileAPi.reducerPath]: userProfileAPi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            problemsApi.middleware,
            authApi.middleware,
            leaderboardApi.middleware,
            userProfileAPi.middleware,
            commentsApi.middleware
        ),
});
