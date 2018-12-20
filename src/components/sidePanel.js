import React from 'react';
import './sidePanel.css';
import Bom from "./bom";
import Tasks from "./tasks"


export default function SidePanel(props) {
    return(
        <div>
            <section className="bomSection">
                <Bom />
            </section>
            <section className="keySection">
                <Tasks />
            </section>
            <button className="btn">Save Project</button>
        </div>
    )
}
