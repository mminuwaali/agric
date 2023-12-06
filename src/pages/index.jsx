import React from 'react';
import $header from '../components/header';
import $footer from '../components/footer';
import $product from '../components/product';
import $summary from '../components/summary';
import $carousel from '../components/carousel';

export default function () {
    return <>
        <$header opague />
        <$carousel />
        <$summary />
        <$product noPagination />
        <$footer />
    </>;
};
