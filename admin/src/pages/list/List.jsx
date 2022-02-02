import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@mui/icons-material";
import { useState, useContext, useEffect } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { updateMovie, getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/apiCalls"

export default function List() {
    const location = useLocation();
    const list = location.state;

    const [updatedList, setUpdatedList] = useState(list);

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie)
    }, [dispatchMovie]);

    // const { dispatch } = useContext(MovieContext);
    const handleChange = (e) => {
        const value = e.target.value;
        setUpdatedList({ ...updatedList, [e.target.name]: value });
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setUpdatedList({ ...updatedList, [e.target.name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateList(updatedList, dispatch);
    }
    console.log(updatedList);

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
                        <input type="text" placeholder={list.title} name="title" onChange={handleChange} />
                        <label>Genre</label>
                        <input type="text" placeholder={list.genre} name="genre" onChange={handleChange} />
                        <label>Type</label>
                        <select name="type" id="type" onChange={handleChange}>
                            <option >Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        {/* {
                            uploaded === 5 ? <button className="productButton" >Update</button> : <button className="productButton" >Upload</button>
                        } */}
                        <label>Content</label>
                        <select multiple name="content" id="type" onChange={handleSelect} style={{ height: "280px" }}>
                            {
                                movies.map((movie) => (
                                    <option key={movie._id} value={movie._id}>{movie.title}</option>
                                ))
                            }
                        </select>
                        <button className="productButton" onClick={handleSubmit}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}