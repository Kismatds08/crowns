import {userActionTypes} from './user.types'

//Action Creator

export const setCurrentUser = user => (
    //Action
    {
        type: userActionTypes.SET_CURRENT_USER, //Mandatory
        payload: user // paylod is optional
    }
)

// // Action Creator 
// export const addToCart = productDetail => (
//    // Action
//   {
//      type: 'ADD_TO_CART', // Mandatory
//        payload: productDetail // payload is optional    
//      }
//  )