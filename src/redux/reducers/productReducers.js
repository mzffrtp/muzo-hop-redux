import { ActionTypes } from "../actions/ActionTypes";
import productActions from "../actions/productActions"

const initialState = {
    products: [],

};

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
};


export const selectedProductReducers = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {
                ...state, ...payload
            };
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return { };
        default:
            return state;
    }
}
