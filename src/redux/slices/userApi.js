import { ApiMananger } from "./apiMananger";

const userApi = ApiMananger.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation({
      query({ body, token }) {
        return {
          url: "lohinPath",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": token,
            Referer: "https://genimi-admin.bakeli.tech/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body,
        };
      },
      invalidatesTags: ["Users"],
    }),
    registerUser: build.mutation({
      query({ body, token }) {
        return {
          url: "RegisterPath",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": token,
            Referer: "https://genimi-admin.bakeli.tech/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body,
        };
      },
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = userApi;
