import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchVocab, startTrue, startFalse } from '../../redux/actionCreators.js';
import Spinner from '../spinner/Spinner.js';
import { Button } from 'reactstrap';
import axios from 'axios';




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



class VocabFvtTable extends Component {

    componentDidMount = () => {
        this.props.fetchVocab();


    }




    fvt(item) {
        // console.log(item.id);
        let url = "https://vocabshuffler-default-rtdb.firebaseio.com/vocabs"


        axios.put(`${url}/${item.id}.json`, { word: item.word, meaning: item.meaning, fvt: false })
            .then(response => {
                //console.log(response);
                window.location.reload(false);
            })
            .catch(err => {
                // error
            })

        //console.log(this.props.history.push("/FvtVocab"));

        //this.props.history.push("/FvtVocab")

        // axios.put(`${url}/-MZPjyLXqwHCy1xM45VR.json`, { ...item, fvt: true })
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(err => {
        //         // error
        //     })
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

        let fvtlist = sortedVocab.filter(item => item.fvt === true)

        console.log(fvtlist);

        let items = fvtlist.map(item => {
            return (

                <div

                    style={{
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
                    <Button style={{ marginLeft: "2%" }} outline color="danger" onClick={() => this.fvt(item)}>X</Button>


                </div >



            )
        })

        return (
            <div className="container">
                <div style={{ textAlign: "center", margin: "20px 0px" }}>
                    {/* <h2 style={{ display: "inline-block", marginRight: "100px" }}> Word</h2>
                    <h2 style={{ display: "inline-block" }}> Meaning</h2> */}
                    <h3>Favourite List</h3>
                </div>

                { this.props.vocabLoading ? <Spinner /> : items}

            </div >

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VocabFvtTable);