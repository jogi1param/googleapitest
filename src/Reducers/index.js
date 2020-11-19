import { types } from '../Types/types';

const initialState = {
    searchResult: [],
    errorMsg: '',
    searchValue: ''
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_BEGIN:
            return state;
        
        case types.SEARCH_SUCCESS:
            return {
                ...state,
                searchResult: action.payload
            }

        case types.SEARCH_ERROR:
            return {
                ...state,
                errorMsg: action.payload
            }

        case types.HANDLE_INPUT:
            return {
                ...state,
                searchValue: action.payload
            }

        default:
            return state
    }
}