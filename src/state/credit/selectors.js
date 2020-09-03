import {createSelector} from "reselect";

export const creditSelector = createSelector(
    (state) => state.credit.formData,
    (formData) => formData
);

export const resultSelector = createSelector(
    (state) => state.credit.result,
    (result) => result
);
