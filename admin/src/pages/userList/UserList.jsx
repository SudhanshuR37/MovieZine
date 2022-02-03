import { React, useState, useContext, useEffect } from 'react';
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext/UserContext';
import { deleteUser, getUsers } from '../../context/userContext/apiCalls';

const UserList = () => {
    const { users, dispatch } = useContext(UserContext);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch])

    const handleDelete = (id) => {
        deleteUser(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        {
            field: 'user', headerName: 'User', width: 250, renderCell: (params) => {
                return (
                    <div className='userList__table__user'>
                        <img src={params.row.profilePicture} alt='' className='userList__table__user__image'></img>
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'isAdmin', headerName: 'Is Admin?', width: 120 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row._id} state={params.row}>
                            <button className='userList__table__action__button'>
                                Edit
                            </button>
                        </Link>
                        <DeleteOutlineIcon className='userList__table__action__icon' onClick={() => handleDelete(params.row._id)}></DeleteOutlineIcon>
                    </>
                )
            }
        },
    ];



    return <div className='userList'>
        <div className='userList__table'>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(r) => r._id}
            />
        </div>    </div>;
};

export default UserList;
