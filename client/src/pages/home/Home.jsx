import './home.scss'
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);

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

export default Home
