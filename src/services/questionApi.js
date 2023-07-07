/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../constants/apiConstants";

export const problemsApi = createApi({
  //     reducerPath: "problems",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getTopics: builder.query({
      query: () => `/topic/list/${1}`,
      transformResponse: (response) => response.data,
    }),
    postAnswer: builder.mutation({
      query: (answer) => ({
        url: `/question/submit/${1}`,
        method: "POST",
        body: answer,
        prepareHeaders: (headers, { getState }) => {
          headers.set("Access-Control-Allow-Origin", "*");
          headers.set(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmJvc0BnbWFpbC5jb20iLCJpYXQiOjE2ODg3MTA1MDMsImV4cCI6MTY4ODc5NjkwM30.ddpgGAhkz8iXCXJ8VVPojEJirkzV4DXaIg6ZieEVY9U"
          );
          return headers;
        },
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetTopicsQuery, usePostAnswerMutation } = problemsApi;
