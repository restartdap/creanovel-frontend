import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NovelaHome from './components/Novela/NovelaHome';
import './App.scss';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/">
                    <NovelaHome title="We Can Do It Kokichi!" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
