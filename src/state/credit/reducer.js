import {initialState, CALCULATE_CREDIT, SET_RESULT} from "./constants";

export const creditReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT:
            return {...state, result: action.result};
        default:
            break;
    }
    return state;
};
