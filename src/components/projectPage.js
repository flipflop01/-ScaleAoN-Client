import React from 'react';
import './projectPage.css';
import {Link} from 'react-router-dom';
import SidePanel from "./sidePanel";
import CritPath from "./critPath";
import NonCritPath from "./nonCritPath";
import CompletionTime from "./completionTime";


export default function projectPage(props) {
    return(
        <div>
            <header>
                <h1><Link to="/">ScaleAon</Link></h1>
            </header>

            <SidePanel />
            <CritPath />
            <NonCritPath />
            <CompletionTime />
        </div>
    )
}

