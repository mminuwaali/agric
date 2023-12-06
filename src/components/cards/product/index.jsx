import './style.sass';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaOpencart } from 'react-icons/fa';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

export default function ({ id, name, image, price, category }) {
    return <div className="product-card">
        <div className="header">
            <h3>{name}</h3>
            <p>{category}</p>
        </div>
        <Link to={`/shop/${id}`} className="image">
            <img src={image} alt="" />
        </Link>
        <div className="footer">
            <span>{price}$</span>
            <div className="btn">
                <Link to='/'><FaOpencart /></Link>
                <Link to='/'><MdOutlineFavoriteBorder /></Link>
            </div>
        </div>
    </div>;
};
