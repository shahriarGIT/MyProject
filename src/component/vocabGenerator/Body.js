import React, { Component } from 'react';
import { incrementArray, decrementArray, startTrue, startFalse, fetchVocab, loadVocab } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import VocabList from './VocabList.js';
import Spinner from "../spinner/Spinner.js"

const mapDispatchToProps = dispatch => {
    return {
        fetchVocab: () => dispatch(fetchVocab()),
        incrementArray: () => dispatch(incrementArray()),
        decrementArray: () => dispatch(decrementArray()),
        startTrue: () => dispatch(startTrue()),
        startFalse: () => dispatch(startFalse()),
        loadVocab: (vocab) => dispatch(loadVocab(vocab)),


    }
}

const mapStateToProps = state => {
    return {
        vocab: state.vocab,
        start: state.start,
        arrayCounter: state.arrayCounter,
        vocabLoading: state.vocabLoading
    }
}
let vocabItem = null;


class Body extends Component {




    state = {
        count: 0,
        swap: false

    }

    componentDidMount = () => {

        this.props.fetchVocab();
        this.props.startFalse();


    }






    nextVocab = () => {


        if (this.state.count >= 0 && this.state.count < this.props.vocab.length - 1) {
            this.setState({ count: this.state.count + 1 })
            vocabItem = <VocabList swapState={this.state.swap} prev={this.prevVocab} next={this.nextVocab} object={this.props.vocab[this.state.count + 1]} />
            this.props.incrementArray();
        }
        else {
            this.setState({ count: this.props.vocab.length - 1 })
        }





    }

    prevVocab = () => {

        this.props.decrementArray();
        if (this.state.count > 0 && this.state.count < this.props.vocab.length) {
            this.props.decrementArray();
            this.setState({ count: this.state.count - 1 })
            vocabItem = <VocabList swapState={this.state.swap} prev={this.prevVocab} next={this.nextVocab} object={this.props.vocab[this.state.count - 1]} />

        }
        else {

            this.props.decrementArray();
        }






    }


    start = () => {

        vocabItem = <VocabList swapState={this.state.swap} prev={this.prevVocab} next={this.nextVocab} object={this.props.vocab[this.state.count]} />

        this.props.startTrue();

    }

    end = () => {

        this.props.startFalse();
        this.props.loadVocab(this.props.vocab);
        this.setState({ count: 0 })

    }

    toggleSwap = () => {
        this.setState({ swap: !this.state.swap })
    }



    render() {

        let item = null;
        if (this.props.vocabLoading === true) {
            item = <Spinner />
        }
        else {
            item = (
                <div style={{ textAlign: "center" }}>
                    <Button disabled={this.props.start} style={{ margin: "10px" }} size="lg" color="primary" onClick={this.start}>Start</Button>
                    <Button style={{ marginRight: "0rem" }} color="danger" size="lg" onClick={this.end}>End</Button>
                    <Button style={{ display: "absolute", marginLeft: "3rem", backgroundColor: "#9fd8df", color: "black" }} size="sm" onClick={this.toggleSwap}>Swap</Button>
                    {this.state.swap ? <p style={{ display: "inline", marginLeft: "1rem", paddingTop: "30px" }} >On </p> : null}
                </div>)


        }


        return (
            <div style={{ margin: "50px" }}>

                {item}

                {this.props.start ? vocabItem : null}

                {this.props.start ? <h2>{this.state.count + 1} of {this.props.vocab.length}</h2> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);