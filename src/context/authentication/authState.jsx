import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axiosClient from '../../config/axios'
import tokenAuth from '../../config/token'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        name: null,
        email: null,
        username: null,
        lecturas: null,
        message: null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Functions
    const registerUsuario = async datos => {
        try {
            const result = await axiosClient.post("/api/usuarios", datos);
            const data = result.data;
            console.log(data);
            dispatch({
                type: "REGISTRO_SUCCESS",
                payload: {
                    token: data.token
                }
            });
            authenticateUsuario();
        } catch (error) {
            console.log(error.response.data);
            dispatch({
                type: "REGISTRO_ERROR",
                payload: error
            });
        }
    };

    const authenticateUsuario = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            tokenAuth(token);
        }
        try {
            const result = await axiosClient.get("/api/auth");
            const { usuario } = result.data;
            dispatch({
                type: "GET_USUARIO",
                payload: usuario
            });
        } catch (error) {
            console.log(error.response.data);
        }
    };

    const logIn = async (datos) => {
        try {
            const result = await axiosClient.post("/api/auth", datos);
            const data = result.data
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: {
                    token: data.token
                }
            });
            authenticateUsuario();
        } catch (error) {
            console.log(error.response.data);
            dispatch({
                type: "LOGIN_ERROR",
                payload: error
            });
        }
    };

    return (
        <AuthContext.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            name: state.name,
            email: state.email,
            username: state.username,
            lecturas: state.lecturas,
            message: state.message,
            registerUsuario,
            logIn,
            authenticateUsuario
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;