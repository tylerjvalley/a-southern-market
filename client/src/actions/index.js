import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export function addToCart(payload) {
    return { type: ADD_TO_CART, payload: payload } 
};


export function removeFromCart(id) {
    return { type: REMOVE_FROM_CART, id: id }
}
