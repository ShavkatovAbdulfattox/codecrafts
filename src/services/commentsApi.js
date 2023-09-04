/** @format */

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {baseURL} from "../constants/apiConstants";

export const commentsApi = createApi({
    reducerPath: "comments",
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: (builder) => ({
        // Commentlarni olish
        getComments: builder.query({
            query: (params) => `/comment/list/question/${params.questionId}/1`,
            transformResponse: (response) => response.data,
        }),

        // Comment ni POST qilish
        postComent: builder.mutation({
            query: (comment) => {
                return {
                    url: `/comment/create`,
                    method: "POST",
                    body: comment,
                };
            },
            // transformResponse: (response) => response.data,
        }),
    }),
});

export const {
    useGetCommentsQuery,
    usePostComentMutation,
} = commentsApi;
