import React from 'react';
import './loginPage.css';
import {Link} from 'react-router-dom';


export default class loginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    goToDash(event) {
        event.preventDefault();
        this.props.history.push('/dash');
    }

    //----Login--------
    goLogin(name, password) {
        this.setState({
            user: {
                name,
                password
            }
        })
    }

    render() {
        return (
            <div className="loginMain">
                <div className="loginBox">
                    <div className="login">
                        <h3>Already have an account?</h3>
                        <form className="signup" onSubmit={e => this.goToDash(e)}>
                            <label for="name">Name</label>
                            <input className="name" type="text" autofocus required value="Marck Manga" />
                            <label for="password">Password</label>
                            <input type="text" className="loginpass" autofocus required value="pass1" />
                            <button className="toDash" type="submit">Log In</button>
                        </form>
                    </div>
                    <div className="newAccount">
                        <h3 className="newHere">New Account</h3>
                        <form className="signup">
                            <label for="username">Name</label>
                            <input className="loginname" type="text" autofocus required value="Jane Doe" />
                            <label for="password">Password</label>
                            <input type="text" className="loginpass" autofocus required value="********" />
                            <button className="createAccount" type="submit">Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
