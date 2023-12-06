import './style.sass';
import React from 'react';
import Markdown from 'react-markdown';
import { useStore } from '../../store';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { blogPost, get } from '../../store/slice/blog.slice';

export default function () {
    const { id } = useParams();
    const { blog } = useStore();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(get(id));
    }, [id]);

    React.useEffect(() => {
        if (blog.item === undefined) dispatch(blogPost(id));
    }, [blog.item]);

    return <section id="blog-detail">
        <img src={blog.item?.image} alt="" />
        <h1 className="title">{blog.item?.title}</h1>
        <Markdown>{blog.item?.content}</Markdown>
    </section>;
}