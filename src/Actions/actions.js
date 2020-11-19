import { types } from "../Types/types";
import { getSearchResults } from '../API/searchAPI';

export const searchBegin = () => {
    return {
        type: types.SEARCH_BEGIN
    };
};

export const searchSuccess = (payload) => {
    console.log('searchSuccess')
    return {
        type: types.SEARCH_SUCCESS,
        payload: payload
    };
};

export const searchFail = (payload) => {
    console.log('searchFail')
    return {
        type: types.SEARCH_ERROR,
        payload: payload
    };
};

export const handleInput = (payload) => {
    return {
        type: types.HANDLE_INPUT,
        payload: payload
    };
};

export const filteredResult = (searchValue) => (dispatch, getState) => {
    if (searchValue) {
        dispatch(getSearchResults(searchValue))
    } else {
        dispatch(searchFail('err'))
    };
};