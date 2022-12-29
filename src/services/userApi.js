// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userData = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (builder) => ({
    signIn: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignInQuery } = userData;
