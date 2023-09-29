import { FILTERS, GET_USERS, POST_RESPONSE } from "../Actions";

let initialState = {
    allUsers: [],
    usersFiltered: [],
    filters: false
}

function rootReducer (state = initialState, action){
    switch (action.type) {

        case GET_USERS:
            return {
                ...state,
                allUsers: action.payload
            };
            
        case FILTERS:
            if(action.payload==="asc"){
                return{
                    ...state,
                    filters: true,
                    usersFiltered: [...state.allUsers].sort((prev, next)=>{
                        if(prev.name>next.name) return -1
                        if(prev.name<next.name) return 1
                        return 0
                    })
                }
            }else if(action.payload==="dct"){
                return{
                    ...state,
                    filters: true,
                    usersFiltered: [...state.allUsers].sort((prev, next)=>{
                        if(prev.name>next.name) return 1
                        if(prev.name<next.name) return -1
                        return 0
                    })
                }
            }
            // else if(action.payload==="filter"){
            //     return{
            //         ...state,
            //         filters: true,
            //         usersFiltered: [...state.allUsers].filter((user)=> user.pokemon==="pikachu")
            // }

        default: return state
            break;
    }
}

export default rootReducer;