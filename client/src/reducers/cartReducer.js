import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';


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

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.id)
            }
        default:
            return state;
    }
};

export default cartReducer;