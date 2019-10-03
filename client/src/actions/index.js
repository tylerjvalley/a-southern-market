import { ADD_TO_CART } from './types';

export function addToCart(payload) {
    return { type: ADD_TO_CART, payload }
};