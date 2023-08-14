import {ADD_FAV, REMOVE_FAV, ORDER_FAV, FILTER_FAV} from './action-type'
import axios from "axios";

const initialState = {
    myFavorites: [],
    allFavorites: [],
    detail: {}
}

export function rootReducer (state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            return{
                 ...state, myFavorites: payload, allCharacters: payload
            }


            // ...state,
                // myFavourites: [...state.myFavorites, action.payload],
                // allFavorites: [...state.allFavorites, action.payload]


                case 'REMOVE_FAV':
                    return { ...state, myFavorites: payload };

                    
            // case REMOVE_FAV:
            //     let newFavorites = state.myFavorites.filter(char => char.id !== action.payload)
            //     return{
            //         ...state,
            //         myFavourites: newFavorites,
            //         allFavorites: newFavorites
            //     }

            case ORDER_FAV:
            let favoritesOrdered = state.myFavorites.sort((a, b) => {
                return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id
            })
            return {
                ...state,
                myFavorites: favoritesOrdered
            }

            case FILTER_FAV:
                let favoritesFiltered = action.payload === "All" ? state.allFavorites : state.allFavorites.filter
                return{
                    ...state,
                    myFavorites: favoritesFiltered
                }

                default: 
                return state
    }
}

export default rootReducer;