import './style.sass';
import React from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function ({ id, image,content }) {
    const text = (txt = "") => Array.from(txt).map((char, id) => (
        <span key={id} style={{ '--char-index': id }}>{char}</span>
    ));

    return <swiper-slide>
        <div className={`carousel-card`}>
            <img src={image} alt="" />
            <div className="details">
                <h2>
                    {text(content)}
                </h2>
            </div>
        </div>
    </swiper-slide>;
}