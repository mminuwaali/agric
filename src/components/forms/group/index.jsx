import './style.sass';
import React from 'react';

export default function ({ label, name, ...rest }) {
    return <div className="form-group">
        <label htmlFor={name}>{label || name}</label>
        <input {...rest} name={name} />
    </div>;
};
