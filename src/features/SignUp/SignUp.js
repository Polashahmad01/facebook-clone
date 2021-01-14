import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './SignUp.css';
import SignIn from '../SignIn/SignIn';
import auth from '../../firebase/firebase';
import { signUp } from './signUpSlice';

function SignUp() {
    const [ firstName, setFirstName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();
    const dispatch = useDispatch()

    const hideSignUpForm = () => {
        history.push('/');
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(firstName === '' && surname === '' && email === '' && password === '') {
            alert('Please Fill All The Form') 
            return;
        } else {
            auth
                .createUserWithEmailAndPassword(email, password)
                .then((userAuth) => {
                    dispatch(signUp({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        dispalyName: firstName,
                        surname: surname,
                        photoUrl: userAuth.user.photoURL,
                    }))
                    console.log(userAuth);
                    history.push('/home');
                })
                .catch(error => alert(error.message));
        }

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
                            <input 
                                className="signUpFormFirstName" 
                                type="text" 
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input 
                                className="signUpFormSurname" 
                                type="text" 
                                placeholder="Surname" 
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </div>
                        <div className="signUpFormGroup">
                            <input 
                                className="signUpFormEmail" 
                                type="text" 
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signUpFormGroup">
                            <input 
                                className="signUpFormPassword" 
                                type="password" 
                                placeholder="New password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="signUpFormGroup">
                            <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. 
                            You may receive SMS notifications from us and can opt out at any time.
                            </p>
                        </div>
                        <div className="signUpFormGroup">
                            <button onClick={onSubmit}>Sign Up</button>
                        </div>
                    </form>
                    <p>Already have Accout? <Link to="/">Sign In</Link></p>
                </div>
            </div>    
        </div>
    )
}

export default SignUp
