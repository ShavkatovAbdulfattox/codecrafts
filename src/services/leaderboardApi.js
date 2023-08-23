import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../constants/apiConstants";

export const leaderboardApi = createApi({
  reducerPath: "leaderboard",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getLeaders: builder.query({
      query: () => `/rankings`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetLeadersQuery } = leaderboardApi;
