import React, { Component } from 'react';
import { incrementArray, fetchVocab, toggleStart } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import VocabList from './VocabList.js';

const mapDispatchToProps = dispatch => {
    return {
        fetchVocab: () => dispatch(fetchVocab()),
        toggleStart: () => dispatch(toggleStart()),
        incrementArray: () => dispatch(incrementArray())
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
        count: 1,
    }

    componentDidMount = () => {

        this.props.fetchVocab();

        if (this.props.start) {
            this.props.toggleStart();
        }
        else {
            return false;
        }



    }





    nextVocab = () => {
        this.props.incrementArray();

        if (this.state.count < this.props.vocab.length) {
            this.setState({ count: this.state.count + 1 })
        }
        else {
            this.setState({ count: 1 })
        }

        vocabItem = <VocabList next={this.nextVocab} object={this.props.vocab[this.props.arrayCounter]} />



    }

    start = () => {

        this.props.toggleStart();
        this.props.incrementArray();
        this.setState({ count: 1 });

        vocabItem = <VocabList next={this.nextVocab} object={this.props.vocab[this.props.arrayCounter]} />
    }



    render() {



        return (
            <div style={{ margin: "50px" }}>
                <Button style={{ margin: "10px" }} size="lg" color="primary" onClick={this.start}>Start</Button>
                <Button color="danger" size="lg" onClick={this.start}>End</Button>
                { this.props.vocabLoading === true ? vocabItem = <p>loading</p> : null}
                { this.props.start === true ? vocabItem : null}
                {this.props.start ? <h2>{this.state.count} of {this.props.vocab.length}</h2> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);