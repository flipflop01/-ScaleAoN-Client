import React from 'react';
import './tasks.css';

export default function tasks(props) {
    return(
        <div>
            <section className="keySection">
                <h3>Tasks</h3>
                    <button class="addTask">Add Task</button>
                    <button class="btn remTask">Remove Task</button>
                    <ul>

                    </ul>
            </section>
        </div>
    )
}
