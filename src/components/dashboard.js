import React from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';

export default function dashboard(props) {
    return(
        <div>
            <header>
                <h1><Link to="/">ScaleAon</Link></h1>
            </header>
            <div className="dashBox">
                <h2>Welcome Marck Manga</h2>
                <button className="projButton">Create New Project</button>
                <div>
                    <h3>Projects</h3>
                    <ul>
                        <li><button className="projButton">FJ1000BZL</button></li>
                        <li><button className="projButton">HELKON110</button></li>
                        <li><button className="projButton">EZ7003W</button></li>
                        <li><button className="projButton">EZ460EQ</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
