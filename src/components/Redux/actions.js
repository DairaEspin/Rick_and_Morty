import {ADD_FAV, REMOVE_FAV} from './action-type'

export const addFav = (favorite) =>{
    return{
        type: ADD_FAV,
        payload: favorite,
    }
}

export const removeFav = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id,
    }
}