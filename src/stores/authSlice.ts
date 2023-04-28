import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface user {
    username: string;
    password?: string;
}
export interface auth {
    username: string;
    token: string;
    date: Date | '';
    isLogin: boolean
}
const initialState: auth = {
    username: '',
    token: '',
    date: '',
    isLogin: false
};

function generateToken(n: number): string {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for(var i = 0; i < n; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authLogin: (state, action: PayloadAction<user>) =>{
            state.isLogin = true;
            state.username = action.payload.username;
            state.token = generateToken(12);
            state.date = new Date();
        },
        authLogout:  (state) =>{

            state.isLogin = false;
            state.username = '';
            state.token =  '';
            state.date =  '';
        },

    }
});

export const { authLogin, authLogout } =    authSlice.actions;

export const selectUsername = (state: RootState) => state.auth.username;
export const selectToken = (state: RootState) => state.auth.token;
export const selectDate = (state: RootState) => state.auth.date;
export const selectIsLogin = (state: RootState) => state.auth.isLogin;

export default authSlice.reducer;
