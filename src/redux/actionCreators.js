import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const loadVocab = vocab => {

    return {
        type: actionTypes.LOAD_VOCABS,
        payload: vocab,
    }
}


export const fetchVocab = () => dispatch => {

    let vocab = [];
    axios.get("https://vocabshuffler-default-rtdb.firebaseio.com/vocabs.json")
        .then(response => {
            for (let key in response.data) {
                vocab.push({
                    ...response.data[key],
                    id: key,
                })
            }
            dispatch(loadVocab(vocab));
        })
        .catch(err => {

        })




}

export const startTrue = () => {
    return {
        type: actionTypes.START_TRUE,
    }
}

export const startFalse = () => {
    return {
        type: actionTypes.START_FALSE,
    }
}

export const incrementArray = () => {
    return {
        type: actionTypes.INCREMENT_ARRAY,
    }
}

export const decrementArray = () => {
    return {
        type: actionTypes.DECREMENT_ARRAY,
    }
}