import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__container__left">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="MovieZine logo" ></img>
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Latest</span>
                    <span>My List</span>
                </div>
                <div className="navbar__container__right">
                    <SearchIcon className="navbar__container__right__icon"></SearchIcon>
                    <span>Children</span>
                    <CardGiftcardIcon className="navbar__container__right__icon"></CardGiftcardIcon>
                    <NotificationsIcon className="navbar__container__right__icon"></NotificationsIcon>
                    <img src="https://i1.sndcdn.com/artworks-000119862173-lyc3z2-t500x500.jpg" alt="Profile Pic" ></img>
                    <div className="navbar__container__right__profile">
                        <ArrowDropDownIcon className="navbar__container__right__icon"></ArrowDropDownIcon>
                        <div className="navbar__container__right__profile__options">
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
