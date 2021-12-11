import React from 'react'
import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = () => {
    return (
        <div className='listItem'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92vx-H4_mDQlxj--Mtlx5RWio-kOC9xQSSA&usqp=CAU' alt=''></img>
            <div className='listItem__itemInfo'>
                <div className='listItem__itemInfo__icons'>
                    <PlayArrowIcon></PlayArrowIcon>
                    <AddIcon></AddIcon>
                    <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
                    <ThumbDownOutlinedIcon></ThumbDownOutlinedIcon>
                </div>
            </div>
        </div>
    )
}

export default ListItem
