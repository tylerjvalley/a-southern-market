import * as types from './types';


export function addToCart(payload) {
    return { type: types.ADD_TO_CART, payload: payload } 
};


export function removeFromCart(id) {
    return { type: types.REMOVE_FROM_CART, id: id }
}

export function setTotal(payload) {
    return { type: types.SET_TOTAL, payload: payload }
}