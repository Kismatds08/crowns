import {userActionTypes} from './user.types'
/* eslint-disable default-case */
//If we dedine this initial state cpmpnent takes the default value that got assigned
const INITIAL_STATE ={
    currentUser: null
}

//Reducer
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER: 
        return {
            currentUser: action.payload 
        }
        default :
        return state
    }
}

export default userReducer;
