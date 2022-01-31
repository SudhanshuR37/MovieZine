import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./AuthAction";

export const login = async (user, dispatch) => {
    dispatch(loginStart());

    try {
        const res = await axios.post('http://localhost:8800/server/auth/login', user);
        res.data.isAdmin && dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}