import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl:
		"http://test-task-second-chance-env.eba-ymma3p3b.us-east-1.elasticbeanstalk.com/",
	prepareHeaders: (headers) => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			headers.set("authorization", accessToken);
		}
		return headers;
	},
});

export const purrApi = createApi({
	reducerPath: "purrApi",
	baseQuery,
	endpoints: (build) => ({
		login: build.mutation({
			query: (body) => ({
				url: "auth/login",
				method: "POST",
				body,
			}),
		}),
		updateProfile: build.mutation({
			query: (body) => ({
				url: "users",
				method: "PATCH",
				body,
			}),
		}),
		registration: build.mutation({
			query: (body) => ({
				url: "auth/register",
				method: "POST",
				body,
			}),
		}),
	}),
});
export const {
	useLoginMutation,
	useRegistrationMutation,
	useUpdateProfileMutation,
} = purrApi;
