import { MOVIE_DATA_FETCHED, NOT_FOUND } from "../Type";

const INITAL_STATE = {
    Title:null,
    Year:null,
    Rated:null,
    Released:null,
    Runtime:null,
    Genre:null,
    Director:null,
    Actors:null,
    Plot:null,
    Poster:null,
    Ratings:[],
    imdbVotes:null,
    Writer:null,
    not_found:false,
    Language:null,
    data_fetched:false,
    Country:null,
    Type:null,
    Awards:null
}

export default (state = INITAL_STATE, action) => {
    switch(action.type)  {
        case MOVIE_DATA_FETCHED:
            return {...state, ...action.payload ,data_fetched:true};
        case NOT_FOUND:
            return {...INITAL_STATE, not_found:true};
        default:
            return state;
    }
}