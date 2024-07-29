import { ApiMananger } from "./apiMananger";

const ExempleApi = ApiMananger.injectEndpoints({
  endpoints: (build) => ({
    getExemple: build.query({
      query: () => "Path",
      providesTags: ["Exemple"],
    }),

    addExemple: build.mutation({
      query({ body, token }) {
        return {
          url: "Path",
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
      invalidatesTags: ["Exemple"],
    }),
    updateExemple: build.mutation({
      query({ data, token }) {
        const { id, ...body } = data;
        return {
          url: "path",
          method: "PUT",
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
      invalidatesTags: ["Exemple"],
    }),
  }),
});

export const {} = ExempleApi;
