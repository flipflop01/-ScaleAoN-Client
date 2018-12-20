import React from 'react';
import './bom.css';
import BomItems from './BomItems';

export default class Bom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        if (this._inputElement.value !== "") {
            let newItem ={
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = '';
        console.log(this.state.items);
        event.preventDefault();
    }

    render() {


        return(
            <div>
                <h3>*Project Name Here*</h3>
                <h4>Build of Materials</h4>
                <div className="formHeader">
                    <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this._inputElement = a}
                            placeholder="Enter Item" className="itemInput"></input>
                        <button type="submit" className='btn'>Add Item</button>
                    </form>
                </div>
                <BomItems entries={this.state.items} />
            </div>
        )
    }

}
