import axios from "axios";
import { getListsStart, getListsSuccess, getListsFailure, deleteListStart, deleteListSuccess, deleteListFailure, createMovieStart, createMovieSuccess, createMovieFailure, updateMovieStart, updateMovieSuccess, updateMovieFailure } from "./ListAction"


//get
export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("http://localhost:8800/server/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getListsSuccess((res.data)));
    } catch (err) {
        dispatch(getListsFailure());
    }
};

//delete
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("http://localhost:8800/server/lists/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListSuccess(id));
    } catch (err) {
        dispatch(deleteListFailure());
    }
};

// //create
// export const createMovie = async (movie, dispatch) => {
//     dispatch(createMovieStart());
//     try {
//         const res = await axios.post("http://localhost:8800/server/movies/", movie, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });
//         dispatch(createMovieSuccess(res.data));
//     } catch (err) {
//         dispatch(createMovieFailure());
//     }
// };

// //update
// export const updateMovie = async (movie, dispatch) => {
//     dispatch(updateMovieStart());
//     try {
//         const res = await axios.put("http://localhost:8800/server/movies/" + movie._id, movie, {
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//             },
//         });
//         dispatch(updateMovieSuccess(res.data));
//     } catch (err) {
//         dispatch(updateMovieFailure());
//     }
// };