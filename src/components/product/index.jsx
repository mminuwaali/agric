import './style.sass';
import React from 'react';
import { $product } from '../cards';
import { useAction, useStore } from '../../store';

export default function ({ noPagination }) {
    const { product } = useStore();
    const { productPosts } = useAction();
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        if (!Array.isArray(product.data[page])) productPosts(page);
    }, [page]);

    const data = React.useMemo(() => product.data[page] || [], [page, product.data]);

    return <section id="product">
        <div className="content">
            {data.map((item, id) => <$product key={id} {...item} />)}
        </div>
        <div className="pagination" style={{ display: noPagination ? 'none' : 'flex' }}>
            <button disabled={page === 1} onClick={() => setPage(prev => --prev)}>prev</button>
            <div className="count">{page}/{Math.floor(product.count)}</div>
            <button disabled={page === Math.floor(product.count)} onClick={() => setPage(prev => ++prev)}>next</button>
        </div>
    </section>;
}