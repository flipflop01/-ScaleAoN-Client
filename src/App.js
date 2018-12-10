import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import landing from './components/landing';
import loginPage from './components/loginPage';
import projectPage from './components/projectPage';
import dashboard from './components/dashboard';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <main>
                        <Route exact path="/" component={landing} />
                        <Route exact path="/login" component={loginPage} />
                        <Route exact path="/dash" component={dashboard} />
                        <Route exact path="/project/:projectId" component={projectPage} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
