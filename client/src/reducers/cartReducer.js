import * as types from '../actions/types';


const initialState = {
    items: [],
    totalPrice: 0
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

        case types.SET_TOTAL:
            return {
                ...state,
                totalPrice: action.payload
            }
            
        default:
            return state;
    }
};

export default cartReducer;