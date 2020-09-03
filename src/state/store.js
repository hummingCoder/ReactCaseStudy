import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import {creditReducer} from "./credit/reducer";


const reducers = combineReducers({
    credit: creditReducer,
});
export const store = createStore(reducers,
    applyMiddleware(thunk) // to add other middleware
);
