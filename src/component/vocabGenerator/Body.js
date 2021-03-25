import React, { Component } from 'react';
import { incrementArray, loadVocab, toggleStart } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import VocabList from './VocabList.js';

const mapDispatchToProps = dispatch => {
    return {
        loadVocab: () => dispatch(loadVocab()),
        toggleStart: () => dispatch(toggleStart()),
        incrementArray: () => dispatch(incrementArray())
    }
}

const mapStateToProps = state => {
    return {
        vocab: state.vocab,
        start: state.start,
        arrayCounter: state.arrayCounter,
    }
}

let vocabItem = null;

class Body extends Component {

    state = {
        count: 1
    }

    componentDidMount = () => {
        this.props.loadVocab();
        console.log("Did Mount", this.props.start, "Counter:", this.props.arrayCounter);

    }


    nextVocab = () => {
        this.props.incrementArray();
        console.log("Counter:", this.props.arrayCounter);
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
        this.props.loadVocab();
        this.setState({ count: 1 })
        vocabItem = <VocabList next={this.nextVocab} object={this.props.vocab[this.props.arrayCounter]} />
    }



    render() {

        return (
            <div style={{ margin: "50px" }}>
                <Button style={{ margin: "10px" }} size="lg" color="primary" onClick={this.start}>Start</Button>
                <Button color="danger" size="lg" onClick={this.props.toggleStart}>End</Button>

                { vocabItem}
                {this.props.start ? <h2>{this.state.count} of {this.props.vocab.length}</h2> : null}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);