import React from 'react';
import './user.css'


const User = () => {
    return <div className='user'>
        <div className='user__titleContainer'>
            <h1 className='user__titleContainer_title'>Edit User</h1>
            <button className='user__titleContainer__button'>Create</button>
        </div>
        <div className='user__container'>
            <div className='user__container__userShow'>
                <div className='user__container__userShow__top'>
                    <img className='user__container__userShow__top__image' src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='Profile Pic'>
                    </img>
                    <div className='user__container__userShow__top__user'>
                        <span className='user__container__userShow__top__user__username'>Anna Becker</span>
                        <span className='user__container__userShow__top__user__userTitle'>Software Engineer</span>
                    </div>
                </div>
                <div className='user__container__userShow__bottom'>

                </div>
            </div>
            <div className='user__container__userUpdate'>
                aas
            </div>
        </div>
    </div>;
};

export default User;
