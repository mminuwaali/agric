import { api } from '../../utils';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import promo1 from '../../assets/images/carousel/pexels-pixabay-206359.jpg';
import promo2 from '../../assets/images/carousel/pexels-pixabay-268533.jpg';
import promo3 from '../../assets/images/carousel/pexels-pixabay-326055.jpg';

// async api calls
export const all = createAsyncThunk('promo.slice/all', async data => await api.get('carousel'));

const data = [
    { image: promo1, content: "Free shipping on all orders over $50" },
    { image: promo2, content: "Get 10% off on your first purchase with code WELCOME10" },
    { image: promo3, content: "Buy one, get one free on all items in the summer collection" },
];

const promo = createSlice({
    name: 'promo', // a unique name for identifying the reducer in the root reducer
    reducers: ({}),
    initialState: ({ error: null, loading: false, data:[] }), // reducer's initial states
    extraReducers: ({ addCase }) => { // used for updating the states when fetching an api data and error handling
        addCase(all.pending, state => { state.load = true; });
        addCase(all.fulfilled, (state, { payload }) => { state.error = null; state.load = false; state.data = payload; console.log(payload); });
    },
});

export default promo.reducer;
