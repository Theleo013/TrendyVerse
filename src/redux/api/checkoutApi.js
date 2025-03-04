import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/redux/api/axiosBase";

export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://dbjson-server.vercel.app/" }),
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

export const { usePerformCheckoutMutation } = checkoutApi;
