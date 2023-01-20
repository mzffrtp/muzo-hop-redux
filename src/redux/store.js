import {createStore, combineReducers} from "redux";

import { productReducers } from "./reducers/productReducers";

const rootReducer = combineReducers({
    productState: productReducers
});

const store = createStore(rootReducer)

export default store;