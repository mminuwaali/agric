import React from "react";
import * as layouts from '../layouts';

// pages
const pages = ({
    index: React.lazy(() => import('../pages')),
    404: React.lazy(() => import('../pages/404')),
    blog: React.lazy(() => import('../pages/blog')),
    shop: React.lazy(() => import('../pages/shop')),
    about: React.lazy(() => import('../pages/about')),
    contact: React.lazy(() => import('../pages/contact')),
    signin: React.lazy(() => import('../pages/auth/signin')),
    signup: React.lazy(() => import('../pages/auth/signup')),
    detailBlog: React.lazy(() => import('../pages/blog/detail')),
    detailShop: React.lazy(() => import('../pages/shop/detail')),
});

const routes = [
    { path: '*', name: '404', element: pages[404] },
    { path: '/', name: 'index', element: pages.index },
    { path: '/shop', name: 'shop', element: layouts.main(pages.shop) },
    { path: '/blog', name: 'blog', element: layouts.main(pages.blog) },
    { path: '/about', name: 'about', element: layouts.main(pages.about) },
    { path: '/signin', name: 'signin', element: layouts.auth(pages.signin) },
    { path: '/signup', name: 'signup', element: layouts.auth(pages.signup) },
    { path: '/contact', name: 'contact', element: layouts.main(pages.contact) },
    { path: '/blog/:id', name: 'blog-detail', element: layouts.main(pages.detailBlog) },
    { path: '/shop/:id', name: 'shop-detail', element: layouts.main(pages.detailShop) },
];

export default routes;
export const url = name => routes.find(item => item.name.includes(name))?.path || name;
