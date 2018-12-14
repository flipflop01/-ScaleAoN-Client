import React from 'react';
import './bom.css';
import Item from './item';
import {addItem} from '../actions/actions';
import addForm from './addform';

export default class bom extends React.Component {

    addItem(text) {
        this.props.dispatch(
            addItem(text)
        );
    }

    render() {

        return(
            <div>
                <section class="bomSection">
                    <h3>*Project Name Here*</h3>
                    <h4>Build of Materials</h4>
                    <button class="btn addItem">Add Item</button>
                    <button class="btn remItem">Remove Item</button>
                    <ul className="itemList">
                        <addForm
                        type="item"
                        onAdd={text => this.addItem(text)}
                        />
                    </ul>
                </section>
            </div>
        )
    }

}
