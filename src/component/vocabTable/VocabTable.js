import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchVocab, startTrue, startFalse } from '../../redux/actionCreators.js';
import Spinner from '../spinner/Spinner.js';


const mapDispatchToProps = dispatch => {
    return {
        fetchVocab: () => dispatch(fetchVocab()),
        startTrue: () => dispatch(startTrue()),
        startFalse: () => dispatch(startFalse()),
    }
}

const mapStateToProps = state => {
    return {
        vocab: state.vocab,
        start: state.start,
        vocabLoading: state.vocabLoading
    }
}



class VocabTable extends Component {

    componentDidMount = () => {
        this.props.fetchVocab();


    }







    render() {
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const wordA = a.word.toUpperCase();
            const wordB = b.word.toUpperCase();

            let comparison = 0;
            if (wordA > wordB) {
                comparison = 1;
            } else if (wordA < wordB) {
                comparison = -1;
            }
            return comparison;
        }

        let sortedVocab = this.props.vocab.sort(compare);

        let items = sortedVocab.map(item => {
            return (

                <div style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px 0px 20px 0px",
                    margin: "20px",
                    textAlign: "center"


                }}>

                    <h4 style={{ display: "inline-flex", paddingRight: "10px" }}>{item.word} </h4>
                    <h4 style={{ display: "inline-flex", paddingRight: "10px" }}>:</h4>
                    <h4 style={{ display: "inline-block" }}>{item.meaning}</h4>

                </div >



            )
        })

        return (
            <div className="container">
                <div style={{ textAlign: "center", margin: "20px 0px" }}>
                    {/* <h2 style={{ display: "inline-block", marginRight: "100px" }}> Word</h2>
                    <h2 style={{ display: "inline-block" }}> Meaning</h2> */}
                    <h3>Vocab List</h3>
                </div>

                { this.props.vocabLoading ? <Spinner /> : items}

            </div >

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VocabTable);