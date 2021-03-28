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

    }

    componentDidMount = () => {

        this.props.fetchVocab();
        this.props.startFalse();
        console.log("Mounted", this.props.vocab);

    }

    componentDidUpdate = () => {
        console.log("Updated Mount", this.props.vocab, "isLoading", this.props.vocabLoading);
    }





    nextVocab = () => {


        if (this.state.count >= 0 && this.state.count < this.props.vocab.length - 1) {
            this.setState({ count: this.state.count + 1 })
            vocabItem = <VocabList prev={this.prevVocab} next={this.nextVocab} object={this.props.vocab[this.state.count + 1]} />
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
            vocabItem = <VocabList prev={this.prevVocab} next={this.nextVocab} object={this.props.vocab[this.state.count - 1]} />

        }
        else {
            //this.setState({ count: 0 })
            this.props.decrementArray();
        }






    }


    start = () => {
        //(state.arrayCounter === state.vocab.length - 1 ? state.vocab.length - 1 : state.arrayCounter + 1)


        console.log("count", this.state.count);


        console.log("count", this.state.count);
        vocabItem = <VocabList prev={this.prevVocab} next={this.nextVocab} object={this.props.vocab[this.state.count]} />

        console.log("count", this.state.count);
        this.props.startTrue();

    }

    end = () => {

        this.props.startFalse();
        this.props.loadVocab(this.props.vocab);
        this.setState({ count: 0 })
        //this.setState({ count: 1 });

        //vocabItem = <VocabList next={this.nextVocab} object={this.props.vocab[this.props.arrayCounter]} />
    }



    render() {

        let item = null;
        if (this.props.vocabLoading === true) {
            item = <Spinner />
        }
        else {
            item = (
                <div>
                    <Button disabled={this.props.start} style={{ margin: "10px" }} size="lg" color="primary" onClick={this.start}>Start</Button>
                    <Button color="danger" size="lg" onClick={this.end}>End</Button>
                </div>)


        }


        return (
            <div style={{ margin: "50px" }}>

                {item}
                {vocabItem}

                {this.props.start ? <h2>{this.state.count + 1} of {this.props.vocab.length}</h2> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);