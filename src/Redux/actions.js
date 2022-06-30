import axios from "axios";
export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";
export const CLEAN_CITY = "CLEAN_CITY";
const {REACT_APP_API_KEY} = process.env;

export function addCity(search) {
  return async function (dispatch) {
    try {
      console.log(process.env);
      let info = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${REACT_APP_API_KEY}&lang=es`
      );
      if (info.data.name) {
        let enviacion = {
          id: info.data.id,
          name: info.data.name,
          temp: info.data.main.temp,
          tempmax: info.data.main.temp_max,
          tempmin: info.data.main.temp_min,
          icon: info.data.weather,
          country: info.data.sys.country,
        };
        return dispatch({
          type: ADD_CITY,
          payload: enviacion,
        });
      } else if (info.data.message) {
        let enviacion = {
          message: "city not found",
        };
        dispatch({
          type: ADD_CITY,
          payload: enviacion,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

// export function addCity(search) {
//     return function (dispatch) {
//         axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=bcd237f9e7ccb7869bb703107b89a9ea`)
//             .then((response) => {
//                 dispatch({
//                     type: ADD_CITY,
//                     payload: response.data
//                 })
//                 console.log(22222, response.data)
//             }).catch((error) => {
//                 console.log(error)
//             })
//     }
// }

export function cleanAllCity() {
  return {
    type: CLEAN_CITY,
  };
}

export function deleteCity(id) {
  return {
    type: DELETE_CITY,
    payload: id,
  };
}
