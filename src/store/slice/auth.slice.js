import { api } from "../../utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk('auth.slice/login', async data => api.post('login/', data));
export const register = createAsyncThunk('auth.slice/register', async data => api.post('register/', data));

const auth = createSlice({
    name: 'auth',
    initialState: { error: null, loading: false, user: null },
});

export default auth.reducer;
