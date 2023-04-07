import { createSlice } from "@reduxjs/toolkit";

type registrationState = {
	window: 1 | 2;
	form: {
		email: string;
		password: string;
	};
};

const initialState: registrationState = {
	window: 1,
	form: {
		email: "",
		password: "",
	},
};
const registrationSlice = createSlice({
	name: "registration",
	initialState,
	reducers: {
		setWindow(state, action) {
			state.window = action.payload.window;
		},
		setForm(state, action) {
			state.form = action.payload;
		},
	},
});
export const { setWindow, setForm } = registrationSlice.actions;
export const registrationReducer = registrationSlice.reducer;
