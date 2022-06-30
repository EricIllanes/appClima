import { ADD_CITY, DELETE_CITY, CLEAN_CITY } from "./actions"
const initialState={
cities:[]
}

export default function rootReducer( state =initialState, action){
    switch(action.type){
        case ADD_CITY:
            console.log(10, action.payload)
            if(state.cities.find((e) => e.name === action.payload.name)){
            return {
                ...state,
                cities: state.cities,
            } 
            }else {
                return {
                    ...state,
                    cities: [...state.cities, action.payload],
            }
        }
   
        case DELETE_CITY:
            const filteredArray= state.cities.filter(e =>{ 
                return e.id !== action.payload})
            return {
                ...state,
                cities: filteredArray
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