import React, { useRef, useState } from "react";
import './register.scss'

const Register = () => {
    const [email, setEmail] = useState("");
    const emailRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const [password, setPassword] = useState("");
    const passwordRef = useRef();
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <div className='register'>
            <div className='register__top'>
                <div className='register__top__wrapper'>
                    <img className='register__top__wrapper__logo' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="MovieZine logo" ></img>
                    <button className='register__top__wrapper__logo__signInButton'>Sign In</button>
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
                    <input type='password' placeholder='Enter password' ref={passwordRef}></input>
                    <button className='register__container__input__registerButton' onClick={handleFinish}>Start</button>
                </form>)}
            </div>
        </div>
    )
}

export default Register
