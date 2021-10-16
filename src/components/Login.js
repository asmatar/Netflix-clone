import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './Login.scss';
const Login = () => {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
        <div className='login-container'>
            <div className='login-container__logo'>
                <img src="./image/logo.png" alt="netflix" />
            </div>
            <form className='login-container__form'>
                <div className='login-container__form__content'>
                    <h2 className='signin'>Sign in</h2>
                    <input type="email" 
                    className='input' 
                    placeholder='If you want to connect, you do not need email or password'
                    ></input >
                    <br />
                    <input type="password"className='input' placeholder='Just click on Sign in with google'></input >
                    <GoogleLogin
                        className='sign'
                        clientId="735413005110-h1ovo7as9v3u0ih9kirbhovi8nb03k7f.apps.googleusercontent.com"
                        buttonText="Sign in with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />,
                    {/* <button type='submit' className='sign' >Sign in</button> */}
                </div>
            </form>

        </div>
    )
}

export default Login
