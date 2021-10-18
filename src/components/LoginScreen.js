import React, { useState } from 'react';
import './LoginScreen.scss';
import SignUpScreen from './SignUpScreen';
const LoginScreen = () => {
    const [signIn, setSignIn] =  useState(false)
    console.log(signIn)
    return (
        <div className='login-container'>
            <div className='login-container__logo'>
                <img src="./image/logo.png" alt="netflix" />
                <button className='login-container__button' onClick= {() =>setSignIn(true)}>Sign in</button>
            </div>
            <div className="login-container__body">
                { signIn ? (
                <SignUpScreen />
                    ) : (     
                     <>
                        <h1>Unlimited films, TV programmes and more</h1>
                        <h2>Watch anywhere, cancel at any time</h2>
                        <h3>Ready to watch? Enter your email or create or restart your membership</h3>
                        <div className="loginScreenInput">
                            <form >
                                <input type="email" placeholder='Email adress' />
                                <button className='loginScreenInput__getStarted' onClick= {() =>setSignIn(true)}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen
