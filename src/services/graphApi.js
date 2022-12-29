// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const graphDataApi = createApi({
  reducerPath: "graphApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.TWELVE_DATA_BASE_URL }),
  endpoints: (builder) => ({
    getGraph: builder.query({
      query: (time) =>
        `time_series?symbol=AAPL&interval=${time}&apikey=fd1418192dae47dc864e348d608dd2e4`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGraphQuery } = graphDataApi;
