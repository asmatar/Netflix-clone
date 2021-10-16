import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import './Login.scss';

const Login = () => {

    let history = useHistory()
    const LoginSuccess = (response) => {
        // GoogleUser(response)
        localStorage.setItem('userName', response.profileObj.givenName);
        localStorage.setItem('userPicture', response.profileObj.imageUrl);
        // console.log('je suis dans le user', response)
        console.log('je suis dans le user', response.profileObj)
        // console.log('je suis dans le user', response.Zw.profileObj)
        history.push('/')
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
                        onSuccess={LoginSuccess}
                        // onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        icon='false'
                    />,
                    {/* <button type='submit' className='sign' >Sign in</button> */}
                </div>
            </form>

        </div>
    )
}

export default Login
