import React from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css';

const SignIn = () => {

    const signUp = () => {
        alert("Create Account");
    }

    return (
        <div className="signIn">
            <div className="signIn__left">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook"/>
                <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
            <div className="signIn__right">
                <div className="signIn__leftForm">
                    <form>
                        <div className="signIn__leftFormGroup">
                            <input type="text" placeholder="Email address or phone number"/>
                        </div>
                        <div className="signIn__leftFormGroup">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="signIn__leftFormGroup">
                            <button className="signIn__leftFormSignIn">Log In</button>
                        </div>
                        <Link to="#">Forgotten password?</Link>
                        <hr/>
                        <div className="signIn__leftFormGroup">
                            <button onClick={signUp} className="signIn__leftFormRegister">Create New Account</button>
                        </div>
                    </form>
                </div>
                <span><Link to="#"><strong>Create a Page</strong></Link> for a celebrity, band or business.</span>
            </div>
        </div>
    )
}

export default SignIn
