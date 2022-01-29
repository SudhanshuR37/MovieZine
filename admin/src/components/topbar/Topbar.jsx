import React from 'react';
import './topbar.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
    return <div className='topbar'>
        <div className='topbar__wrapper'>
            <div className='topbar__wrapper__topLeft'>
                <span className='topbar__wrapper__topLeft__logo'>sr_admin</span>
            </div>
            <div className='topbar__wrapper__topRight'>
                <div className='topbar__wrapper__topRight__iconContainer'>
                    <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                    <span className='topbar__wrapper__topRight__icons__topIconBadge'>2</span>
                </div>
                <div className='topbar__wrapper__topRight__iconContainer'>
                    <LanguageIcon></LanguageIcon>
                    <span className='topbar__wrapper__topRight__icons__topIconBadge'>2</span>
                </div>
                <div className='topbar__wrapper__topRight__iconContainer'>
                    <SettingsIcon></SettingsIcon>
                </div>
                <img className='topbar__wrapper__topRight__avatar' src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='Profile Pic'></img>
            </div>
        </div>
    </div>;
};

export default Topbar;
