import React from 'react';

import './item.css';

export default function Item(props) {
    return (
        <div className="item">
            {props.text}
        </div>
    );
}

Item.defaultProps = {
    text: ''
};
