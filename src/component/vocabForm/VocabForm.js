import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from "axios";


class VocabForm extends Component {


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

                        axios.post("https://vocabshuffler-default-rtdb.firebaseio.com/vocabs.json", vocabObj)
                            .then(response => {
                                if (response.status === 200) {
                                    console.log("Success");
                                }
                                else {
                                    console.log("Upload failed");
                                }
                            })
                            .catch(err => {
                                console.log("Other errors");
                            })



                    }
                }

                validatin={
                    (values) => {
                        const errors = {};

                        if (!values.word) {
                            errors.word = 'Required';
                        } else if (!isNaN(values.word)) {
                            errors.email = 'Number is not allowed';
                        }

                        if (!values.meaning) {
                            errors.meaning = 'Required';
                        } else if (!isNaN(values.word)) {
                            errors.meaning = 'Number is not allowed';
                        }

                        return errors;
                    }

                }
            >

                {({ values, handleChange, handleSubmit, errors }) => (
                    <div style={{
                        border: "1px grey solid",
                        padding: "15px",
                        margin: "20px",
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
                            <span style={{ color: "red" }}>{errors.word}</span>
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

                            <button type="submit" className="btn" style={{ backgroundColor: "#274472", color: "white" }}>Submit</button>
                        </form>
                    </div>)}


            </Formik>
        )


        return (
            <div>
                {form}
            </div>
        )
    }
}

export default VocabForm;