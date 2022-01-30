import React from 'react';
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
    return <div className='widgetSm'>
        <span className='widgetSm__title'>New Join Members</span>
        <ul className='widgetSm__list'>
            <li className='widgetSm__list__listItem'>
                <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='' className='widgetSm__list__listItem__image' ></img>
                <div className='widgetSm__list__listItem__user'>
                    <span className='widgetSm__list__listItem__user__username'>Anna Keller</span>
                    <span className='widgetSm__list__listItem__user__userTitle'>Software Engineer</span>
                </div>
                <button className='widgetSm__list__listItem__button'>
                    <VisibilityIcon className='widgetSm__list__listItem__button__icon'></VisibilityIcon>
                    Display
                </button>
            </li>
            <li className='widgetSm__list__listItem'>
                <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='' className='widgetSm__list__listItem__image' ></img>
                <div className='widgetSm__list__listItem__user'>
                    <span className='widgetSm__list__listItem__user__username'>Anna Keller</span>
                    <span className='widgetSm__list__listItem__user__userTitle'>Software Engineer</span>
                </div>
                <button className='widgetSm__list__listItem__button'>
                    <VisibilityIcon className='widgetSm__list__listItem__button__icon'></VisibilityIcon>
                    Display
                </button>
            </li>
            <li className='widgetSm__list__listItem'>
                <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='' className='widgetSm__list__listItem__image' ></img>
                <div className='widgetSm__list__listItem__user'>
                    <span className='widgetSm__list__listItem__user__username'>Anna Keller</span>
                    <span className='widgetSm__list__listItem__user__userTitle'>Software Engineer</span>
                </div>
                <button className='widgetSm__list__listItem__button'>
                    <VisibilityIcon className='widgetSm__list__listItem__button__icon'></VisibilityIcon>
                    Display
                </button>
            </li>
            <li className='widgetSm__list__listItem'>
                <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='' className='widgetSm__list__listItem__image' ></img>
                <div className='widgetSm__list__listItem__user'>
                    <span className='widgetSm__list__listItem__user__username'>Anna Keller</span>
                    <span className='widgetSm__list__listItem__user__userTitle'>Software Engineer</span>
                </div>
                <button className='widgetSm__list__listItem__button'>
                    <VisibilityIcon className='widgetSm__list__listItem__button__icon'></VisibilityIcon>
                    Display
                </button>
            </li>
            <li className='widgetSm__list__listItem'>
                <img src='https://lh3.googleusercontent.com/ogw/ADea4I58Inj3DBJziyAs4TN7yW9mM-6fA1hkUz4AmgCiow=s64-c-mo' alt='Profile Pic' className='widgetSm__list__listItem__image' ></img>
                <div className='widgetSm__list__listItem__user'>
                    <span className='widgetSm__list__listItem__user__username'>Anna Keller</span>
                    <span className='widgetSm__list__listItem__user__userTitle'>Software Engineer</span>
                </div>
                <button className='widgetSm__list__listItem__button'>
                    <VisibilityIcon className='widgetSm__list__listItem__button__icon'></VisibilityIcon>
                    Display
                </button>
            </li>
        </ul>
    </div>;
};

export default WidgetSm;
