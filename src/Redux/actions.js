import axios from "axios"
export const ADD_CITY = "ADD_CITY"
export const DELETE_CITY = "DELETE_CITY"
export const CLEAN_CITY = "CLEAN_CITY"
const { API_KEY } = process.env

// export function addCity(search) {
//     return async function(dispatch){
//         try{
//             let info = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bcd237f9e7ccb7869bb703107b89a9ea`)
//             console.log (2222, info.data)
//         return dispatch({
//             type: ADD_CITY,
//             payload: info.data
//         })
//         } catch (error){
//             console.log(error)
//         }
//     }
// }

export function addCity(search) {
    return function (dispatch) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bcd237f9e7ccb7869bb703107b89a9ea`)
            .then((response) => {
                dispatch({
                    type: ADD_CITY,
                    payload: response.data
                })
                console.log(22222, response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

}

export function deleteCity(){
    return async function (dispatch){
        try{
            
            
        } catch (error){
            console.log(error)
        }
    }
}