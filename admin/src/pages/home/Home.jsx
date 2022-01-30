import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLar from '../../components/widgetLar/WidgetLar';

const Home = () => {
    return <div className='home'>
        <FeaturedInfo></FeaturedInfo>
        <Chart title={"Active User Details"} data={userData} dataKey={"Active Users"} grid></Chart>
        <div className='home__homeWidgets'>
            <WidgetSm></WidgetSm>
            <WidgetLar></WidgetLar>
        </div>
    </div>;
};

export default Home;
