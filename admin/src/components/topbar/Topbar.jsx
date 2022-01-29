import React from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Topbar = () => {
    return <div className='topbar'>
        <div className='topbar__'>
            sr_admin
        </div>
        <div className='topbar__'>
            <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
        </div>
    </div>;
};

export default Topbar;
