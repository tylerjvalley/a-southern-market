import * as types from '../actions/types';


const initialState = {
    items: [],
    prices: 0,
};


function cartReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                items: state.items.concat(action.payload)
            };

        case types.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.id)
            }
        case types.CHANGE_QUANTITY:
            return state
        default:
            return state;
    }
};

export default cartReducer;