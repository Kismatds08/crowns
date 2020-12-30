//Combining all the reducers

import {combineReducers} from 'redux'
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

// Its just a possible configuraton for redux persisit to use 
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

export default persistReducer(persistConfig, rootReducer)