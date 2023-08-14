import {ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV} from './action-type'
import axios from "axios"

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };


// export const addFav = (favorite) =>{
//     return{
//         type: ADD_FAV,
//         payload: favorite,
//     }
// }


export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };
// export const removeFav = (id) => {
//     return{
//         type: REMOVE_FAV,
//         payload: id,
//     }
// }

export const filterFav = (gender) =>{
    return {
        type: FILTER_FAV,
        payload: gender
    }
}

export const orderFav = (order) => {
    return{
        type: ORDER_FAV,
        payload: order
    }
}