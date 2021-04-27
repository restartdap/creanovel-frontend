import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosClient from '../../config/axios';
import NovelaStage from './NovelaStage';
import AuthContext from '../../context/authentication/authContext';
import NovelaContext from '../../context/novela/novelaContext';
import './Novela.scss';

const Novela = () => {

    const initialState = {
        descripcion: null,
        estado: null,
        escenas: null,
        _id: null,
        titulo: null
    };

    const { id } = useParams();
    const [novela, setNovela] = useState(initialState);

    const authContext = useContext(AuthContext);
    const { autenticado } = authContext;
    const history = useHistory();

    useEffect(() => {
        if (!autenticado) {
            history.push("/login");
        }
    }, [autenticado, history]);

    useEffect(() => {
        obtenerNovela(id);
    }, [id]);

    const obtenerNovela = async (id) => {
        try {
            const result = await axiosClient.get(`/api/novelas/${id}`);
            const { novela } = result.data;
            setNovela({
                ...novela
            });
            console.log("Novela:", novela);
        } catch (error) {
            console.log("Error al cargar la novela");
            console.error(error);
        }
    }

    return (
        <NovelaContext>
            <main className="main">
                <div className="novel-title">{novela.titulo}</div>
                <NovelaStage novelaId={id} />
                <div className="novel-info">
                    <h3>Descripción</h3>
                    {novela.descripcion}
                </div>
            </main>
        </NovelaContext>
    );
};

export default Novela;