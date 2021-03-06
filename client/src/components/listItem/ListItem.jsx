import React, { useEffect, useRef, useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get("http://localhost:8800/server/movies/find/" + item, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
    }, [item]);

    return (
        <Link to='/watch' state={movie} >
            <div className='listItem' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}>
                <img src={movie?.imgThumbnail} alt=''></img>
                {isHovered && (
                    <>
                        <video src={movie?.trailer} autoPlay={true} loop></video>
                        <div className='listItem__itemInfo'>
                            <div className='listItem__itemInfo__icons'>
                                <PlayArrowIcon className='listItem__itemInfo__icons__icon'></PlayArrowIcon>
                                <AddIcon className='listItem__itemInfo__icons__icon'></AddIcon>
                                <ThumbUpOutlinedIcon className='listItem__itemInfo__icons__icon'></ThumbUpOutlinedIcon>
                                <ThumbDownOutlinedIcon className='listItem__itemInfo__icons__icon'></ThumbDownOutlinedIcon>
                            </div>
                            <div className='listItem__itemInfo__top'>
                                <span>{movie?.duration}</span>
                                <span className='limit'>+{movie?.limit}</span>
                                <span>{movie?.year}</span>
                            </div>
                            <div className='listItem__itemInfo__desc'>
                                {movie?.description}
                            </div>
                            <div className='listItem__itemInfo__genre'>{movie?.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}

export default ListItem
