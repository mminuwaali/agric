import './style.sass';
import React from 'react';

const CustomSection = ({ title, data, CustomComponent, paginate }) => {
    // Logic for rendering the data and handling pagination
    return (
        <div>
            <h2>{title}</h2>
            {CustomComponent ? (
                <CustomComponent data={data} />
            ) : (
                data.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                ))
            )}
            {paginate && (
                <div>
                    <button onClick={prev}>Previous</button>
                    <button onClick={next}>Next</button>
                </div>
            )}
        </div>
    );
};

export default CustomSection;
