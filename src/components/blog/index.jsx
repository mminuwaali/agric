import './style.sass';
import React from 'react';
import { $blog } from '../cards';
import { useAction, useStore } from '../../store';

export default function () {
    const { blog } = useStore();
    const { blogPosts } = useAction();
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        if (!Array.isArray(blog.data[page])) blogPosts(page);
    }, [page]);

    const data = React.useMemo(() => blog.data[page] || [], [page, blog.data]);

    return <section id="blog">
        <div className="content">
            {data.map((item, id) => <$blog key={id} {...item} />)}
        </div>
        <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage(prev => --prev)}>prev</button>
            <div className="count">{page}/{Math.floor(blog.count)}</div>
            <button disabled={page === Math.floor(blog.count)} onClick={() => setPage(prev => ++prev)}>next</button>
        </div>
    </section>;
}