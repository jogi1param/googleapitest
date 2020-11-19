import React from 'react';
import { handleInput, filteredResult } from '../Actions/actions';
import { connect } from 'react-redux';

const SearchInput = ({ onHandleChange, filteredResult, searchValue }) => {

    return (
        <div className="Container">
            <input type="text" value={searchValue} onChange={onHandleChange} />
            <button onClick={() => filteredResult(searchValue)}>Search</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResult: state.searchResult,
        searchValue: state.searchValue
    }
}

const mapDisptachToProps = (dispatch, state) => {
    console.log(this,state)
    return {
        onHandleChange: (e) => dispatch(handleInput(e.target.value)),
        filteredResult: (e) => dispatch(filteredResult(e))
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(SearchInput);