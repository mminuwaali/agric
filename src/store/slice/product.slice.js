import { api } from "../../utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productPost = createAsyncThunk('product.slice/productPost', async (id) => api.get(`product/${id}/`));
export const categories = createAsyncThunk('product.slice/categories', async data => api.get('product-category/', data));
export const productPosts = createAsyncThunk('product.slice/productPosts', async (page = 1) => api.get(`product/?page=${page}`).then(res => ({ ...res, page })));

const product = createSlice({
    name: 'product',
    reducers: {
        get: (state, { payload }) => {
            state.item = [].concat(...Object.values(state.data)).find(ele => ele.id == payload);
            console.log(state.item);
        },
    },
    initialState: { error: null, count: 0, item: null, loading: false, data: {}, categories: [] },
    extraReducers: (builder) => {
        builder // categories
            .addCase(categories.fulfilled, (state, { payload }) => { state.categories = payload; console.log('product cat', payload); });

        builder // productPost
            .addCase(productPost.pending, state => { state.error = null; state.loading = true; })
            .addCase(productPost.rejected, (state, { error }) => { state.error = error.message; state.loading = false; })
            .addCase(productPost.fulfilled, (state, { payload }) => { state.error = null; state.loading = false; state.item = payload; });

        builder // productPosts
            .addCase(productPosts.pending, state => { state.error = null; state.loading = true; })
            .addCase(productPosts.rejected, (state, { error }) => { state.error = error.message; state.loading = false; })
            .addCase(productPosts.fulfilled, (state, { payload }) => { state.error = null; state.loading = false; state.data[payload.page] = payload.results; state.count = payload.count; });
    }
});

export default product.reducer;
export const { get } = product.actions;
