import { React, useState } from 'react';
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='userList__table__user'>
                        <img src={params.row.avatar} alt='Profile Pic' className='userList__table__user__image'></img>
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 90 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className='userList__table__action__button'>
                                {params.row.action}
                            </button>
                        </Link>
                        <DeleteOutlineIcon className='userList__table__action__icon' onClick={() => handleDelete(params.row.id)}></DeleteOutlineIcon>
                    </>
                )
            }
        },
    ];



    return <div className='userList'>
        <div className='userList__table'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>    </div>;
};

export default UserList;
