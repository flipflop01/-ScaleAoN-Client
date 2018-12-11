import React from 'react';
import './loginPage.css';


export default class loginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    goToDash(event) {
        event.preventDefault();
        this.props.history.push('/dash');
    }

    render() {
        return (
            <div className="loginMain">
                <div className="loginBox">
                    <div className="login">
                        <h3>Already have an account?</h3>
                        <form className="signup" onSubmit={e => this.goToDash(e)}>
                            <label for="username">Name</label>
                            <input className="loginname" type="text" autofocus required value="John Doe" />
                            <label for="password">Password</label>
                            <input type="text" className="loginpass" autofocus required value="********" />
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
