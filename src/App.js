import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import landing from './components/landing';
import loginPage from './components/loginPage';
import projectPage from './components/projectPage';
import Dashboard from './components/dashboard';
//import SidePanel from './components/sidePanel';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <main>
                        <Route exact path="/" component={landing} />
                        <Route exact path="/login" component={loginPage} />
                        <Route exact path="/dash" component={Dashboard} />
                        <Route exact path="/projectPage" component={projectPage} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
