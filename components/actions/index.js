// axios
import { RECEIVED_DATA, REQUESTED_DATA } from '../constants';
import axios from 'axios';


export const getLocation = (zip) => dispatch => {
     axios.get(`http://localhost:3000?location=${zip}&radius=500`)
        .then(res =>{
            dispatch({type: REQUESTED_DATA, data: res.data })
        })
}

export const sendData = data => ({ type: REQUESTED_DATA, newInput: input })

export const addInput = input => ({ type: INPUT_DATA, newInput: input })