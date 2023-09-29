import axios from "axios"

// ACTIONS-TYPES
export const GET_USERS = "GET_USERS"
export const POST_RESPONSE = "POST_RESPONSE"
export const FILTERS = "FILTERS"
//

// ACTIONS

export function postUser(info){
    return async function(dispatch){
        try {
            const response = await axios.post("http://localhost:3001/users/", info);
            console.log(response.data)
            alert("La informacion se posteo exitosamente.")
            return dispatch({
                type: POST_RESPONSE,
                payload: response.status
            })
        } catch (error) {
            console.log(error)
            alert(error.response.data.error)
            //alert("Sucedió un error en el backend.")
        }
    }
}

export function getUsers(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/users/")
            console.log(response)
            return dispatch({
                type: GET_USERS,
                payload: response.data
            })
        } catch (error) {
            alert("SUCEDIÓ UN ERROR AL REQUERIR LOS USUARIOS.")
        }
    }
}

export function filter(orden){
    return function(dispatch){
        return dispatch({
            type:FILTERS,
            payload:orden
        })
    }
}