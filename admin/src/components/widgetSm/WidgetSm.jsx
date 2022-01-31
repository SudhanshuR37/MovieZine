import { React, useEffect, useState } from 'react';
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

const WidgetSm = () => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("http://localhost:8800/server/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjE0ZGEyNTY1ZTU1NDI0YmYxZmQwNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzYyMjU2MywiZXhwIjoxNjQ0MDU0NTYzfQ.hWvINsccSg2uxTlRmLi5y-FDYYcpxh4xxFkrfCWrawQ",
                    },
                });
                setNewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getNewUsers();
    }, []);

    return <div className='widgetSm'>
        <span className='widgetSm__title'>New Join Members</span>
        <ul className='widgetSm__list'>
            {newUsers.map((user) => (
                <li className='widgetSm__list__listItem'>
                    <img src={user.profilePicture || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&usqp=CAU'} alt='Profile Picture' className='widgetSm__list__listItem__image' ></img>
                    <div className='widgetSm__list__listItem__user'>
                        <span className='widgetSm__list__listItem__user__username'>{user.username}</span>
                    </div>
                    <button className='widgetSm__list__listItem__button'>
                        <VisibilityIcon className='widgetSm__list__listItem__button__icon'></VisibilityIcon>
                        Display
                    </button>
                </li>
            ))}
        </ul>
    </div>;
};

export default WidgetSm;
