import { ADD_CITY, DELETE_CITY, CLEAN_CITY } from "./actions"
const initialState={
cities:[]
}

export default function rootReducer( state =initialState, action){
    switch(action.type){
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }
            case DELETE_CITY:
                
            return {
                ...state,
                cities: action.payload
            }
        case CLEAN_CITY:
            return {
                ...state,
                cities: []
            }
    default:
        return state
}
}