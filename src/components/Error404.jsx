import React from 'react';
import './Error404.scss';

const Error404 = () => {
    return (
        <div className="error-container">
            <div className="error">
                <h1><span>Error 404</span>: No encontraste lo que buscabas :c</h1>
                <img src="https://i.pinimg.com/originals/cb/85/d5/cb85d5efbc8181122d65b0e8431142d0.png" alt="Waifu" />
            </div>
        </div>
    );
};

export default Error404;