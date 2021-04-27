import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.scss';
import Novela from './components/Novela/Novela';
import Novelas from './components/Novelas/Novelas';
import Error404 from './components/Error404';
import AuthState from './context/authentication/authState';
import NuevoUsuario from './components/Login/NuevoUsuario';
import tokenAuth from './config/token';
import IniciarSesion from './components/Login/IniciarSesion';
import Footer from './components/Footer';

function App() {

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            tokenAuth(token);
        }
        console.log("Token cargado");
    }, []);

    return (
        <AuthState>
            <Router>
                <Header />
                <Switch>
                    <Route path="/novelas/:id">
                        <Novela />
                    </Route>
                    <Route path="/novelas">
                        <Novelas />
                    </Route>
                    <Route path="/register">
                        <NuevoUsuario />
                    </Route>
                    <Route path="/login">
                        <IniciarSesion />
                    </Route>
                    <Route>
                        <Error404 />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </AuthState>
    );
}

export default App;
