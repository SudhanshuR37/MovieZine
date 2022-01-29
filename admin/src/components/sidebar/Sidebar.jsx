import React from 'react';
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReportIcon from '@mui/icons-material/Report';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';

const Sidebar = () => {
    return <div className='sidebar'>
        <div className='sidebar__wrapper'>
            <div className='sidebar__wrapper__menu'>
                <h3 className='sidebar__wrapper__menu__title'>Dashboard</h3>
                <ul className='sidebar__wrapper__menu__list'>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <HomeIcon className='sidebar__wrapper__menu__list__listItem__sideIcon active'></HomeIcon>
                        Home
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <AnalyticsIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></AnalyticsIcon>
                        Analytics
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <TrendingUpIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></TrendingUpIcon>
                        Sales
                    </li>
                </ul>
            </div>
            <div className='sidebar__wrapper__menu'>
                <h3 className='sidebar__wrapper__menu__title'>Quick Menu</h3>
                <ul className='sidebar__wrapper__menu__list'>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <PersonOutlineIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></PersonOutlineIcon>
                        Users
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <AnalyticsIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></AnalyticsIcon>
                        Products
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <AttachMoneyIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></AttachMoneyIcon>
                        Transactions
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <BarChartIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></BarChartIcon>
                        Reports
                    </li>
                </ul>
            </div>
            <div className='sidebar__wrapper__menu'>
                <h3 className='sidebar__wrapper__menu__title'>Notifications</h3>
                <ul className='sidebar__wrapper__menu__list'>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <MailOutlineIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></MailOutlineIcon>
                        Mail
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <DynamicFeedIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></DynamicFeedIcon>
                        Feedback
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <ChatBubbleOutlineIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></ChatBubbleOutlineIcon>
                        Messages
                    </li>
                </ul>
            </div>
            <div className='sidebar__wrapper__menu'>
                <h3 className='sidebar__wrapper__menu__title'>Staff</h3>
                <ul className='sidebar__wrapper__menu__list'>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <ManageAccountsIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></ManageAccountsIcon>
                        Manage
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <AnalyticsIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></AnalyticsIcon>
                        Analytics
                    </li>
                    <li className='sidebar__wrapper__menu__list__listItem'>
                        <ReportIcon className='sidebar__wrapper__menu__list__listItem__sideIcon'></ReportIcon>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>;
};

export default Sidebar;
