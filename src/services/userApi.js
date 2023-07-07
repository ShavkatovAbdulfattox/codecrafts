/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../constants/apiConstants";

export const userApi = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `/topic/list/${1}`,
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useGetUsersQuery } = userApi;
