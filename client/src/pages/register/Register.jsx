import axios from "axios";
import React, { useRef, useState } from "react";
import './register.scss'
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState("");
    const emailRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const passwordRef = useRef();

    const [username, setUsername] = useState("");
    const usernameRef = useRef();

    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
            await axios.post('http://localhost:8800/server/auth/register', { email, username, password });
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className='register'>
            <div className='register__top'>
                <div className='register__top__wrapper'>
                    <img className='register__top__wrapper__logo' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="MovieZine logo" ></img>
                </div>
            </div>
            <div className='register__container'>
                <h1>Unlimited Movies, TV Shows, Anime and much more.</h1>
                <h2>Watch Anywhere, Anytime for FREE!</h2>
                <p>Ready to dive into the world of binge watching? Enter your email below.</p>
                {!email ? (<div className='register__container__input'>
                    <input type='email' placeholder='Enter email' ref={emailRef}></input>
                    <button className='register__container__input__registerButton' onClick={handleStart}>Get Started</button>
                </div>) : (<form className='register__container__input'>
                    <input type='username' placeholder='Enter username' ref={usernameRef}></input>
                    <input type='password' placeholder='Enter password' ref={passwordRef}></input>
                    <button className='register__container__input__registerButton' onClick={handleFinish}>Start</button>
                </form>)}
                <div className="register__container__signIn">
                    <p>Already have an account? Hit Sign in below!</p>
                    <Link to='/login'>
                        <button className='register__top__wrapper__logo__signInButton'>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
