/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../constants/apiConstants";

export const userProfileAPi = createApi({
  // reducerPath: "problems",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getUserInformation: builder.query({
      query: () => `/user/v1/profile/28`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetUserInformationQuery } = userProfileAPi;
