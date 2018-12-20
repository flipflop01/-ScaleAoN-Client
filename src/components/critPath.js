import React from 'react';
import './critPath.css';

export default class CritPath extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: []
        };
    }

    render() {

        return(
            <div>
                    <h4>Critical Path</h4>
                    <button className="btn addCritTask">Add Task</button>
            </div>
        )
    }
}
