import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Contact"], // Cache için tag belirle
  endpoints: (builder) => ({
    contactForm: builder.mutation({
      query: (contactData) => ({
        url: "contact",
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ["Contact"], // Yeni form eklenince cache temizlenecek
    }),
    getContactForm: builder.query({
      query: () => "contact",
      providesTags: ["Contact"], // Cache'in güncellenmesi için tag ekle
    }),
  }),
});

export const { useContactFormMutation, useGetContactFormQuery } = contactApi;
