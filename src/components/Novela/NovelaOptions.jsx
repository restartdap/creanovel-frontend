import React from 'react';
import './NovelaOptions.scss';

const NovelaOptions = () => {
    return (
        <div className="novel-options">
            <button className="novel-options-button order-first">Anterior</button>
            <button className="novel-options-button order-second">Opciones</button>
            <button className="novel-options-button order-third">Siguiente</button>
        </div>
    );
};

export default NovelaOptions;