import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({ baseUrl: "https://db-json-f558.onrender.com/" }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    contactForm: builder.mutation({
      query: (contactData) => ({
        url: "contact",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ["Contact"],
    }),
    getContactForm: builder.query({
      query: () => "contact",
      providesTags: ["Contact"],
    }),
  }),
});

export const { useContactFormMutation, useGetContactFormQuery } = contactApi;
