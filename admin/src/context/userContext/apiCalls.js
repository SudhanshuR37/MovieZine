import axios from "axios";
import { getUsersStart, getUsersSuccess, getUsersFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, createUserStart, createUserSuccess, createUserFailure, updateUserStart, updateUserSuccess, updateUserFailure } from "./UserAction"

//get
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("http://localhost:8800/server/users", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getUsersSuccess((res.data)));
    } catch (err) {
        dispatch(getUsersFailure());
    }
};

//delete
export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        await axios.delete("http://localhost:8800/server/users/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};

//create
export const createUser = async (user, dispatch) => {
    dispatch(createUserStart());
    try {
        const res = await axios.post("http://localhost:8800/server/users/", user, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createUserSuccess(res.data));
    } catch (err) {
        dispatch(createUserFailure());
    }
};

//update
export const updateUser = async (user, dispatch) => {
    dispatch(updateUserStart());
    try {
        const res = await axios.put("http://localhost:8800/server/users/" + user._id, user, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateUserSuccess(res.data));
    } catch (err) {
        dispatch(updateUserFailure());
    }
};