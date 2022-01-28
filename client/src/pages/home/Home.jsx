import './home.scss'
import React, { useEffect, useState } from 'react'
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
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjE0ZGEyNTY1ZTU1NDI0YmYxZmQwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzM1NzI2MiwiZXhwIjoxNjQzNzg5MjYyfQ.RL4nkOkAqZTXAjXVulmb7DO8-oTUo08OUxOkGsdLD-4"
                    }
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
            <Featured type={type}></Featured>
            {
                lists.map((list) => (
                    <List list={list}></List>
                ))
            }
        </div>
    )
}

export default Home
