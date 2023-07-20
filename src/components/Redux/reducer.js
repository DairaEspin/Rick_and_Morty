import {ADD_FAV, REMOVE_FAV} from './action-type'

const initialState = {
    myFavourites: [],
    detail: {}
}

export function rootReducer (state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavourites: [...state.myFavourites, action.payload]
            }
            case REMOVE_FAV:
                return{
                    ...state,
                    myFavourites: state.myFavourites.filter(char => char.id !== action.payload)
                }
                default: 
                return state
    }
}

export default rootReducer;