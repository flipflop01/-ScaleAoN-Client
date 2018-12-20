import React from 'react';
import AddForm from './addform';
import './item.css';

export default function Item(props) {
    return (
        <div className="project">
            <li className="add-task-wrapper">
                {props.itemName}
            </li>
        </div>
    );
}
