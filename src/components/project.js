import React from 'react';

import './project.css';

export default function Project(props) {
    return (
        <div className="project">
            <button>{props.title}</button>
        </div>
    );
}


