import React from 'react';
import './bom.css';
//import AddForm from './addform';

export default class Bom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        event.preventDefault();
        console.log('Adding Item');
        //this.setState({items: e.target.value})
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
                <ul className="itemList">
                    {this.state.items.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        )
    }

}
