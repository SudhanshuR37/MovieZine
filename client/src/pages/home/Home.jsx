import './home.scss'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

const home = ({ type }) => {
    return (
        <div className="home">
            <Navbar></Navbar>
            <Featured type={type}></Featured>
            <List listTitle={"Continue to Watch"}></List>
            <List></List>
            <List></List>
            <List></List>
        </div>
    )
}

export default home
