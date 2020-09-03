import {SET_RESULT} from "./constants";


export const setResultAction = (result) => {
    return {
        type: SET_RESULT,
        result
    };
};

export const calculateCreditAction = (formData) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:8080/creditApplications/", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin,
            body: JSON.stringify(formData) // body data type must match "Content-Type" header
        })
        const data = await response.json();
        dispatch(setResultAction(data));
    }
}



