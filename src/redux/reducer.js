
import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    vocab: [],
    start: false,
    arrayCounter: 0,
    vocabLoading: true
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
            return {
                ...state,
                vocab: swap(action.payload),
                vocabLoading: false
            }
        case actionTypes.START_TRUE:

            return {
                ...state,
                start: true
            }

        case actionTypes.START_FALSE:

            return {
                ...state,
                start: false,
                //vocabLoading: true
            }

        case actionTypes.INCREMENT_ARRAY:
            return {
                ...state,
                arrayCounter: state.arrayCounter + 1,
            }
        case actionTypes.DECREMENT_ARRAY:
            return {
                ...state,
                arrayCounter: (state.arrayCounter === 0 ? 0 : state.arrayCounter - 1),
            }



        default:
            return state;
    }


}