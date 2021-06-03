import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
// import { loginUrlSimplified } from './spotify';

function Login() {
    return (
        <div className="login">
           
            <img src="spotify2021logo.gif"
            alt="spotifyLogo"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            {/* <a href={loginUrlSimplified }>LOGIN WITH SPOTIFY Simplified</a> */}
        </div>
    );
}

export default Login;