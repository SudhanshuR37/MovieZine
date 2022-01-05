import React, { useEffect, useRef, useState } from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
    return (
        <div className='listItem' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92vx-H4_mDQlxj--Mtlx5RWio-kOC9xQSSA&usqp=CAU' alt=''></img>
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop></video>
                    <div className='listItem__itemInfo'>
                        <div className='listItem__itemInfo__icons'>
                            <PlayArrowIcon className='listItem__itemInfo__icons__icon'></PlayArrowIcon>
                            <AddIcon className='listItem__itemInfo__icons__icon'></AddIcon>
                            <ThumbUpOutlinedIcon className='listItem__itemInfo__icons__icon'></ThumbUpOutlinedIcon>
                            <ThumbDownOutlinedIcon className='listItem__itemInfo__icons__icon'></ThumbDownOutlinedIcon>
                        </div>
                        <div className='listItem__itemInfo__top'>
                            <span>1 hour 40 mins</span>
                            <span className='limit'>+16</span>
                            <span>2019</span>
                        </div>
                        <div className='listItem__itemInfo__desc'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className='listItem__itemInfo__genre'>Action</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
