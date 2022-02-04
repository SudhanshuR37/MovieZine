import React, { useEffect, useState, useContext } from "react";
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthAction";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true)
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="navbar__container">
                <div className="navbar__container__left">
                    <Link to="/" className="link">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="MovieZine logo" ></img>
                    </Link>
                    <Link to="/" className="link">
                        <span>
                            <HomeIcon></HomeIcon>
                            Home
                        </span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>
                            <LiveTvIcon></LiveTvIcon>
                            TV Shows
                        </span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>
                            <MovieIcon></MovieIcon>
                            Movies
                        </span>
                    </Link>
                    <span>
                        <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
                        Recently Added
                    </span>
                    <span>
                        <AddIcon></AddIcon>
                        My List
                    </span>
                </div>
                <div className="navbar__container__right">
                    <SearchIcon className="navbar__container__right__icon"></SearchIcon>
                    <span>KIDS</span>
                    <CardGiftcardIcon className="navbar__container__right__icon"></CardGiftcardIcon>
                    <NotificationsIcon className="navbar__container__right__icon"></NotificationsIcon>
                    <img src="https://i1.sndcdn.com/artworks-000119862173-lyc3z2-t500x500.jpg" alt="Profile Pic" ></img>
                    <div className="navbar__container__right__profile">
                        <ArrowDropDownIcon className="navbar__container__right__icon"></ArrowDropDownIcon>
                        <div className="navbar__container__right__profile__options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Log Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
