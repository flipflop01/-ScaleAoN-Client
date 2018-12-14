import React from 'react';
import './sidePanel.css';
import bom from "./bom";
import tasks from "./tasks"


export default function sidePanel(props) {
    return(
        <div>
            <bom />
            <tasks />
        </div>
    )
}
