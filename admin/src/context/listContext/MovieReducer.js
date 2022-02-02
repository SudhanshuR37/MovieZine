const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: false
            }
            break;

        case "GET_MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false
            }
            break;

        case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: false,
                error: true
            }
            break;

        case "DELETE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
            break;

        case "DELETE_MOVIE_SUCCESS":
            return {
                movies: state.movies.filter(movie => movie._id !== action.payload),
                isFetching: false,
                error: false
            }
            break;

        case "DELETE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
            break;

        case "CREATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
            break;

        case "CREATE_MOVIE_SUCCESS":
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: false
            }
            break;

        case "CREATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
            break;

        case "UPDATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
            break;

        case "UPDATE_MOVIE_SUCCESS":
            return {
                movies: state.movies.map((movie) => movie._id === action.payload._id && action.payload),
                isFetching: false,
                error: false
            }
            break;

        case "UPDATE_MOVIE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
            break;

        default:
            return { ...state };
            break;
    }
}

export default MovieReducer;