import { ActionTypes } from "../actions/ActionTypes";
import productActions from "../actions/productActions"

const initialState = {
    products: [{
        id:1,
        name:"x",
        category:"y"
    }],

};

export const productReducers = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
};