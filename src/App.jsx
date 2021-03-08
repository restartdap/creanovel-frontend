import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import './App.scss';
import Novela from './components/Novela/Novela';
import Novelas from './components/Novelas/Novelas';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/novelas/:id">
                    <Novela />
                </Route>
                <Route path="/novelas">
                    <Novelas />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
