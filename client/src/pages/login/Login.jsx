import { React, useState, useContext } from 'react'
import { login } from '../../authContext/apiCalls';
import { AuthContext } from '../../authContext/AuthContext';
import './login.scss'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    }

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
                    <input className='login__container__form__input' type="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)}></input>
                    <input className='login__container__form__input' type="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)}></input>
                    <button className='login__container__form__loginButton' onClick={handleLogin}>Sign In</button>
                    <span>New to MovieZine? <b>Sign Up Now!</b></span>
                </form>
            </div>
        </div>
    )
}

export default Login
