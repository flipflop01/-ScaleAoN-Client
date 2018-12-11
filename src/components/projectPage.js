import React from 'react';
import './projectPage.css';
import {Link} from 'react-router-dom';
import sidePanel from "./sidePanel";
import critPath from "./critPath";
import nonCritPath from "./nonCritPath";
import completionTime from "./completionTime";


export default function projectPage(props) {
    return(
        <div>
            <header>
                <h1><Link to="/">ScaleAon</Link></h1>
            </header>
            <div className="top">
                <sidePanel />
                <critPath />
                <nonCritPath />
                <completionTime />
            </div>
        </div>
    )
}

