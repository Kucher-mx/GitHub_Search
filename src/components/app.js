import React from 'react';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import About from '../pages/About';
import NavBar from './Navbar';
import Alert from './alert';
import {Switch, Route} from 'react-router-dom';
import { AlertState } from '../context/alert/alertState';
import { GitHubState } from '../context/gitHub/gitHubState';
const App = () => {
    return (
        <GitHubState>
            <AlertState>
                <NavBar/>
                <div className="container">
                    <Alert/>
                    <Switch>
                        {/* <Route path="/profile" component={Profiles} exact /> */}
                        <Route path="/profile/:name" component={Profile} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </AlertState>
        </GitHubState>
    )
}

export default App;