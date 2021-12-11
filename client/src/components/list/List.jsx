import React, { useEffect, useRef, useState } from "react";
import './list.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';

const List = ({ listTitle }) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    const listRef = useRef()

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 4) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    return (
        <div className='list'>
            <span className='list__listTitle'>{listTitle}</span>
            <div className='list__wrapper'>
                <ArrowBackIosNewOutlinedIcon className='list__wrapper__sliderArrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }}></ArrowBackIosNewOutlinedIcon>
                <div className='list__wrapper__container' ref={listRef}>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </div>
                <ArrowForwardIosOutlinedIcon className='list__wrapper__sliderArrow right' onClick={() => handleClick("right")}></ArrowForwardIosOutlinedIcon>
            </div>
        </div >
    )
}

export default List
