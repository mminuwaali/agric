import "./style.sass";
import React from 'react';
import { Link } from 'react-router-dom';

export default function ({ id, image, title, author, content, summary }) {
    return <div className="blog-card">
        <Link to={`/blog/${id}`}>
            <img src={image} alt="" loading="lazy" />
        </Link>
        <Link to={`/blog/${id}`}>{title}</Link>
        <i>{author}</i>
        <p>{summary ?? 'summary not provided'}</p>
        <div className="info"></div>
    </div>;
};
