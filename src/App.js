import React, { Component } from 'react';
import landing from './landing';
import LoginPage from './LoginPage';
import ProjectPage from './ProjectPage';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            <HeaderBar />
            <Route exact path="/" component={landing} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/project" component={ProjectPage} />
            </div>
        );
    }
}

export default App;
