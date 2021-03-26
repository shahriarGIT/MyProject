import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from "axios";
import { connect } from 'react-redux';
import { Alert } from "reactstrap";
import { fetchVocab } from '../../redux/actionCreators';

const mapStateToProps = state => {
    return {
        vocab: state.vocab
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVocab: () => dispatch(fetchVocab()),
    }
}

class VocabForm extends Component {

    state = {
        msg: null
    }

    componentDidMount = () => {
        this.props.fetchVocab();
    }



    render() {

        let form = (
            <Formik
                initialValues={
                    {
                        word: "",
                        meaning: "",
                    }
                }

                onSubmit={

                    (values) => {


                        let vocabObj = {
                            word: values.word,
                            meaning: values.meaning
                        }

                        if (this.props.vocab.find(element => element.word === values.word)) {


                            this.setState({ msg: <Alert style={{ margin: "20px" }} color="danger">This Word Already Exist</Alert> })
                            setTimeout(() => {
                                this.setState({ msg: null })
                            }, 3000)

                        }
                        else {
                            axios.post("https://vocabshuffler-default-rtdb.firebaseio.com/vocabs.json", vocabObj)
                                .then(response => {
                                    if (response.status === 200) {
                                        this.setState({ msg: <Alert style={{ margin: "20px" }} color="success">Vocab Uploaded Successfully</Alert> })
                                        setTimeout(() => {
                                            this.setState({ msg: null })
                                        }, 3000)
                                        this.props.fetchVocab();

                                    }
                                    else {
                                        //upload failed try again
                                    }
                                })
                                .catch(err => {
                                    // error
                                })


                        }






                    }
                }

                validate={
                    (values) => {
                        const errors = {};

                        if (!values.word) {
                            errors.word = 'Required';
                        } else if (!isNaN(values.word)) {
                            errors.word = 'Number is not allowed';
                        }

                        if (!values.meaning) {
                            errors.meaning = 'Required';
                        } else if (!isNaN(values.meaning)) {
                            errors.meaning = 'Number is not allowed';
                        }

                        return errors;
                    }

                }
            >

                {({ values, handleChange, handleSubmit, errors }) => (
                    <div style={{
                        border: "1px grey solid",
                        padding: "20px",
                        margin: "15px",
                        borderRadius: "7px",
                    }}>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="word"
                                placeholder="Enter Your Vocab"
                                className="form-control"
                                value={values.word}
                                onChange={handleChange}
                            />
                            <span style={{ color: "red" }}><p>{errors.word}</p></span>
                            <br />
                            <input
                                name="meaning"
                                placeholder="Enter The Meaning"
                                className="form-control"
                                value={values.meaning}
                                onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>{errors.meaning}</span>
                            <br />

                            <button type="submit" className="btn" style={{ margin: "10px", backgroundColor: "#274472", color: "white" }}>Submit</button>
                        </form>
                    </div>)}


            </Formik >
        )


        return (
            <div>
                {this.state.msg}
                {form}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VocabForm);