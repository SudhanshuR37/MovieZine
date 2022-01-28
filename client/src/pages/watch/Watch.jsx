import React from 'react'
import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, Link } from 'react-router-dom';

const Watch = () => {
    const location = useLocation();
    const movie = location.state;

    return (
        <div className='watch'>
            <Link to='/'>
                <div className='watch__back'>
                    <ArrowBackIcon></ArrowBackIcon>
                    Home
                </div>
            </Link>
            <video
                className="watch__video"
                autoPlay
                progress
                controls
                src={movie.video}
            />
        </div>
    )
}

export default Watch
