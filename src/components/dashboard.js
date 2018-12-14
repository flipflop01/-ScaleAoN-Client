import React from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Project from './project';
import AddForm from './addform';

import {addProject} from '../actions/actions';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    setText(text) {
        this.setState({
            text
        });
    }

    addProject(text) {
        let title = this.state.text;
        this.props.dispatch(addProject(title));
    }


    render() {

        const projects = this.props.projects.map((project, index) => (
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
                        <form className="npForm" onSubmit={e => this.addProject(e)}>
                            <input
                                type="text"
                                value={(this.state.text)}
                                onChange={e => this.setText(e.target.value)}
                                />
                            <button className="btn projButton">Create New Project</button>
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

Dashboard.defaultProps = {
    title: 'Dashboard'
};

const mapStateToProps = state => ({
    projects: state.projects
});

export default connect(mapStateToProps)(Dashboard);
