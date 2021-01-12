import React from 'react';

import './SignUp.css';
import SignIn from '../SignIn/SignIn';

function SignUp() {
    return (
        <div className="signUp">
            <SignIn />
            <div className="signUpForm">
                <form>
                    <div className="form__header">
                        <h1>Sign Up</h1>
                        <div/>
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
                        <label htmlFor="dob">Date of birth</label>
                        <input type="date"/>
                    </div>
                    <div className="signUpFormGroup">
                        <label htmlFor="Gender">Gender</label>
                        <div className="genderList">
                            <label htmlFor="female">Female</label>
                            <input type="radio" name="female"/>
                        </div>
                        <div className="genderList">
                            <label htmlFor="male">Male</label>
                            <input type="radio" name="male"/>
                        </div>
                        <div className="genderList">
                            <label htmlFor="custom">Custom</label>
                            <input type="radio" name="custom"/>
                        </div>
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
                {/* <p>Already have Accout? Sign In</p> */}
            </div>
        </div>
    )
}

export default SignUp
