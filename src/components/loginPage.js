import React from 'react';
import './loginPage.css';


export default function loginPage(props) {
    return (
        <div>
            <div className="loginBox">
                <div className="login">
                    <h3>Already have an account?</h3>
                    <form className="signup">
                        <label for="username">Name</label>
                        <input className="loginname" type="text" autofocus required value="John Doe" />
                        <label for="password">Password</label>
                        <input type="text" className="loginpass" autofocus required value="********" />
                        <button className="createAccount" type="submit">Log In</button>
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
