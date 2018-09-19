// axios
import { RECEIVED_DATA, REQUESTED_DATA } from '../constants';
import axios from 'axios';
import { MAP_DATA } from '../constants'

export const getLocation = () => dispatch => {
    dispatch({ type: REQUESTED_DATA });

    axios.get('https://api.yelp.com/v3/businesses/search')
        .then(res =>{
            dispatch({type: RECEIVED_DATA, data: res.data })
        })
}