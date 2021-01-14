import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './SignIn.css';
import auth from '../../firebase/firebase';
import { signIn } from './signInSlice';

const SignIn = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState(''); 
    const dispatch = useDispatch();
    const history = useHistory();

    const logIn = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
            dispatch(signIn({
                email: authUser.user.email,
                uid: authUser.user.uid,
                dispalyName: authUser.user.displayName,
                photoUrl: authUser.user.photoURL,
            }))
            history.push('/home');
            console.log(authUser)
        })
        .catch((error) => alert(error.message));
    }

    return (
            <div className="signIn">
                <div className="signIn__left">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook"/>
                    <p>Facebook helps you connect and share with the people in your life.</p>
                </div>
                <div className="signIn__right">
                        <form onSubmit={logIn}>
                            <div className="signIn__leftFormGroup">
                                <input 
                                    type="email" 
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="signIn__leftFormGroup">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="signIn__leftFormGroup">
                                <button type='submit' className="signIn__leftFormSignIn">Log In</button>
                            </div>
                            <Link to="#">Forgotten password?</Link>
                            <hr/>
                            <div className="signIn__leftFormGroup">
                                <Link to="/signup"><button className="signIn__leftFormRegister">Create New Account</button></Link>
                            </div>
                        </form>
                    <span><Link to="#"><strong>Create a Page</strong></Link> for a celebrity, band or business.</span>
                </div>
            </div>
    )
}

export default SignIn
