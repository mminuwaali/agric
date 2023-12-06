import React from 'react';
import { $shop } from '../../components/forms';
import $product from '../../components/product';
import { $productCateogries } from '../../components/cards';

export default function () {
    return <>
        <$shop>
            <$productCateogries />
        </$shop>
        <$product />
    </>;
};
