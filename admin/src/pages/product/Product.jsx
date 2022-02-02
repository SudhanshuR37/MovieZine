import { Link, useLocation } from "react-router-dom";
import "./product.css";
import { Publish } from "@mui/icons-material";
import { useState, useContext } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function Product() {
    const location = useLocation();
    const movie = location.state;

    const [updatedMovie, setUpdatedMovie] = useState(movie);
    const [img, setImg] = useState(movie.img);
    const [imgTitle, setImgTitle] = useState(movie.imgTitle);
    const [imgThumbnail, setImgThumbnail] = useState(movie.imgThumbnail);
    const [trailer, setTrailer] = useState(movie.trailer);
    const [video, setVideo] = useState(movie.video);
    const [uploaded, setUploaded] = useState(0);

    const { dispatch } = useContext(MovieContext);
    const handleChange = (e) => {
        const value = e.target.value;
        setUpdatedMovie({ ...updatedMovie, [e.target.name]: value });
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
                        setUpdatedMovie(prev => {
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
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgThumbnail, label: "imgThumbnail" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" }
        ])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateMovie(updatedMovie, dispatch);
    }

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={movie.img} alt="" className="productInfoImg" />
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">year:</span>
                            <span className="productInfoValue">{movie.year}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">limit:</span>
                            <span className="productInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Movie Title</label>
                        <input type="text" placeholder={movie.title} name="title" onChange={handleChange} />
                        <label>Description</label>
                        <input type="text" placeholder={movie.description} name="description" onChange={handleChange} />
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre} name="genre" onChange={handleChange} />
                        <label>Year</label>
                        <input type="text" placeholder={movie.year} name="year" onChange={handleChange} />
                        <label>Duration</label>
                        <input type="text" placeholder={movie.duration} name="duration" onChange={handleChange} />
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit} name="limit" onChange={handleChange} />
                        <label>Is Series?</label>
                        <select id="isSeries" className="select" onChange={handleChange}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <label>Title Image</label>
                        <input type="file" name="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
                        <label>Thumbnail Image</label>
                        <input type="file" name="imgThumbnail" onChange={(e) => setImgThumbnail(e.target.files[0])} />
                        <label>Trailer</label>
                        <input type="file" name="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
                        <label>Video</label>
                        <input type="file" name="video" onChange={(e) => setVideo(e.target.files[0])} />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={movie.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish className="publish_icon" />
                            </label>
                            <input type="file" name="img" id="file" style={{ display: "none" }} onChange={(e) => setImg(e.target.files[0])} />
                        </div>
                        {
                            uploaded === 5 ? <button className="productButton" onClick={handleSubmit}>Update</button> : <button className="productButton" onClick={handleUpload}>Upload</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}