import React from 'react';
import './TaskItems.css';

export default class TaskItems extends React.Component {
    createTasks(task) {
        return <li key={task.key}>{task.text}</li>
    }

    render() {
        let taskEntries = this.props.entries;
        let listTasks = taskEntries.map(this.createTasks);

        return (
            <ol className="theTaskList" type="A">
                {listTasks}
            </ol>
        );
    }
}
