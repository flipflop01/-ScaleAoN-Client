import React from 'react';

import './project.css';

export default function Project(props) {
    return (
        <div className="project">
            <li key={this.props.title}>
                <button>{this.props.title}</button>
            </li>
        </div>
    );
}

Project.defaultProps = {
    text: ''
};
