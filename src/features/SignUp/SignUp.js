import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './SignUp.css';
import SignIn from '../SignIn/SignIn';

function SignUp() {
    const history = useHistory();

    const hideSignUpForm = () => {
        history.push('/');
    }

    return (
        <div className="signUp">
            <SignIn />
            <div className="signUp__overlay">
                <div className="signUpForm">
                    <form>
                        <div className="form__header">
                            <h1>Sign Up</h1>
                            <div onClick={hideSignUpForm}>
                                <div/>
                            </div>
                        </div>
                        <p>It's quick and easy.</p>
                        <hr/>
                        <div className="signUpFormGroup">
                            <input className="signUpFormFirstName" type="text" placeholder="First name"/>
                            <input className="signUpFormSurname" type="text" placeholder="Surname" />
                        </div>
                        <div className="signUpFormGroup">
                            <input className="signUpFormEmail" type="text" placeholder="Mobile number or email address" />
                        </div>
                        <div className="signUpFormGroup">
                            <input className="signUpFormPassword" type="password" placeholder="New password"/>
                        </div>
                        <div className="signUpFormGroup">
                            <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. 
                            You may receive SMS notifications from us and can opt out at any time.
                            </p>
                        </div>
                        <div className="signUpFormGroup">
                            <button>Sign Up</button>
                        </div>
                    </form>
                    <p>Already have Accout? <Link to="/">Sign In</Link></p>
                </div>
            </div>    
        </div>
    )
}

export default SignUp
