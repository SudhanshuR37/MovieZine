import {
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@mui/icons-material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import "./user.css";
import { storage } from "../../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import { useNavigate } from 'react-router-dom';

export default function User() {
    const location = useLocation();
    const user = location.state;
    const navigate = useNavigate();

    const [updatedUser, setUpdatedUser] = useState(user);
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);
    const [uploaded, setUploaded] = useState(0);

    const { dispatch } = useContext(UserContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setUpdatedUser({ ...updatedUser, [e.target.name]: value });
    }

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const storageRef = ref(storage, `/items/${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setUpdatedUser(prev => {
                            return { ...prev, [item.label]: downloadURL };
                        })
                        setUploaded(prev => prev + 1);
                    });
                }
            );
        });
    }

    const handleUpload = (e) => {
        e.preventDefault();
        upload([
            { file: profilePicture, label: "profilePicture" },
        ])
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(updatedUser, dispatch);
        navigate('/users');
    }

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src={user.profilePicture}
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.username}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.username}</span>
                        </div>
                        <div className="userShowInfo">
                            <AdminPanelSettingsIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.isAdmin ? "Admin" : "Not an Admin"}</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder={user.username}
                                    className="userUpdateInput"
                                    name="username"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder={user.email}
                                    className="userUpdateInput"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Password</label>
                                <input
                                    type="text"
                                    placeholder="Password"
                                    className="userUpdateInput"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Is Admin?</label>
                                <select id="isAdmin" name="isAdmin" className="select" onChange={handleChange}>
                                    <option >Select</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src={user.profilePicture}
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" name="profilePicture" id="file" style={{ display: "none" }} onChange={(e) => setProfilePicture(e.target.files[0])} />
                            </div>
                            {
                                uploaded === 1 ? <button className="userUpdateButton" onClick={handleSubmit}>Update</button> : <button className="userUpdateButton" onClick={handleUpload}>Upload</button>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}