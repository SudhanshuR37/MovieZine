import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@mui/icons-material";
import { useState, useContext } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function List() {
    const location = useLocation();
    const list = location.state;

    // const [updatedMovie, setUpdatedMMovie] = useState(movie);
    // const [img, setImg] = useState(movie.img);
    // const [imgTitle, setImgTitle] = useState(movie.imgTitle);
    // const [imgThumbnail, setImgThumbnail] = useState(movie.imgThumbnail);
    // const [trailer, setTrailer] = useState(movie.trailer);
    // const [video, setVideo] = useState(movie.video);
    // const [uploaded, setUploaded] = useState(0);

    // const { dispatch } = useContext(MovieContext);
    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setUpdatedMMovie({ ...updatedMovie, [e.target.name]: value });
    // }

    // const upload = (items) => {
    //     items.forEach((item) => {
    //         const fileName = new Date().getTime() + item.label + item.file.name;
    //         const storageRef = ref(storage, `/items/${fileName}`);
    //         const uploadTask = uploadBytesResumable(storageRef, item.file);

    //         uploadTask.on('state_changed',
    //             (snapshot) => {
    //                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 console.log('Upload is ' + progress + '% done');
    //                 switch (snapshot.state) {
    //                     case 'paused':
    //                         console.log('Upload is paused');
    //                         break;
    //                     case 'running':
    //                         console.log('Upload is running');
    //                         break;
    //                 }
    //             },
    //             (error) => {
    //                 console.log(error)
    //             },
    //             () => {
    //                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                     setUpdatedMMovie(prev => {
    //                         return { ...prev, [item.label]: downloadURL };
    //                     })
    //                     setUploaded(prev => prev + 1);
    //                 });
    //             }
    //         );
    //     });
    // }

    // const handleUpload = (e) => {
    //     e.preventDefault();
    //     upload([
    //         { file: img, label: "img" },
    //         { file: imgTitle, label: "imgTitle" },
    //         { file: imgThumbnail, label: "imgThumbnail" },
    //         { file: trailer, label: "trailer" },
    //         { file: video, label: "video" }
    //     ])
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     updateMovie(updatedMovie, dispatch);
    // }
    // console.log(updatedMovie);
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>
                <Link to="/newList">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <span className="productName">{list.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{list._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">{list.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">type:</span>
                            <span className="productInfoValue">{list.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>List Title</label>
                        <input type="text" placeholder={list.title} name="title" />
                        <label>Type</label>
                        <input type="text" placeholder={list.type} name="type" />
                        <label>Genre</label>
                        <input type="text" placeholder={list.genre} name="genre" />
                    </div>
                    <div className="productFormRight">
                        {/* {
                            uploaded === 5 ? <button className="productButton" >Update</button> : <button className="productButton" >Upload</button>
                        } */}
                        <button className="productButton" >Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}