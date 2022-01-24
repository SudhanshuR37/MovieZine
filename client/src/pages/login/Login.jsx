import React from 'react'
import './login.scss'

const Login = () => {
    return (
        <div className='login'>
            <div className='login__top'>
                <div className='login__top__wrapper'>
                    <img className='login__top__wrapper__logo' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="MovieZine logo" ></img>
                </div>
            </div>
            <div className='login__container'>
                <form className='login__container__form'>
                    <h1>Sign In</h1>
                    <input className='login__container__form__input' type="email" placeholder='Enter email'></input>
                    <input className='login__container__form__input' type="password" placeholder='Enter password'></input>
                    <button className='login__container__form__loginButton'>Sign In</button>
                    <span>New to MovieZine? <b>Sign Up Now!</b></span>
                </form>
            </div>
        </div>
    )
}

export default Login
