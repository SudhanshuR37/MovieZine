import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLar from '../../components/widgetLar/WidgetLar';
import { useEffect, useState, useMemo } from 'react';
const axios = require('axios');

const Home = () => {
    const MONTHS = useMemo(() => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], []);
    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get('http://localhost:8800/server/users/stats', {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjE0ZGEyNTY1ZTU1NDI0YmYxZmQwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYyMjU2MywiZXhwIjoxNjQ0MDU0NTYzfQ.hWvINsccSg2uxTlRmLi5y-FDYYcpxh4xxFkrfCWrawQ",
                    },
                });
                const statList = res.data.sort(function (a, b) {
                    return a._id - b._id;
                })
                statList.map(item => setUserStats(prev => [...prev, { name: MONTHS[item._id - 1], "New User": item.total }]));
            } catch (err) {
                console.log(err);
            }
        }
        getStats();
    }, [MONTHS]);

    return <div className='home'>
        <FeaturedInfo></FeaturedInfo>
        <Chart title={"User Analytics"} data={userStats} dataKey={"New User"} grid></Chart>
        <div className='home__homeWidgets'>
            <WidgetSm></WidgetSm>
            <WidgetLar></WidgetLar>
        </div>
    </div>;
};

export default Home;
