import * as types from './types';


export function addToCart(payload) {
    return { type: types.ADD_TO_CART, payload: payload } 
};


export function removeFromCart(id) {
    return { type: types.REMOVE_FROM_CART, id: id }
}

export function addToCheckout(payload) {
    return { type: types.ADD_TO_CHECKOUT}
}
