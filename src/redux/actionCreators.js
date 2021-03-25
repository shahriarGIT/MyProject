import * as actionTypes from './actionTypes.js';

export const loadVocab = () => {
    return {
        type: actionTypes.LOAD_VOCABS,
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