import {createStore, combineReducers} from "redux";

import { productReducers, selectedProductReducers } from "./reducers/productReducers";

const rootReducer = combineReducers({
    productState: productReducers,
    product: selectedProductReducers
});

const store = createStore(rootReducer)

export default store;