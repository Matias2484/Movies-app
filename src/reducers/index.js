import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from "../actions";


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer (state = initialState, action){

    if(action.type === ADD_MOVIE_FAVORITE){
        
        return{
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
            //moviesFavourites: [...state.moviesFavourites,action.payload.title]
        };
    }
    
    if(action.type === GET_MOVIES){
        return{
            ...state,
            moviesLoaded: action.payload.Search
        };
    }

    if(action.type === REMOVE_MOVIE_FAVORITE){
        return{
            ...state,
            moviesFavourites: state.moviesFavourites.filter((movie) => movie.imdbID !== action.payload)
        };
    }

    if(action.type === GET_MOVIE_DETAIL){
        return{
            ...state,
            movieDetail: action.payload
        };
    }
    return state; 

}    

export default rootReducer; 