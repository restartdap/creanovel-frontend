// import React, { useState, useEffect } from 'react';
import './NovelaStage.scss';
import NovelaMessage from './NovelaMessage';
import NovelaDecisions from './NovelaDecisions';
import NovelaOptions from './NovelaOptions';
import NovelaConversation from './NovelaConversation';
// import axiosClient from '../../config/axios';

const NovelaStage = ({ novelaId }) => {

    // const [escena, setEscena] = useState({});
    // const [recurso, setRecurso] = useState({});

    // useEffect(() => {
    //     consultarInformacionNovela(novelaId);
    // }, [novelaId]);

    // const consultarInformacionNovela = async (id) => {
    //     try {
    //         const info = {
    //             recursoInfo: {
    //                 escena: "6047c0c82a84262d28f86472",
    //                 tipoRecursoActual: "conversacion",
    //             },
    //             recursoData: {
    //                 texto: "necesario en la peticion",
    //                 recursoPosterior: null,
    //                 tipoRecursoPosterior: null
    //             }
    //         };

    //         const resultado = await axiosClient.post(`/api/recursos`, info);
    //         const data = await resultado.data;
    //         console.log("recursos", data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <div className="novel-container">
            <div className="stage">
                <NovelaMessage />
                <div className="stage-character">
                    <img src="https://i.pinimg.com/originals/55/6b/bd/556bbd57bb1d10813cb74744a573db33.png" alt="Kokichi Sprite" />
                </div>
                <div className="stage-character-name">
                    <span>Kokichi Oma</span>
                </div>
                <NovelaDecisions />
            </div>
            <NovelaConversation />
            <NovelaOptions />
        </div>
    );
};

export default NovelaStage;