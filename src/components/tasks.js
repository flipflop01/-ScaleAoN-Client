import React from 'react';
import './tasks.css';

export default function tasks(props) {
    return(
        <div>
            <section className="keySection">
                <h3>Tasks</h3>
                    <button class="addTask">Add Task</button>
                    <ul>
                        <li>Task1</li>
                        <li>Task2</li>
                        <li>Task3</li>
                        <li>Task4</li>
                        <li>Task5</li>
                    </ul>
            </section>
        </div>
    )
}
