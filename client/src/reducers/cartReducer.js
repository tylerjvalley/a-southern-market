import { ADD_TO_CART, GET_ITEMS } from '../actions/types';

const initialState = {
    items: [],
};


function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: state.items.concat(action.payload)
            };
        case GET_ITEMS:
            return state.items

        default:
            return state;
    }
};

export default cartReducer;