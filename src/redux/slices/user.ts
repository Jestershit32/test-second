import { createSlice } from "@reduxjs/toolkit";

interface IInitial {
	id: string;
	email: string;
	name: string;
	surname: string;
	phone: string;
	refreshToken: string;
}

const initialState: IInitial = {
	id: "",
	email: "",
	name: "",
	surname: "",
	phone: "",
	refreshToken: "",
};
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login(state, action) {
			state.refreshToken = action.payload.refreshToken;
		},
	},
});
export const { login } = userSlice.actions;
export const userReducer = userSlice.reducer;
