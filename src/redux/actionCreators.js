import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const loadVocab = () => {
    let vocab = [];
    axios.get("https://vocabshuffler-default-rtdb.firebaseio.com/vocabs.json")
        .then(response => {

            for (let key in response.data) {
                vocab.push({
                    ...response.data[key],
                    id: key,
                })
            }
        })

    return {
        type: actionTypes.LOAD_VOCABS,
        payload: vocab,
    }
}

export const toggleStart = () => {
    return {
        type: actionTypes.TOGGLE_START,
    }
}

export const incrementArray = () => {
    return {
        type: actionTypes.INCREMENT_ARRAY,
    }
}