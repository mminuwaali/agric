import { useAction, useStore } from '../../../store';
import './style.sass';
import React from 'react';

export default function () {
    const { blog } = useStore();
    const { blogCategories } = useAction();

    React.useEffect(() => {
        if (blog.categories.length === 0) blogCategories();
    }, []);

    return <div className="blog-category">
        {blog.categories.map(item => <span key={item.id}>{item.name}</span>)}
    </div>
}