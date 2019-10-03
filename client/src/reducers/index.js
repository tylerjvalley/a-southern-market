import { ADD_TO_CART } from '../actions/types';


const initialState = {
    items: []
};


function rootReducer(state = initialState, action) {
   switch (action.type) {
        case ADD_TO_CART:
            return Object.assign({}, state, {
                items: state.items.concat(action.payload)
            });
               
        default:
            return state;
   }
};


export default rootReducer;