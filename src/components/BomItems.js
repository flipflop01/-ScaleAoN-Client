import React from 'react';
import './BomItems.css';

export default class BomItems extends React.Component {
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }

    render() {
        let bomEntries = this.props.entries;
        let listItems = bomEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}
