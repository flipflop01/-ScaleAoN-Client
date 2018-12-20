import React from 'react';
import './tasks.css';
import TaskItems from './TaskItems';


export default class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };

        this.addTask = this.addTask.bind(this);
    }

    addTask(event) {
        if (this._inputElement.value !== "") {
            let newTask ={
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    tasks: prevState.tasks.concat(newTask)
                };
            });
        }
        this._inputElement.value = '';
        console.log(this.state.tasks);
        event.preventDefault();
    }


    render() {


        return(
            <div>
                <h3>Task List</h3>
                <div className="formHeader">
                    <form onSubmit={this.addTask}>
                        <input
                            ref={(a) => this._inputElement = a}
                            placeholder="Enter Task" className="taskInput"></input>
                        <button type="submit" className='btn'>Add Task</button>
                    </form>
                </div>
                <TaskItems entries={this.state.tasks} />
            </div>
        )
    }

}
