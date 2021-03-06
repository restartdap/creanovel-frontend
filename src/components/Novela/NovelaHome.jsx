import React, { Fragment, useEffect, useState } from 'react';
import './NovelaHome.scss';
import NovelaStage from './NovelaStage';

const NovelaHome = ({ title = "Undefined" }) => {

    const [novela, setNovela] = useState({});
    const [conversacion, setConversacion] = useState({});

    useEffect(() => {
        const consultarConversacion = async () => {
            try {
                const resultado = await fetch("urldemiapi.com/api/conversacion/123");
            } catch (error) {
                console.error(error);
            }
        }
    }, [conversacion]);

    if (title === "Undefined") {
        return;
    }

    return (
        <main className="main">
            <div className="novel-title">
                {title}
            </div>
            <div className="novel-container">
                <NovelaStage />
                <div className="novel-conversation">
                    <p className="novel-conversation-line">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, commodi quae! Alias est ducimus veritatis voluptas soluta! Debitis, in. Aspernatur odio eligendi voluptates et error illum perspiciatis porro quidem ullam.
                    </p>
                </div>
                <div className="novel-options">
                    <button className="novel-options-button">Siguiente</button>
                    <button className="novel-options-button">Anterior</button>
                </div>
            </div>
        </main>
    );
};

export default NovelaHome;