import React from 'react';
import './landing.css';


export default class landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    goToLogin(event) {
        event.preventDefault();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <div className="mainContain">
                    <div className="title">
                        <h1>Scale AoN</h1>
                    </div>
                    <div className="description">
                        <h3>Scale AoN is a project management tool designed to help provisioning teams plan, execute, and efficiently control activites required for product building and order fulfillment.</h3>
                    </div>
                    <button className="enter" onClick={e => this.goToLogin(e)}>Enter</button>
                </div>
            </div>
        );
    }

}
