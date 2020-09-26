import * as actionTypes from './actionTypes';

//synchronus functions
export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

//asynchronous function, with  redux thunk middleware
export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            //dont over use getstate
            // const oldCounter = getState().ctr.counter;
            // console.log('old counter : ' + oldCounter);
            dispatch(saveResult(res))
        }, 2000);
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
}