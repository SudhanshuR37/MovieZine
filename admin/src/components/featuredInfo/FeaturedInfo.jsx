import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './featuredInfo.css'

const FeaturedInfo = () => {
    return <div className='featuredInfo'>
        <div className='featuredInfo__item'>
            <span className='featuredInfo__item__title'>Revenue</span>
            <div className='featuredInfo__item__moneyContainer'>
                <span className='featuredInfo__item__moneyContainer__money'>$2,214</span>
                <span className='featuredInfo__item__moneyContainer__rate'>
                    -11.4
                    <ArrowDownwardIcon className='featuredInfo__item__moneyContainer__rate__featuredIcon negative'></ArrowDownwardIcon>
                </span>
            </div>
            <span className='featuredInfo__item__sub'>Compared to last month</span>
        </div>
        <div className='featuredInfo__item'>
            <span className='featuredInfo__item__title'>Sales</span>
            <div className='featuredInfo__item__moneyContainer'>
                <span className='featuredInfo__item__moneyContainer__money'>$4,214</span>
                <span className='featuredInfo__item__moneyContainer__rate'>
                    -1.4
                    <ArrowDownwardIcon className='featuredInfo__item__moneyContainer__rate__featuredIcon negative'></ArrowDownwardIcon>
                </span>
            </div>
            <span className='featuredInfo__item__sub'>Compared to last month</span>
        </div>
        <div className='featuredInfo__item'>
            <span className='featuredInfo__item__title'>Cost</span>
            <div className='featuredInfo__item__moneyContainer'>
                <span className='featuredInfo__item__moneyContainer__money'>$2,024</span>
                <span className='featuredInfo__item__moneyContainer__rate'>
                    +2.4
                    <ArrowUpwardIcon className='featuredInfo__item__moneyContainer__rate__featuredIcon'></ArrowUpwardIcon>
                </span>
            </div>
            <span className='featuredInfo__item__sub'>Compared to last month</span>
        </div>
    </div>;
};

export default FeaturedInfo;
