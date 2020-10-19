import { combineReducers } from 'redux';
import products from './products/reducer';
import favorites from './favorites/reducer';
import cart from './cart/reducer';
import modal from './modal/reducer';

const rootReducer = combineReducers({
    products,
    favorites,
    cart,
    modal
  })

export default rootReducer;