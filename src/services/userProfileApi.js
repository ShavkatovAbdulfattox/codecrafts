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
      query: (id) => `/source/calendar/action/${id}`,
      transformResponse: (response) => response.data,
    }),
    editUserNameAndEmail: builder.mutation({
      query: ({ body }) => ({
        url: `/user/v1/update/${26}`,
        method: "PUT",
        body,
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetUserInformationQuery,
  useGetUsertContributionQuery,
  useEditUserNameAndEmailMutation,
} = userProfileAPi;
// async function updateUserPhoto(e, userId) {
//   e.preventDefault();
//   // Get the selected file from the file inpu

//   if (!selectedFile) {
//     console.error("No file selected!");
//     toast.error("Iltimos rasm tanlang", {
//       position: "top-right",
//       autoClose: 3965,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//     return;
//   }

//   // Create a FormData object to send the file as part of the request
//   const formData = new FormData();
//   formData.append("photo", selectedFile);
//   console.log(formData);

//   try {
//     const response = await fetch(
//       `https://edubinplatform-a01d5146e549.herokuapp.com/user/v1/update/${userId}`,
//       {
//         method: "PUT",
//         body: formData,
//       }
//     );

//     if (!(response.status >= 200) & (response.status <= 300)) {
//       throw new Error("Network response was not ok");
//     } else {
//       toast.success("Sizning suratingiz  yuklandi ", {
//         position: "top-right",
//         autoClose: 3965,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }

//     const data = await response.json();
//     console.log("Photo update successful:", data);
//   } catch (error) {
//     toast.error("Xato iltimos qaytadan yuklang", { theme: "dark" });
//     console.error("Error updating photo:", error);
//   }
// }
