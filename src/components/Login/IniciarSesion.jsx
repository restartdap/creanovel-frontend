import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';
import './IniciarSesion.scss';

const IniciarSesion = () => {

    const history = useHistory();

    const authContext = useContext(AuthContext);
    const { logIn, autenticado } = authContext;

    useEffect(() => {
        if (autenticado) {
            history.push("/novelas");
        }
    }, [autenticado, history]);

    const [usuario, setUsuario] = useState({
        username: '',
        password: ''
    });
    const { username, password } = usuario;

    const changeUsuario = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    };

    const submitUsuario = e => {
        e.preventDefault();
        // validacion

        // error

        // Enviar datos
        logIn({
            username,
            password
        });
    };

    return (
        <form onSubmit={(e) => submitUsuario(e)}>
            <input
                type="text"
                className="input-nuevo-usuario"
                name="username"
                placeholder="usuario...."
                value={username}
                onChange={(e) => changeUsuario(e)}
            />
            <input
                type="password"
                className="input-nuevo-usuario"
                name="password"
                placeholder="contraseña..."
                value={password}
                onChange={(e) => changeUsuario(e)}
            />
            <input
                type="submit"
                value="Enviar"
            />
            <Link className="lawea" to="/register">Registrarse</Link>
        </form>
    );
};

export default IniciarSesion;