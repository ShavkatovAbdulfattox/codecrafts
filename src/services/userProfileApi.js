/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../constants/apiConstants";

export const userProfileAPi = createApi({
  reducerPath: "userProfileApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getUserInformation: builder.query({
      query: (id) => `/user/v1/profile/${id}`,
      transformResponse: (response) => response.data,
    }),
    getUsertContribution: builder.query({
      query: (id) => `source/calendar/action/${id}`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetUserInformationQuery, useGetUsertContributionQuery } =
  userProfileAPi;
