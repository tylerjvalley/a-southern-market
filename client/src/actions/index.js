import { ADD_TO_CART, GET_ITEMS } from './types';

export function addToCart(payload) {
    return { type: ADD_TO_CART, payload: payload } 
};

export function getItems(payload) {
    return { type: GET_ITEMS }
}