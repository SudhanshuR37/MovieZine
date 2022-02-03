import './home.scss'
import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import axios from 'axios';

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/server/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar></Navbar>
            <Featured type={type} setGenre={setGenre}></Featured>
            {
                lists.map((list) => (
                    <List list={list}></List>
                ))
            }
        </div>
    )
}

export default Home
