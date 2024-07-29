import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../../routes/api";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  reducerPath: "pathName",
  endpoints: () => ({}),
});

export const ApiMananger = baseApi.enhanceEndpoints({
  addTagTypes: [],
});
