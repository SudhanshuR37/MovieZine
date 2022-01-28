import React, { useEffect, useState } from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';

const Featured = ({ type }) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const getRandomMovies = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type ? type : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjE0ZGEyNTY1ZTU1NDI0YmYxZmQwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzM1NzI2MiwiZXhwIjoxNjQzNzg5MjYyfQ.RL4nkOkAqZTXAjXVulmb7DO8-oTUo08OUxOkGsdLD-4"
                    }
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
                        <span>{type === "movie" ? "Movies" : "TV Shows"}</span>
                        <select name='genre' id='genre'>
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
            <img src={content.img} alt="Featured Series/Movie"></img>
            <div className='featured__info'>
                <img src={content.imgTitle} alt="Featured Series/Movie Logo"></img>
                <span className='featured__info__description'>
                    {content.description}
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
