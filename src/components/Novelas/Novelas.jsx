import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Novelas.scss';
import axiosClient from '../../config/axios';
import AuthContext from '../../context/authentication/authContext';

const Novelas = () => {

    const history = useHistory();
    const authContext = useContext(AuthContext);
    const { autenticado } = authContext;

    const [novelas, setNovelas] = useState([]);

    useEffect(() => {
        if (!autenticado) {
            history.push("/register");
        }
    }, [autenticado, history]);

    useEffect(() => {
        getNovels();
    }, []);

    const getNovels = async () => {
        try {
            const resultado = await axiosClient.get("/api/novelas");
            const data = await resultado.data;
            console.log("novelas", data);
            setNovelas(data.novelas);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="list-container">
            <ul className="list">
                {novelas.map((novela) => (
                    <li className="item" key={novela._id}><Link className="link" to={`/novelas/${novela._id}`}>{novela.titulo}</Link> </li>
                ))}
            </ul>
        </div>
    );
};

export default Novelas;