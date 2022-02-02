import "./newList.css";
import { useState, useContext, useEffect } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewList() {
    const [list, setList] = useState(null);

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie)
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value })
    }
    console.log(list);
    // const upload = (items) => {
    //     items.forEach(item => {
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
    //                     setMovie(prev => {
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
    //         { file: video, label: "video" },
    //     ]);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addProductForm">
                <div className="formLeft">

                    <div className="addProductItem">
                        <label>Title</label>
                        <input type="text" placeholder="John Wick" name="title" onChange={handleChange} />
                    </div>
                    <div className="addProductItem">
                        <label>Genre</label>
                        <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
                    </div>
                    <div className="addProductItem">
                        <label>Type</label>
                        <select name="type" id="type" onChange={handleChange}>
                            <option >Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>
                </div>
                <div className="formRight">
                    <div className="addProductItem">
                        <label>Content</label>
                        <select multiple name="content" id="type" onChange={handleSelect} style={{ height: "280px" }}>
                            {
                                movies.map((movie) => (
                                    <option key={movie._id} value={movie._id}>{movie.title}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <button className="addProductButton" >Upload</button>

            </form>
        </div>
    );
}