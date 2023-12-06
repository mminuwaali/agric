import { useDispatch, useSelector } from 'react-redux';
import * as auth from './slice/auth.slice';
import * as blog from './slice/blog.slice';
import * as promo from './slice/promo.slice';
import * as product from './slice/product.slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        auth: auth.default,
        blog: blog.default,
        promo: promo.default,
        product: product.default,
    }
});

export default store;

/**
 * The `useAction` function returns an object with methods to dispatch actions for fetching all promos,
 * all blogs, and logging in.
 */
export const useAction = () => {
    const dispatch = useDispatch();
    
    return ({
        allPromo: () => dispatch(promo.all()),
        login: data => dispatch(auth.login(data)),
        register: data => dispatch(auth.register(data)),
        blogCategories: () => dispatch(blog.categories()),
        productCategories: () => dispatch(product.categories()),
        blogPosts: (page = 1) => dispatch(blog.blogPosts(page)),
        productPosts: (page = 1) => dispatch(product.productPosts(page)),
    })
};


/**
 * The useStore function returns the entire state object from the Redux store.
 * @returns The `useStore` function is returning the entire state object from the Redux store.
 */
export const useStore = () => {
    return useSelector(state => state);
};
