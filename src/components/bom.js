import React from 'react';
import './bom.css';


export default function bom(props) {
    return(
        <div>
            <section class="bomSection">
                <h3>Product Name</h3>
                <h4>Build of Materials</h4>
                <button class="addItem">Add Item</button>
                <ul>
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                    <li>item5</li>
                </ul>
            </section>
        </div>
    )
}
