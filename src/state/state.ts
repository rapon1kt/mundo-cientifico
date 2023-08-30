import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: null,
	persistent: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogin: (state, action) => {
			state.user = action.payload.user;
			state.persistent = action.payload.persistent;
			state.token = action.payload.token;
		},
		setLogout: (state) => {
			state.user = null;
			state.token = null;
			state.persistent = false;
		},
	},
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
