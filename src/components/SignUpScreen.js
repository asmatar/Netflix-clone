import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignUpScreen.scss';

const SignUpScreen = () => {
    // useRef to track the data from the input, we attach a reference on the input using 'ref'
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(
            // we get the value from these input
            emailRef.current.value,
            passwordRef.current.value
            // when we get it we do the following
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }
    const signIn = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(
            // we get the value from these input
            emailRef.current.value,
            passwordRef.current.value
            // when we get it we do the following
        ).then((authUser) => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }
    return (
        <div  className='signUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='email' />
                <input ref={passwordRef} type="password" placeholder='password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4> 
                    <span className='signUpScreen__grey'>
                        New to Netflix ? 
                    </span>
                    <span className='signUpScreen__link' onClick={register} > Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
