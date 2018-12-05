import React from 'react';
import './projectPage.css';

import sidePanel from "./sidePanel";
import critPath from "./critPath";
import nonCritPath from "./nonCritPath";
import completionTime from "./completionTime";


export default class projectPage extends React.Component {

    render() {

        return(
            <div>
                <div className="top">
                    <sidePanel />
                    <critPath />
                    <nonCritPath />
                    <completionTime />
                </div>
            </div>
        )
    }
}

