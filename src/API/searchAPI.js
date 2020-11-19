import axios from 'axios';
import { searchBegin, searchSuccess, searchFail } from '../Actions/actions';

const API_KEY = 'f837846f04cd4f59966ee65134e69022'

export const getSearchResults = (searchValue) => {
    const fetchUrl = `http://newsapi.org/v2/everything?q=${searchValue}&from=2020-10-18&sortBy=publishedAt&apiKey=${API_KEY}`
    return (dispatch) => {
        dispatch(searchBegin());
                axios.get(fetchUrl)
                    .then(res => {
                        console.log('res', res);
                        dispatch(searchSuccess(res.data.articles))}
                        )
                    .catch(err => dispatch(searchFail(err)))
    }

}