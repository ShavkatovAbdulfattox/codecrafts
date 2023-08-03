/** @format */

import {baseURL} from "../constants/apiConstants";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "userReducer",
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    // tagTypes: ['Auth'],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: `/auth/register`,
                method: "POST",
                body: data,
            }),
            // invalidatesTags: (_) => ["Auth"],
            // transformResponse: (response) => response.data,
        }),
    }),
});

export const {useRegisterMutation} = authApi;
