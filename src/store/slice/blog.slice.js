import { api } from "../../utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const blogPost = createAsyncThunk('blog.slice/blogPost', async (id) => api.get(`blog/${id}/`));
export const categories = createAsyncThunk('blog.slice/categories', async data => api.get('blog-category/', data));
export const blogPosts = createAsyncThunk('blog.slice/blogPosts', async (page = 1) => api.get(`blog/?page=${page}`).then(res => ({ ...res, page })));

const blog = createSlice({
    name: 'blog',
    reducers: {
        get: (state, { payload }) => {
            state.item = [].concat(...Object.values(state.data)).find(ele => ele.id == payload);
        },
    },
    initialState: { error: null, count: 0, item: null, loading: false, data: {}, categories: [] },
    extraReducers: (builder) => {
        builder // categories
            .addCase(categories.fulfilled, (state, { payload }) => { state.categories = payload; console.log('blog cat', payload) });

        builder // blogPost
            .addCase(blogPost.pending, state => { state.error = null; state.loading = true; })
            .addCase(blogPost.rejected, (state, { error }) => { state.error = error.message; state.loading = false; })
            .addCase(blogPost.fulfilled, (state, { payload }) => { state.error = null; state.loading = false; state.item = payload; });

        builder // blogPosts
            .addCase(blogPosts.pending, state => { state.error = null; state.loading = true; })
            .addCase(blogPosts.rejected, (state, { error }) => { state.error = error.message; state.loading = false; })
            .addCase(blogPosts.fulfilled, (state, { payload }) => { state.error = null; state.loading = false; state.data[payload.page] = payload.results; state.count = payload.count; });
    }
});

export default blog.reducer;
export const { get } = blog.actions;
