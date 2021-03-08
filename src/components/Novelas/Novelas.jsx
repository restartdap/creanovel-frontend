import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Novelas.scss';

const Novelas = () => {

    const [novelas, setNovelas] = useState([]);

    useEffect(() => {
        getNovels();
    }, []);

    const getNovels = async () => {
        try {
            const resultado = await axios.get("https://safe-brook-38787.herokuapp.com/api/novelas");
            const data = await resultado.data;
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