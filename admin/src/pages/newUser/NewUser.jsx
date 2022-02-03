import { UserContext } from "../../context/userContext/UserContext";
import "./newUser.css";
import { useContext, useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUser } from "../../context/userContext/apiCalls";
import { useNavigate } from "react-router-dom";

export default function NewUser() {
    const [user, setUser] = useState({});
    const [profilePicture, setProfilePicture] = useState(null);
    const [uploaded, setUploaded] = useState(0);

    const navigate = useNavigate();

    const { dispatch } = useContext(UserContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    }

    const upload = (items) => {
        items.forEach(item => {
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
                        setUser(prev => {
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
        ]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(user, dispatch);
        navigate('/users');
    }

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="username" name="username" onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="email" name="email" onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" name="password" onChange={handleChange} />
                </div>
                <div className="newUserItem">
                    <label>Profile Picture</label>
                    <input type="file" id="img" name="profilePicture" onChange={(e) => setProfilePicture(e.target.files[0])} />
                </div>
                <div className="newUserItem">
                    <label>Is Admin?</label>
                    <select className="newUserSelect" name="isAdmin" id="active" onChange={handleChange}>
                        <option >Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                {
                    uploaded === 1 ? <button className="newUserButton" onClick={handleSubmit}>Create</button> : <button className="newUserButton" onClick={handleUpload}>Upload</button>
                }

            </form>
        </div>
    );
}