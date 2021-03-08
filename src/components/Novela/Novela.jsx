import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Novela.scss';
import NovelaStage from './NovelaStage';
import axios from 'axios';

const Novela = () => {

    const { id } = useParams();

    const [novelaId, setNovelaId] = useState(id);
    const [novela, setNovela] = useState({});
    const [conversacion, setConversacion] = useState({});

    useEffect(() => {
        consultarConversacion();
    }, []);

    const consultarConversacion = async () => {
        try {
            const resultado = await axios.get(`https://safe-brook-38787.herokuapp.com/api/novelas/${novelaId}`);
            const data = await resultado.data;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main className="main">
            <div className="novel-title">
                La wea
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

export default Novela;