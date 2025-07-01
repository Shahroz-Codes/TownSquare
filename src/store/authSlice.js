import { createSlice } from "@reduxjs/toolkit";
import authService from "../appwrite/authService";

const initialState = {
    isAuthenticated: false,
    userData: null,
    loading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userData = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const checkAuthStatus = () => async (dispatch) => {
    dispatch(setLoading(true));

    try {
        const user = await authService.getCurrentUser();

        if (user) {
            dispatch(login(user));
        } else {
            dispatch(logout());
        }
    } catch (error) {
        dispatch(logout());
    } finally {
        dispatch(setLoading(false));
    }
};

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;
