import React from 'react';
import './landing.css';


export default function landing(props) {
    return (
        <div>
            <img src="https://i.imgur.com/ct3cFze.png" alt="puiLogo" />
            <div className="mainContain">
                <div className="title">
                    <h1>Scale AoN</h1>
                </div>
                    <div className="description">
                    <h3>Scale AoN is a project management tool designed to help provisioning teams plan, execute, and efficiently control activites required for product building and order fulfillment.</h3>
                </div>
                <button>Enter</button>
            </div>
        </div>
    );
}
