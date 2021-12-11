import React from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({ type }) => {
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
            <img src="http://images5.fanpop.com/image/photos/27900000/the-great-trio-naruto-27967647-900-350.jpg" alt="Featured Series/Movie"></img>
            <div className='featured__info'>
                <img src={process.env.PUBLIC_URL + '/images/Naruto logo.png'} alt="Featured Series/Movie Logo"></img>
                <span className='featured__info__description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra felis tempus, malesuada magna eget, varius velit. Donec tincidunt urna in velit blandit, sit amet mattis turpis auctor. Aliquam luctus suscipit massa, a dapibus quam. Curabitur cursus libero lorem, ac efficitur libero varius quis. Etiam cursus ante at ex rhoncus cursus. Duis lacinia quam lacus, a faucibus diam luctus et. Duis ut ipsum a turpis pellentesque posuere id vitae sapien. Curabitur aliquet vehicula dignissim.
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
