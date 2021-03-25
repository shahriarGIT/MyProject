import vocab from '../assets/vocabs.js';
import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    vocab: [],
    start: false,
    arrayCounter: 0
}

let swap = vocab => {

    for (let i = 0; i < vocab.length; i++) {
        let ran = Math.floor(Math.random() * vocab.length);
        let temp = vocab[ran];
        vocab[ran] = vocab[i];
        vocab[i] = temp;
    }

    return vocab;
}

export const reducer = (state = INITIAL_STATE, action) => {



    switch (action.type) {
        case actionTypes.LOAD_VOCABS:
            swap(vocab);
            return {
                ...state,
                vocab: swap(vocab),
            }
        case actionTypes.TOGGLE_START:

            return {
                ...state,
                start: (state.start ? false : true)
            }

        case actionTypes.INCREMENT_ARRAY:
            return {
                ...state,
                arrayCounter: (state.arrayCounter === 3 ? state.arrayCounter = 0 : state.arrayCounter + 1),
            }

        default:
            return state;
    }


}