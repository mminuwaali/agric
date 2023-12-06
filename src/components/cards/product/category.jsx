import './style.sass';
import React from 'react';
import { useAction, useStore } from '../../../store';

export default function () {
    const { product } = useStore();
    const { productCategories } = useAction();

    React.useEffect(() => {
        if (product.categories.length === 0) productCategories();
    }, []);

    return <div className="blog-category">
        {product.categories.map(item => <span key={item.id}>{item.name}</span>)}
    </div>
}