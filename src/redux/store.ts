import { configureStore } from "@reduxjs/toolkit";
import { purrApi } from "./purrApi";
import { registrationReducer } from "./slices/registration";
import { userReducer } from "./slices/user";

export const store = configureStore({
	reducer: {
		[purrApi.reducerPath]: purrApi.reducer,
		registration: registrationReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddlware) =>
		getDefaultMiddlware().concat(purrApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
