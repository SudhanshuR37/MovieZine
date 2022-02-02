const ListReducer = (state, action) => {
    switch (action.type) {
        case "GET_LISTS_START":
            return {
                lists: [],
                isFetching: true,
                error: false
            }
            break;

        case "GET_LISTS_SUCCESS":
            return {
                lists: action.payload,
                isFetching: false,
                error: false
            }
            break;

        case "GET_LISTS_FAILURE":
            return {
                lists: [],
                isFetching: false,
                error: true
            }
            break;

        case "DELETE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
            break;

        case "DELETE_LIST_SUCCESS":
            return {
                lists: state.lists.filter(list => list._id !== action.payload),
                isFetching: false,
                error: false
            }
            break;

        case "DELETE_LIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
            break;

        // case "CREATE_MOVIE_START":
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: false
        //     }
        //     break;

        // case "CREATE_MOVIE_SUCCESS":
        //     return {
        //         movies: [...state.movies, action.payload],
        //         isFetching: false,
        //         error: false
        //     }
        //     break;

        // case "CREATE_MOVIE_FAILURE":
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: true
        //     }
        //     break;

        // case "UPDATE_MOVIE_START":
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: false
        //     }
        //     break;

        // case "UPDATE_MOVIE_SUCCESS":
        //     return {
        //         movies: state.movies.map((movie) => movie._id === action.payload._id && action.payload),
        //         isFetching: false,
        //         error: false
        //     }
        //     break;

        // case "UPDATE_MOVIE_FAILURE":
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: true
        //     }
        //     break;

        default:
            return { ...state };
            break;
    }
}

export default ListReducer;