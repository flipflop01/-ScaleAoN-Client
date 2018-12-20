import React from 'react';
import './tasks.css';
//import AddForm from './addform';

export default class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: ['Import', 'Activate', 'Program']
        };

        this.addTask = this.addTask.bind(this);
    }

    addTask(event) {
        event.preventDefault();
        console.log('Adding Task');
    }


    render() {


        return(
            <div>
                <h3>Task List</h3>
                <div className="formHeader">
                    <form onSubmit={this.addTask}>
                        <input placeholder="Enter Task" className="taskInput"></input>
                        <button type="submit" className='btn'>Add Task</button>
                    </form>
                </div>
                <ul className="itemList">
                    {this.state.tasks.map(task => <li key={task}>{task}</li>)}
                </ul>
            </div>
        )
    }

}
