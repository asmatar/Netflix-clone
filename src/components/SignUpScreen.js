import React from 'react'
import './SignUpScreen.scss'
const SignUpScreen = () => {
    return (
        <div  className='signUpScreen'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <button type='submit'>Sign In</button>
                <h4> 
                    <span className='signUpScreen__grey'>
                        New to Netflix ? 
                    </span>
                    <span className='signUpScreen__link'> Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
