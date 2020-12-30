//Combining all the reducers

import {combineReducers} from 'redux'
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
})

// Its just a possible configuraton for redux persisit to use 
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

export default persistReducer(persistConfig, rootReducer)