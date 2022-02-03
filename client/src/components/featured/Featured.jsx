import React, { useEffect, useState, useContext } from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';

const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomMovies = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/server/movies/random?type=${type}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setContent(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        }
        getRandomMovies();
    }, [type])
    return (
        <div className='featured'>
            {
                type && (
                    <div className='featured__category'>
                        <span>{type === "movies" ? "Movies" : "TV Shows"}</span>
                        <select name='genre' id='genre' onChange={(e) => setGenre(e.target.value)}>
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )
            }
            <img src={content?.img} alt=""></img>
            <div className='featured__info'>
                <img src={content?.imgTitle} alt=""></img>
                <span className='featured__info__description'>
                    {content?.description}
                </span>
                <div className='featured__info__buttons'>
                    <button className='featured__info__buttons__play'>
                        <PlayArrowIcon></PlayArrowIcon>
                        <span>
                            Play
                        </span>
                    </button>
                    <button className='featured__info__buttons__moreInfo'>
                        <InfoOutlinedIcon></InfoOutlinedIcon>
                        <span>
                            More Info
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
