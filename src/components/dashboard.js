import React from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';

import Project from './project';


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [{}]
        };

        this.handleChange = this.handleChange.bind(this);
        this.addProject = this.addProject.bind(this);

    }

    handleChange(event) {
        this.setState({projectName: event.target.value});
    }

    addProject(event) {
        event.preventDefault();
        console.log(this.state.projectName);
        this.setState({
            projects: [...this.state.projects, this.state.projectName]
        })
        console.log(this.state.projects);
    }

    goToProjectPage(event) {
        event.preventDefault();
        this.props.history.push('/projectPage');
    }


    render() {

        const projects = this.state.projects.map((project, index) => (
            <li className="proj-wrapper" key={index}>
                <Project index={index} {...project} />
            </li>
        ));

        return(
            <div>
                <header>
                    <h1><Link to="/">ScaleAon</Link></h1>
                </header>
                <div className="dashBox">
                    <h2>Welcome Marck Manga</h2>
                        <form className="npForm">
                            <input
                                type="text"
                                name='title'
                                value={this.state.projectName}
                                onChange={this.handleChange}
                                />
                        <button onClick={e => this.goToProjectPage(e)} className="btn projButton" type="submit">Create New Project</button>
                        </form>
                    <div>
                        <h3>Current Projects</h3>
                        <ul>
                            {projects}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

