import React from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';

import Project from './project';
import AddForm from './addform';


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [{
                title: 'HELKON',
                items: ['battery', 'case', 'wire']
            }, {
                title: 'EZ700',
                items: ['p156', 'FJ Case', 'p100 Batteries']
            }, {
                title: 'ALK120',
                items: ['battery', 'FJ Case', 'harness']
            }],
            projectName: ''
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
                        <form className="npForm" onSubmit={this.addProject}>
                            <input
                                type="text"
                                name='title'
                                value={this.state.projectName}
                                onChange={this.handleChange}
                                />
                            <button className="btn projButton" type="submit">Create New Project</button>
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

