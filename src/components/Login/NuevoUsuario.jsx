import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';
import './NuevoUsuario.scss';

const NuevoUsuario = () => {

    const history = useHistory();

    const authContext = useContext(AuthContext);
    const { registerUsuario, autenticado } = authContext;

    const [usuario, setUsuario] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        if (autenticado) {
            history.push("/novelas");
        }
    }, [autenticado, history]);


    const { name, username, email, password } = usuario;

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
        registerUsuario({
            name,
            username,
            email,
            password
        });
    };

    return (
        <form onSubmit={(e) => submitUsuario(e)}>
            <input
                type="text"
                className="input-nuevo-usuario"
                name="name"
                placeholder="nombre..."
                value={name}
                onChange={(e) => changeUsuario(e)}
            />
            <input
                type="text"
                className="input-nuevo-usuario"
                name="username"
                placeholder="usuario...."
                value={username}
                onChange={(e) => changeUsuario(e)}
            />
            <input
                type="email"
                className="input-nuevo-usuario"
                name="email"
                placeholder="correo..."
                value={email}
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
            <Link className="lawea" to="/login">Iniciar Sesion</Link>
        </form>
    );
};

export default NuevoUsuario;