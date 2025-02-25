import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/redux/api/axiosBase";

export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    performCheckout: builder.mutation({
      query: (orderData) => ({
        url: "/checkout",
        method: "POST",
        data: orderData,
      }),
    }),
  }),
});

// usePerformCheckoutMutation hook'u buradan geliyor
export const { usePerformCheckoutMutation } = checkoutApi;
