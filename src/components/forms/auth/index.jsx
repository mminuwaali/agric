import './style.sass';
import React from 'react';
import $group from '../group';

export default function ({ title, button, inputs = [] }) {
    return <form id='auth'>
        <div className="title">
            <h2>{title ?? 'Authentication'}</h2>
        </div>
        <div className="group">
            {inputs.map(item => <$group {...item} key={item.name} />)}
        </div>
        <div className="buttons">
            <button type="submit">{button || 'button'}</button>
        </div>
    </form>;
} 
