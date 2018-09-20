// axios
import { RECEIVED_DATA, REQUESTED_DATA } from '../constants';
import axios from 'axios';


export const getLocation = (zip) => dispatch => {
    dispatch({ type: REQUESTED_DATA });

    let config = {
        header: {
            Authorization: 'Bearer SPlOW5mPO6FHbiwobWsp5xnPlohewSzdV9LNLTZ6xOXhBix3tbexOCaoMb2pTpLlNa4127b6Kj1hfyHqM3iu0KK6fuLEad4mDsCUhfMTxEPyEr55UGkK75FpQ8KhW3Yx'
        }
    }

    axios.get(`https://api.yelp.com/v3/businesses/search?location=${zip}`, config)
        .then(res =>{
            dispatch({type: RECEIVED_DATA, data: res.data })
        })
}

export const addInput = input => ({ type: INPUT_DATA, newInput: input })