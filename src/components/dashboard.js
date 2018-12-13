import React from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';

export default class dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    setText(text) {
        this.setState({
            text
        });
    }

    goToBom(event) {
        event.preventDefault();
        this.props.history.push('/bom');
    }

    render() {

        return(
            <div>
                <header>
                    <h1><Link to="/">ScaleAon</Link></h1>
                </header>
                <div className="dashBox">
                    <h2>Welcome Marck Manga</h2>
                    <form className="newProjForm" onSubmit={e => this.goToProject(e)}>
                        <input type="text" value={(this.state.text)}
                        onChange={e => this.setText(e.target.value)} />
                        <button className="btn projButton" onClick={e => this.goToBom(e)}>Create New Project</button>
                    </form>
                    <div>
                        <h3>Current Projects</h3>
                        <ul>
                            <li><button className="projButton">FJ1000BZL</button></li>
                            <li><button className="projButton">HELKON110</button></li>
                            <li><button className="projButton">EZ7003W</button></li>
                            <li><button className="projButton">EZ460EQ</button></li>
                        </ul>
                    </div>
                </div>
            </div>
)
    }
}
